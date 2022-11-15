import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { ActivityIndicator } from 'react-native-paper';
import { listarPedidosAmizade } from '../controllers/AppController';

export default function RecarregarTela({ route, navigation }) {
    const { tela } = route.params;

    useEffect(async () => {
        if(tela == "Notificacao"){
            const response = await listarPedidosAmizade();
            navigation.navigate('Notificacao', {pedidos: response.data});
        }
    }, [])

    useFonts({
        K2D_400Regular,
    });

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fcfeff',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <ActivityIndicator size={60} color="#308B9D" />
        </View>
    );
}