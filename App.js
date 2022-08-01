import React, { useState } from "react";

import AppLoading from 'expo-app-loading';
import Login from './src/components/Login';
import NotesNavigator from './navigation/NotesNavigator';
// import Tasks from "./src/components/Tasks";
import { useFonts } from 'expo-font';

export default function App() {

  const loaded = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoLight: require('./assets/fonts/Roboto-Light.ttf')
  })

  if (!loaded) return <AppLoading />

  const [nombre, setNombre] = useState('')

  const [logged, setLogged] = useState(false)
  
  return (
    <>
      {!logged ?
      <Login nombre={nombre} setNombre={setNombre} setLogged={setLogged} />
      :
      <NotesNavigator nombre={nombre} />
      }
    </>
  );
}

