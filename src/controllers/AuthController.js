let SharedPreferences = require('react-native-shared-preferences');

export async function setToken(token) 
{
    SharedPreferences.setItem("token", token);
}

export async function getToken() 
{
    let res = null;
    SharedPreferences.getItem("key", function(value){
        res = value;
    });
    return res;
}