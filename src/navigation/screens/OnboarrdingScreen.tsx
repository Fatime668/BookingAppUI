import { Image, FlatList, TouchableOpacity,StatusBar, SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};
const slides = [
    {
      id: '1',
      image: require('../../assets/onboarding/onboard1.png'),
      title: 'Discover places near you',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '2',
      image: require('../../assets/onboarding/onboard2.png'),
      title: 'Achieve Your Goals',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '3',
      image: require('../../assets/onboarding/onboard3.png'),
      title: 'Increase Your Value',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const Slide = ({item}:any) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={item?.image}
          style={{height: '100%', width,top:-125, resizeMode: 'contain'}}
        />
        <View style={{position:"absolute",alignItems:"flex-start",bottom:100,left:30}}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
      </View>
    );
  };
  
  const pageStyle = (isActive:any) =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: "#ccc"};
  
    const Pagination = ({index}:any) => {
      return (
        <View style={styles.pageContainer}>
          
          {[...Array(slides.length).keys()].map((_, i) =>
            i === index ? (
              <View style={pageStyle(true)} key={i} />
            ) : (
              <View style={pageStyle(false)} key={i} />
            ),
          )}
        </View>
      );
    };
  


const OnboarrdingScreen = ({navigation}:any) => 
    
    {
        const [welcomeListIndex,setWelcomeListIndex] = useState(0)
      
        const welcomeList:any = useRef();
        const onViewRef = useRef(({changed}:any) => {
          setWelcomeListIndex(changed[0].index);
        });
        const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
      
        const pageScroll = () => {
          welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
          });
        };
      
        const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
        const ref:any = React.useRef();
        const updateCurrentSlideIndex = (e:any) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const currentIndex = Math.round(contentOffsetX / width);
          setCurrentSlideIndex(currentIndex);
        };
       const Footer = () => {
          return (
            <View>
                <View
              style={{
                height: height * 0.25,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
               
              }}>
              {/* Indicator container */}
              <StatusBar hidden/>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 20,
                  
                }}>
                {/* Render indicator */}
                {slides.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.indicator,
                      currentSlideIndex == index && {
                        backgroundColor: "#05B4C4",
                        width:15,
                      },
                    ]}
                  />
                ))}
              </View>
      
              {/* Render buttons */}
              <View style={{marginBottom: 20}}>
                {currentSlideIndex == slides.length - 1 ? (
                  <View style={{height: 150}}>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => navigation.navigate('Login')}>
                      <Text style={{fontWeight: 'bold',fontFamily:"times new roman", fontSize: 15,color:"#fff"}}>
                        GET STARTED
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={{gap:10,flexDirection:"column-reverse"}}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        styles.btn,
                        {
                           
                            backgroundColor: "#d7f0f2",
                        },
                      ]}
                      onPress={() => welcomeList.current.scrollToEnd()}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 12,
                          color: "#078189",
                          fontFamily:"times new roman"
                        }}>
                        SKIP
                      </Text>
                    </TouchableOpacity>
                    <View style={{width: 15}} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => pageScroll()}
                      style={styles.btn}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontFamily:"times new roman",
                          fontSize: 12,
                          color:"#fff",

                        }}>
                        NEXT
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            </View>
          );
        };
      
        return (
          <View style={{flex: 1}}>
          <StatusBar backgroundColor={COLORS.primary} />
          <FlatList
            ref={welcomeList}
            // scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            // contentContainerStyle={{height: height * 0.65,top:50}}
            horizontal
            data={slides}
            pagingEnabled
            overScrollMode="never"
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}
            renderItem={({item}) => <Slide item={item} />}
          />
         
          <Footer />
        </View>
        )
}

export default OnboarrdingScreen

const styles = StyleSheet.create({

    subtitle: {
        color: "#000",
        fontSize: 13,
        marginTop: 10,
        fontWeight:"400",
        fontFamily:'Times new roman',
        lineHeight: 23,
        width:300
      },
      page: {
        height: 18,
        backgroundColor: "077f7a",
        borderRadius: 50,
        marginHorizontal: 5,
      },
      pageContainer: {
        flexDirection: 'row',
        
      },
      title: {
        color: "#000",
        fontFamily:'Times new roman',
        fontWeight:"bold",
        lineHeight:50,
        letterSpacing:2,
        fontSize: 40,
        width:190
      },
      image: {
        width:20
      },
      indicator: {
        top:-50,
        height: 5.5,
        width: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 3,
        borderRadius: 100,
      },
      btn: {
        top:60,
        padding:18,
        borderRadius: 50,
        backgroundColor: '#05B4C4',
        alignItems: 'center',
      },
})