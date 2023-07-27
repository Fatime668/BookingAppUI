import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboarrdingScreen from '../screens/OnboarrdingScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import ForgotScreen from '../screens/ForgotScreen'
import VerificationScreen from '../screens/VerificationScreen'
import HomeStack from './HomeStack'
import TabMain from '../tab'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={OnboarrdingScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Forgot" component={ForgotScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Verification" component={VerificationScreen} options={{headerShown:false}} />
    {/* <Stack.Screen name="Home" component={TabMain} options={{headerShown:false}} /> */}
   </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})