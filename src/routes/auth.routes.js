import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import telaInicial from '../pages/telaInicial';

const Stack = createNativeStackNavigator();

function AuthRoutes() {

    return (
        <Stack.Navigator initialRouteName='telaInicial'>
            <Stack.Screen
                name="telaInicial"
                component={telaInicial}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;