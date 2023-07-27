import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useEffect, useRef, useState,useCallback,useMemo} from 'react';
  import SvgBack from '../../assets/svg/BackIcon';
  import Email from '../../assets/svg/Email';
import BottomSheetComponent from '../../component/BottomSheetComponent';
import { confirmCode } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

// import BottomSheetComponent,{BottomSheetProps} from '../../component/BottomSheetComponent';
  
  const VerificationScreen = ({navigation}: any) => {
    //bottomsheet
    const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const hideBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const navigateToHomePage = () => {
    hideBottomSheet();
    setVerificationSuccess(true);
    navigation.navigate('Main');
  };

  const isBottomSheetVisibleMemo = useMemo(() => !verificationSuccess && isBottomSheetVisible, [verificationSuccess, isBottomSheetVisible]);

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [counter, setCounter] = useState(120);

  const handleOtpChange = (index: number, value: string) => {
    setOtp(prevOtp => {
      const otpArray = [...prevOtp];
      otpArray[index] = value;
      return otpArray;
    });

    if (index < 3 && value !== '') {
      const nextIndex = index + 1;
      inputRefs.current[nextIndex]?.focus();
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter === 1) {
          clearInterval(timerInterval);
        }
        return prevCounter - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const handleResendOTP = () => {
    setCounter(120);
  };

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setBottomSheetVisible(false);
    });
  }, [navigation]);
      //verification
     
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgBack />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: '30%',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Verification
          </Text>
        </View>
        <View style={styles.email}>
            <Email/>
        </View>
  
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View>
            <Text style={{fontSize: 24,textAlign:"center", fontWeight: '600', marginTop: 25}}>
              Verification Code
            </Text>
            <Text
              style={{
                textAlign:"center",
                marginTop: 10,
                fontSize: 13,
                color:"gray",
                fontWeight: '300',
                lineHeight: 35,
              }}>
              We have to sent the code verification to
            </Text>
            <Text style={{fontWeight: '600',textAlign:"center",fontSize:12}}>magdalena83@gmail.com</Text>
  
            <View style={styles.content}>
              <TextInput
                ref={ref => (inputRefs.current[0] = ref)}
                style={styles.input}
                maxLength={1}
                value={otp[0]}
                onChangeText={value => handleOtpChange(0, value)}
                keyboardType="numeric"
              />
              <TextInput
                ref={ref => (inputRefs.current[1] = ref)}
                style={styles.input}
                maxLength={1}
                value={otp[1]}
                onChangeText={value => handleOtpChange(1, value)}
                keyboardType="numeric"
              />
              <TextInput
                ref={ref => (inputRefs.current[2] = ref)}
                style={styles.input}
                maxLength={1}
                value={otp[2]}
                onChangeText={value => handleOtpChange(2, value)}
                keyboardType="numeric"
              />
              <TextInput
                ref={ref => (inputRefs.current[3] = ref)}
                style={styles.input}
                maxLength={1}
                value={otp[3]}
                onChangeText={value => handleOtpChange(3, value)}
                keyboardType="numeric"
              />
            </View>
              <View style={{alignItems:"center"}}>
              <Text style={{fontWeight: '600'}}>{`${Math.floor(counter / 60)
                .toString()
                .padStart(2, '0')} : ${Math.floor(counter % 60)
                .toString()
                .padStart(2, '0')}`}</Text>
              </View>
          
          </View>
          <TouchableOpacity
            style={styles.submitBtn}
            // onPress={handleConfirmCode}
            >
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              Submit
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', rowGap: 5,top:10}}>
              {/* disabled={counter > 1} */}
              <View style={{flexDirection: 'row'}}>
                <Text>Didn't receive the code? </Text>
                <TouchableOpacity onPress={handleResendOTP}>
                  <Text style={{color: counter > 1 ? '#05B4C4' : '#000'}}>
                    Resend
                  </Text>
                </TouchableOpacity>
              </View>
           
            </View>
            <View style={styles.container}>
      <TouchableOpacity onPress={toggleBottomSheet} style={styles.openButton}>
        <Text style={styles.openButtonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheetComponent
          isVisible={isBottomSheetVisibleMemo}
          toggleBottomSheet={toggleBottomSheet}
          navigation={navigation}
          navigateToHomePage={navigateToHomePage}
          verificationSuccess={verificationSuccess}
          setVerificationSuccess={setVerificationSuccess}
        />
    </View>
        </View>
       
       


      </SafeAreaView>
    );
  };
  
  export default VerificationScreen;
  
  const styles = StyleSheet.create({
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
      marginBottom: 20,
      columnGap: 8,
      paddingBottom: 10,
    },
    email:{
        alignItems:"center",
        marginVertical:50,
        marginHorizontal:125,
        padding:35,
        borderRadius:150,
        borderColor:"#E5F7F9",
        borderWidth:20,
        backgroundColor:"#05B4C4"
    },
    input: {
      width: 60,
      height: 70,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      borderRadius: 20,
      textAlign: 'center',
      marginHorizontal: 5,
      fontSize: 20,
    },
    submitBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#05B4C4',
      paddingVertical: 16,
      borderWidth: 1,
      borderColor: '#05B4C4',
      borderRadius: 8,
      zIndex:999,
      marginTop:20,
      top:0,
      position:"relative"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      openButton: {
        backgroundColor: '#05B4C4',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
      },
      openButtonText: {
        color: '#fff',
        fontSize: 16,
      },
  });