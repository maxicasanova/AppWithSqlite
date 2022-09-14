import { URL_AUTH_SIGIN, URL_AUTH_SIGNUP } from "../../constants/DataBase";

import { Alert } from "react-native";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const signup = (email, password) => {
    return async dispatch => {
        try{
            const response = await fetch(URL_AUTH_SIGNUP, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });

            const data = await response.json();

            if(data.error.message === 'EMAIL_EXISTS'){
                Alert.alert(
                    'Mail ya registrado',
                    'Haga Click en ingresar',
                    [{ text: 'OK' }]
                )
            }

            dispatch({
                type: SIGNUP,
                token: data.idToken,
                userId: data.localId,
                email
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGIN, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });

        if(!response.ok) {
            const errorResponse = await response.json();

            const errorID = errorResponse.error.message;

            let message = 'No se ha podido iniciar sesión';
            if ( errorID === 'EMAIL_NOT_FOUND') message = 'El email no existe';
            if ( errorID === 'INVALID_PASSWORD') message = 'La contraseña no es correcta';

            console.log(message)

            Alert.alert(
                'Credenciales incorrectas',
                'Intente nuevamente',
                [{ text: 'OK' }]
            )
        }

        const data = await response.json();

        dispatch({
            type: LOGIN,
            token: data.idToken,
            userId: data.localId,
            email
        })
    }
}

export const logout = () => ({
    type: LOGOUT,
    token: null,
    userId: null,
    email:''
})