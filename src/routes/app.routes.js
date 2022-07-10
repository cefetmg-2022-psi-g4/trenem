import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from '../pages/Principal';
import Prova from '../pages/Prova';
import Jogar from '../pages/Jogar';
import Resultado from '../pages/Resultado';

const Stack = createNativeStackNavigator();

function AppRoutes(){

  return(
    <Stack.Navigator initialRouteName='Principal'>
        <Stack.Screen 
            name="Principal" 
            component={Principal}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Jogar"
            component={Jogar}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Prova"
            component={Prova}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Resultado"
            component={Resultado}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
  )
}

export default AppRoutes;