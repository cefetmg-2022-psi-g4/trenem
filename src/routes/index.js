import React, { useEffect, useState } from 'react';
import { getToken } from '../controllers/AuthController';
import { apiEstudante } from '../services/api';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const token = await getToken();
  
      if(token !== null) {
        await apiEstudante.post('conta/autenticar', { }, {
          headers: {
            'Authorization' : `Bearer ${token}`
          }
        }).then(function (response) {
          console.log(
            'Token carregado com sucesso = ' + token
          );
          console.log(response);
          setLoading(false);
  
        }).catch(function (error) {
          console.error(error);
          setLoading(true);
        });
      }
    } catch (error) {
      console.log("Não foi possível autenticar!", error);
    }
  }, [])


  if (loading) {
    return (
      <AuthRoutes />
    )
  }

  return (
    <AppRoutes />
  )
}


export default Routes;