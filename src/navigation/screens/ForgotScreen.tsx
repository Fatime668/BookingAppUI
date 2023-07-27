import { StyleSheet,TouchableOpacity,Image,TextInput, Text, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import EmailSvg from '../../assets/svg/EmailSvg'
import RightSvg from '../../assets/svg/RightSvg'
import { SafeAreaView } from 'react-native-safe-area-context';




const ForgotScreen = ({navigation}:any) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (

     <SafeAreaView style={styles.container}>
     <View style={{flex:1,position:'relative',top:150}}>
     <View style={{marginHorizontal:20,justifyContent:"center"}}>
        <Text style={{fontSize:25,fontWeight:'bold'}}>
          Reset Password
        </Text>
        <Text>Please enter your email address to request a password reset</Text>
      </View>
      <View style={{position:"absolute",margin:20,top:150,gap:5,flex:1}}>
  <Text style={{color:'#fff',fontSize:27,fontWeight:'bold'}}>Forgot Password ?</Text>
  <Text style={{color:'#fff'}}>Sign in continue</Text>
  </View>
   <View style={styles.wrapper}>
  
  <View
          style={{
            marginTop: 50,
            marginHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <View>
         
            <View style={{marginBottom: 20}}>
             <View style={{position:'absolute',top:15,left:15}}>
             <EmailSvg/>
             </View>
              <TextInput
              style={{borderBottomWidth:1,borderColor:"#ccc",paddingVertical:17,paddingLeft:50,borderRadius:15}}
                placeholder='margjr@gmail.com'
                selectionColor="#000"
              />
             
            
            </View>
          </View>
          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.navigate('Confirm')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
             Send
            </Text>
            
          </TouchableOpacity>
          <View style={{position:"absolute",right:20,bottom:5,padding:5,backgroundColor: "#089fad",borderRadius:50}}>
          <View style={{top:5,right:-2}}>
          <RightSvg/>
          </View>
          </View>
        </View>
</View>
     </View>
   </SafeAreaView>

  )
}

export default ForgotScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
        position:"relative",
    },
    wrapper:{
        zIndex: 1,
        backgroundColor: '#fff',
        flex:1
    },
    togglePwdStyles: {
        position: 'absolute',
        top: 15,
        right: 20,
      },
      register: {
        top:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05B4C4',
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#05B4C4',
        borderRadius: 15,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
      },
})
