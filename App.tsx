import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigation/stack/MainStack'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  const [showHomePage,setShowHomePage] = useState(false)
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
   <Provider store={store}>
     <NavigationContainer>
   <MainStack/>
    </NavigationContainer>
   </Provider>

  )
}

export default App

const styles = StyleSheet.create({})