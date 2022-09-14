import {
        Alert,
        Button,
        Keyboard,
        KeyboardAvoidingView,
        Platform,
        StyleSheet,
        Text,
        TextInput,
        TouchableOpacity,
        TouchableWithoutFeedback,
        View
} from "react-native";
import { login, signup } from '../store/actions/auth.action';

import  COLORS  from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { useState } from 'react'

const AuthScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const title = 'REGISTRO',
        message = 'Ya tienes cuenta?',
        messageAction = 'Ingresar',
        messageTarget = 'Login';

    const handleSignUp = () => {
        if(password.length < 6) {
            Alert.alert(
                'Password invalida',
                'Debe tener un minimo de 6 caracteres',
                [{ text: 'OK' }]
            )
        } else {
            dispatch(signup(email, password));
        }
    }

    const handleSignIn = () => {
        if(email.length === 0 || password.length === 0){
            Alert.alert(
                'Por favor complete los campos',
                'Email y Clave',
                [{ text: 'OK' }]
            )
        }else{
            dispatch(login(email, password))
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.screen}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput 
                                style={styles.input}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                onChangeText={(text) => setEmail(text)}
                            />
                            <Text style={styles.label}>Clave</Text>
                            <TextInput 
                                style={styles.input}
                                secureTextEntry
                                autoCapitalize='none'
                                onChangeText={(text) => setPassword(text)}
                            />
                            <Button title='Registrame' onPress={handleSignUp} />
                        </View>
                        <View style={styles.prompt}>
                            <Text style={styles.promptMessage}>{message}</Text> 
                            <TouchableOpacity onPress={handleSignIn}>
                                <Text style={styles.promptButton}>{messageAction}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center',
        color:COLORS.dark
    },
    container: {
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form : {
        width: '80%',
        height: 400,
        maxWidth: 400,
        padding: 25,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgrounColor: COLORS.background,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff'
    },
    prompt: {
        alingItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        color: COLORS.primary,
    },
    button: {
        backgrounColor: COLORS.primary,
    },
    inputContainer: {
        justifyContent: 'space-around',
        height: 230,
        minWidth:200
    },
    input: {
        width: 200,
        borderBottomWidth: 1.5,
        borderColor: 'grey',
    }
})

export default AuthScreen