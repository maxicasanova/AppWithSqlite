import AppLoading from 'expo-app-loading';
import MainNavigation from './navigation/index';
import { Provider } from "react-redux";
import React from "react";
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
    OpenRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenMedium: require('./assets/fonts/OpenSans-Medium.ttf'),
    OpenLight: require('./assets/fonts/OpenSans-Light.ttf'),
  })

  if (!loaded) return <AppLoading />
  
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

