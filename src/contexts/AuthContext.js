import React, {useState, createContext, ReactNode, useEffect } from 'react';

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
    id: string;
    name: string;
    email: string;
    token: string
}


type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email: string;
    password: string;
}
  
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){

}