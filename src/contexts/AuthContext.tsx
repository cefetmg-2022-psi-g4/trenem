import React, {useState, createContext, ReactNode, useEffect } from 'react';
import {apiEstudante} from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
}

type UserProps = {
  cod: string;
  nome: string;
  email: string;
  token: string;
}


type AuthProviderProps = {
  children: ReactNode;
}

type SignInProps = {
  email: string;
  senha: string;
}
  
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        cod: '',
        nome: '',
        email: '',
        token: ''
      })
    
      const [loadingAuth, setLoadingAuth] = useState(false)
      const [loading, setLoading] = useState(true);
    
      const isAuthenticated = !!user.nome; 
    
      useEffect(() => {
    
        async function getUser(){
          //Pegar os dados salvos do user
          const userInfo = await AsyncStorage.getItem('@estudante');
          let hasUser: UserProps = JSON.parse(userInfo || '{}')
    
          // Verificar se recebemos as informaçoes dele.
          if(Object.keys(hasUser).length > 0){    
            setUser({
              cod: hasUser.cod,
              nome: hasUser.nome,
              email: hasUser.email,
              token: ''
            })
    
          }
    
          setLoading(false);
    
        }
    
    
        getUser();
    
      }, [])
    
    
      async function signIn({ email, senha }: SignInProps){
        setLoadingAuth(true);
    
        try{
          const [response, setResponse] = useState({
            cod: '',
            nome: '',
            senha: '',
            email: ''
          });
          await apiEstudante.post('/conta/acessarConta',{
            email,
            senha
          }).then(function (response) {
              setResponse(response);
          })
          .catch(function (error) {
            console.error(error);
          });
          
          const { email, senha, cod, nome } = response;
    
          await AsyncStorage.setItem('@estudante', JSON.stringify(response));

          setUser({
            cod,
            nome,
            email,
            token: '',
          })
    
          setLoadingAuth(false);
    
    
        }catch(err){
          console.log('erro ao acessar', err)
          setLoadingAuth(false);
        }
    
      }
    
    
      async function signOut(){
        await AsyncStorage.clear()
        .then( () => {
          setUser({
            cod: '',
            nome: '',
            email: '',
            token: ''
          })
        })
      }
    
      return(
        <AuthContext.Provider 
          value={{ 
            user, 
            isAuthenticated, 
            signIn, 
            loading, 
            loadingAuth,
            signOut
            }}
        >
          {children}
        </AuthContext.Provider>
      )
}