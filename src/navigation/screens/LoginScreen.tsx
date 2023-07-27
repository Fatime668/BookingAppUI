

import { StyleSheet,TouchableOpacity,Image,TextInput, Text, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'

import User from '../../assets/svg/User';




const LoginScreen = ({navigation}:any) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (

     <View style={styles.container}>
    <ImageBackground resizeMode='contain' style={{width:"100%",height:"100%",position:'absolute',top:-250
       }} source={require('../../assets/images/img6.jpg')}>
        <View style={{ backgroundColor: "#000" ,opacity:0.4,width:"100%",height:"100%"}}>

        </View>

      </ImageBackground>

      <View style={{position:"absolute",margin:20,top:150,gap:5}}>
      <Text style={{color:'#fff',fontSize:27,fontWeight:'bold'}}>Welcome Back!</Text>
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
              {/* <Text style={{marginBottom:5}}>E-Mail Address</Text> */}
             <View style={{position:'absolute',top:15,left:15}}>
             <User/>
             </View>
              <TextInput
              style={{borderWidth:1,borderColor:"#ccc",paddingVertical:18,paddingLeft:40,borderRadius:15}}
                // label="Email"
                placeholder='Email'
                selectionColor="#000"
              />
             
              {/* <View style={{position:'relative',marginTop:20}}> */}
                {/* <Text style={{marginBottom:5}}>Password</Text> */}
                {/* <View style={{position:'absolute',top:15,left:15}}>
             <Lock/>
             </View>
                <TextInput
                  style={{borderWidth:1,borderColor:"#ccc",paddingVertical:18,paddingLeft:40,borderRadius:15}}
                  // label="Password"
                  placeholder='Password'
                  selectionColor="#000"
                  secureTextEntry={!showPassword}
                  
                /> */}
              
                {/* <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.togglePwdStyles}>
                  {showPassword ? <SvgViewEye /> : <SvgHideEye />}
                </TouchableOpacity> */}
              
              {/* </View> */}
              {/* <View style={{position:'relative',marginTop:20}}> */}
                {/* <Text style={{marginBottom:5}}>Password</Text> */}
                {/* <View style={{position:'absolute',top:15,left:15}}>
             <Lock/>
             </View> */}
                {/* <TextInput
                  style={{borderWidth:1,borderColor:"#ccc",paddingVertical:18,paddingLeft:40,borderRadius:15}}
                  // label="Password"
                  placeholder='Confirm Password'
                  selectionColor="#000"
                  secureTextEntry={!showPassword}
                  
                />
               
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.togglePwdStyles}>
                  {showPassword ? <SvgViewEye /> : <SvgHideEye />}
                </TouchableOpacity> */}
              
              {/* </View> */}
            </View>
          </View>
          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.navigate('Bottom')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
             Sign in
            </Text>
          </TouchableOpacity>
         
              
               <View style={{flexDirection:"row",alignItems:"center",bottom:-30,position:"relative",justifyContent:'center',gap:5}}>
                <Text style={{fontSize:12}}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                <Text style={{fontSize:12,fontWeight:"600",color:'#05B4C4'}}>Sign Up here</Text>
                </TouchableOpacity>
               </View>
        </View>
</View>
   </View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position:"relative",
        backgroundColor:"#05b4c4"
    },
    wrapper:{
        zIndex: 1,
        marginTop:270,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
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
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: '#05B4C4',
        borderRadius: 15,
      },
})
