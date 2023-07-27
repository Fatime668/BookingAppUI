import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from '../stack/AuthStack'
import HomeStack from '../stack/HomeStack'
import FavoriteScreen from '../screens/FavoriteScreen'
import BookingScreen from '../screens/BookingScreen'
import SvgHome from '../../assets/svg/SvgHome'
import SvgFavorite from '../../assets/svg/SvgFavorite'
import SvgBooking from '../../assets/svg/SvgBooking'
import Profile from '../../assets/svg/Profile'
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()


const TabMain = () => {
  return (
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel:false,
          tabBarStyle: {
              backgroundColor:  '#20222A',
              borderTopWidth:0,
              position:"absolute",
              borderRadius:20,
              bottom:25,
              left:20,
              right:20,
              elevation:0,
              ...styles.shadow  
      
            },
         }}
        >
            <Tab.Screen name="HomeSt" component={HomeStack} 
             options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => (
                <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                <SvgHome stroke={focused ? '#01B5C4' : '#494949'} />
  
                </View>
              ),
            }}
            
            />
            <Tab.Screen name="Favorite" component={FavoriteScreen} 
             options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => (
                <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                <SvgBooking stroke={focused ? '#01B5C4' : '#494949'} />
  
                </View>
              ),
            }}
            />
            <Tab.Screen name="Booking" component={BookingScreen} 
             options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => (
                <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                <SvgFavorite stroke={focused ? '#01B5C4' : '#494949'} />
  
                </View>
              ),
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} 
             options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => (
                <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                <Profile stroke={focused ? '#01B5C4' : '#494949'} />
  
                </View>
              ),
            }}
            />
        </Tab.Navigator>
  )
}

export default TabMain

const styles = StyleSheet.create({})