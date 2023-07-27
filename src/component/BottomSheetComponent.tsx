import { StyleSheet,TouchableOpacity , Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Modal from 'react-native-modal';
import Verified from '../assets/svg/Verified'

const BottomSheetComponent = ({ 
  isVisible,
  toggleBottomSheet,
  navigation,
  navigateToHomePage,
  verificationSuccess,
  setVerificationSuccess,
 }:any) => {

  const handleGoToHomepage = () => {
    setVerificationSuccess(false); // Reset the verificationSuccess state to false
    toggleBottomSheet(); // Close the bottom sheet
    navigation.navigate('Main'); // Navigate to the homepage
  };
  return (
    <Modal
    isVisible={isVisible}
    style={styles.modal}
    onBackdropPress={toggleBottomSheet}
    onBackButtonPress={toggleBottomSheet}
    useNativeDriver={true}
    >
      <View style={styles.sheetContainer}>
        <View style={{marginBottom:15,alignItems:"center",left:145,width:60,borderRadius:100,height:4,backgroundColor:"#ccc",}}>
            
        </View>
      <View style={styles.email}>
            <Verified/>
        </View>
        <View style={{marginVertical:15,gap:10,marginBottom:40}}>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:25}}>Register Success</Text>
            <Text style={{textAlign:"center",fontWeight:'400',color:"gray"}}>
                Conguralation! your account already created.
                Please login to get amazing experience.
            </Text>
        </View>
  
        <TouchableOpacity style={styles.closeButton} onPress={handleGoToHomepage}>
          <Text style={styles.closeButtonText}>Go to Homepage</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default BottomSheetComponent

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      sheetContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      sheetTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      sheetText: {
        fontSize: 16,
        marginBottom: 20,
      },
      closeButton: {
        backgroundColor: '#05B4C4',
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 25,
        marginBottom:20
      },
      closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight:"600"
      },
      email:{
        alignItems:"center",
        marginVertical:10,
        marginBottom:10,
        marginHorizontal:118,
        padding:25,
        borderRadius:150,
        borderColor:"#E6FAEF",
        borderWidth:20,
        backgroundColor:"#00D261"
    },
})