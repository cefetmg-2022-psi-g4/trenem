import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Amizades from '../pages/Amizades';
import Cadastro from '../pages/Cadastro';
import Principal from '../pages/Principal';
import Login from '../pages/Login';
import Prova from '../pages/Prova';
import Jogar from '../pages/Jogar';
import Resultado from '../pages/Resultado';
import telaInicial from '../pages/telaInicial';
import Usuario from '../pages/Usuario';

const Stack = createNativeStackNavigator();

function AppRoutes() {

    return (
        <Stack.Navigator initialRouteName='telaInicial'>
            <Stack.Screen
                name="Usuario"
                component={Usuario}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Amizades"
                component={Amizades}
                options={{ headerShown: false }}
            />

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