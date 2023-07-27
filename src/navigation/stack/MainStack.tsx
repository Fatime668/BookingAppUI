import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack'
import TabMain from '../tab'


const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthStack} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={TabMain} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})