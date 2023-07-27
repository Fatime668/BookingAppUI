import { StyleSheet,TouchableOpacity,Image,TextInput, Text, View, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import SvgViewEye from '../../assets/svg/ViewEyeIcon';
import SvgHideEye from '../../assets/svg/HideEyeIcon';
import GoogleSvg from '../../assets/svg/GoogleSvg';
import FaceSvg from '../../assets/svg/FaceSvg';
import EmailSvg from '../../assets/svg/EmailSvg';
import { signupUser } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import  Lock  from '../../assets/svg/Lock';




const RegisterScreen = ({navigation}:any) => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const {token ,loading}= useSelector((state: RootState) => state.authSlice);
    const handleSignUp = (values: any) => {

      const {email} = values;
      const user: any = {
        email,
        
      };
      console.log(values,'s');
      
      dispatch(signupUser(user))
        .unwrap()
        .then((data: any) => {
          console.log('Signup successful:', data);
          Alert.alert("successfully completed :)")
          navigation.navigate('Verification');
        })
        .catch((error: any) => {
          console.log('Signup failed:', error);
        });
    };
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
  return (

     <View style={styles.container}>
    <ImageBackground resizeMode='contain' style={{width:"100%",height:"100%",position:'absolute',top:-250
       }} source={require('../../assets/images/img6.jpg')}>
        <View style={{ backgroundColor: "#000" ,opacity:0.4,width:"100%",height:"100%"}}>

        </View>

      </ImageBackground>

      <View style={{position:"absolute",margin:20,top:150,gap:5}}>
 
  <Text style={{color:'#fff',fontSize:27,fontWeight:'bold'}}>Welcome !</Text>
  <Text style={{color:'#fff'}}>Sign up to continue</Text>
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
              style={{borderWidth:1,borderColor:"#ccc",paddingVertical:18,paddingLeft:50,borderRadius:15}}
                // label="Email"
                placeholder='Email'
                selectionColor="#000"
              onChangeText={(text) => setEmail(text)}
              />
              <View style={{position:'relative',marginTop:20}}> 
                <View style={{position:'absolute',top:15,left:15}}> 
             <Lock/>
             </View>
                <TextInput
                  style={{borderWidth:1,borderColor:"#ccc",paddingVertical:18,paddingLeft:40,borderRadius:15}}
                  placeholder='Password'
                  selectionColor="#000"
                  secureTextEntry={!showPassword}
                  
                />
                <TouchableOpacity style={{right: 0,position:"absolute",bottom:-30}}
                onPress={()=>navigation.navigate("Forgot")}
                >
                  <Text style={{color:'#05B4C4',fontWeight:'bold'}}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.togglePwdStyles}>
                  {showPassword ? <SvgViewEye /> : <SvgHideEye />}
                </TouchableOpacity> 
              
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.register}
            onPress={handleSignUp}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
             Sign up
            </Text>
          </TouchableOpacity>
          <View style={{bottom:-60,alignItems:"center",position:'relative',flexDirection:"row",justifyContent:"space-around"}}>
                  <Text style={{width:70,height:0.5,backgroundColor:"#ccc"}}></Text>
                  <Text style={{fontSize:12,color:"gray"}}>You can Connect with</Text>
                  <Text style={{width:70,height:0.5,backgroundColor:"#ccc"}}></Text>
                </View>
               <View style={{flexDirection:"row",bottom:-70,alignItems:"center",left:135,gap:15}}>
               <TouchableOpacity style={{padding:5,backgroundColor:"#F6F6F6",borderRadius:50}}>
                  <GoogleSvg/>
                </TouchableOpacity>
                <TouchableOpacity style={{padding:5,backgroundColor:"#F6F6F6",borderRadius:50}}>
                <FaceSvg/>
                </TouchableOpacity>
               </View>
               <View style={{flexDirection:"row",alignItems:"center",bottom:-100,position:"relative",justifyContent:'center',gap:5}}>
                <Text style={{fontSize:12}}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Verification')}>
                <Text style={{fontSize:12,fontWeight:"600",color:'#05B4C4'}}>Sign In here</Text>
                </TouchableOpacity>
               </View>
        </View>
</View>
   </View>

  )
}

export default RegisterScreen

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
        top:30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05B4C4',
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: '#05B4C4',
        borderRadius: 15,
      },
})
