import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Amizades from '../pages/Amizades';
import Principal from '../pages/Principal';
import Prova from '../pages/Prova';
import Jogar from '../pages/Jogar';
import Resultado from '../pages/Resultado';
import Usuario from '../pages/Usuario';
import Notificacao from '../pages/Notificacao';
import Ranking from '../pages/Ranking';

const Stack = createNativeStackNavigator();

function AppRoutes() {

    return (
        <Stack.Navigator initialRouteName='Principal'>
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
                name="Notificacao"
                component={Notificacao}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ headerShown: false }}
            />  
            <Stack.Screen
                name="Ranking"
                component={Ranking}
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