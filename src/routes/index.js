import React, { useContext, useEffect, useState } from 'react';

import {View, ActivityIndicator} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import {getToken} from '../controllers/AuthController';

function Routes(){
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const token = getToken();
    
    if(token != null){
      setIsAuth(true);
    }
  }, [])

  if(loading){
    return(
      <View 
        style={{ 
          flex:1, 
          backgroundColor: '#1D1D2E', 
          justifyContent: 'center', 
          alignItems:'center' 
        }}
      >
        <ActivityIndicator size={60} color="#FFF" />
      </View>
    )
  }

  return(
    isAuth ? <AppRoutes/> : <AuthRoutes/>
  )
}


export default Routes;