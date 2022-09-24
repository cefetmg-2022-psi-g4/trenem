import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setToken(token) {
    try {
        await AsyncStorage.setItem('@token', token);
        console.log('token - ', token);
    } catch (error) {
        console.log("Não foi possível salver o token!", error);
    }
}

export async function getToken() {
    try {
        const token = await AsyncStorage.getItem('@token');
        console.log('token - ', token);
        return token;
    } catch (error) {
        console.log("Não foi possível carregar o token!", error);
    }
}