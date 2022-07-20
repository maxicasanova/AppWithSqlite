import React, { useState } from "react";

import AppLoading from 'expo-app-loading';
import Header from './src/components/Header';
import Login from './src/components/Login';
import Tasks from "./src/components/Tasks";
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
      <Header nombre={nombre} setLogged={setLogged} logged={logged} />
      {!logged ?
      <Login nombre={nombre} setNombre={setNombre} setLogged={setLogged} />
      :
      <Tasks />
      }
      
    </>
  );
}

