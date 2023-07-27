import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowLeft from '../../assets/svg/ArrowLeft'
import Heart from '../../assets/svg/Heart'


const DetailScreen = ({route}:any) => {
  const { item } = route.params;
  return (
      <View>
       <View>
       <ImageBackground borderBottomLeftRadius={50} borderBottomRightRadius={50} style={styles.image} source={{uri:"https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}}/>
         <View style={{position:'absolute',flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:50,marginHorizontal:20}}>
          <ArrowLeft/>
          <Text>Detail Screen</Text>
          <Heart/>
         </View>
      
       </View>

      </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  image:{
    width:400,
    height:350
  }
})