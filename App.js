import React, { useState } from "react";

import AppLoading from 'expo-app-loading';
import Login from './src/components/Login';
import NotesNavigator from './navigation/NotesNavigator';
import { Provider } from "react-redux";
import { init } from './db'
import store from './store/index.js'
import { useFonts } from 'expo-font';

init()
  .then(() => console.log('database initialized'))
  .catch((err) => {
    console.log('database fail connect')
    console.log(err.message)
  })

export default function App() {

  const loaded = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoLight: require('./assets/fonts/Roboto-Light.ttf')
  })

  if (!loaded) return <AppLoading />

  const [nombre, setNombre] = useState('');

  const [logged, setLogged] = useState(false);
  

  return (
    <Provider store={store}>
      {!logged ?
      <Login nombre={nombre} setNombre={setNombre} setLogged={setLogged} />
      :
      <NotesNavigator nombre={nombre} />
      }
    </Provider>
  );
}

