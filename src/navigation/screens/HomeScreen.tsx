import { StyleSheet, TouchableOpacity,Image,FlatList, Text, View,TextInput, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Search from '../../assets/svg/Search'
import Filter from '../../assets/svg/Filter'
import Location from '../../assets/svg/Location'
import Notification from '../../assets/svg/Notification'
import Star from '../../assets/svg/Star'
import Chat from '../../assets/svg/Chat'
import Bed from '../../assets/svg/Bed'
import Wifi from '../../assets/svg/Wifi'
import Gym from '../../assets/svg/Gym'
import Heart from '../../assets/svg/Heart'

const {width} = Dimensions.get("screen")
const cardWidth = width/1.8

const Hotel = [
  {
    id:1,
    title:"Hotel-1",
    noOfBed:2,
    noOfBath:3,
    location:"Baku",
    isFeatured:true,
    isPopular:true,
    image:"https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
    room:2,
    price:90,
    isActive:false,
    amenities:[
      "wifi","pool"
    ],
    categoryId:1,

  },{
    id:2,
    title:"Hotel-1",
    noOfBed:2,
    noOfBath:3,
    location:"Baku",
    isFeatured:true,
    isPopular:true,
    image:"https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",

    room:2,
    price:90,
    isActive:false,
    amenities:[
      "wifi","pool"
    ],
    categoryId:1,
    
  },
  {
    id:3,
    title:"Hotel-1",
    noOfBed:2,
    noOfBath:3,
    location:"Baku",
    isFeatured:true,
    isPopular:true,
    photos:[
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    room:2,
    price:90,
    isActive:false,
    amenities:[
      "wifi","pool"
    ],
    categoryId:1,
    
  },
  {
    id:4,
    title:"Hotel-1",
    noOfBed:2,
    noOfBath:3,
    location:"Baku",
    isFeatured:true,
    isPopular:true,
    image:"https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
    room:2,
    price:90,
    isActive:false,
    amenities:[
      "wifi","pool"
    ],
    categoryId:1,
    
  }
]


const Card = (hotel:any,index:any) =>{
    return <View style={{...styles.card}}>
         
    </View>
}

const HomeScreen = ({navigation}:any) => {
  const [selectedCategoryIndex,setSelectedCategoryIndex] = useState(0)
  const renderItem = ({ item, index }: any) => (
    <>
    <TouchableOpacity onPress={()=>navigation.navigate("Detail",{item})}>
            <View style={{ marginHorizontal: 10, borderRadius: 20}}>
                  <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                    <View>
                      {
                          <ImageBackground borderRadius={20} resizeMode={"cover"} style={styles.image} 
                          source={{uri:'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'}}/>
                      }
                      </View>  
                      <View style={{position:"absolute",top:20,right: 20,padding:10,borderRadius:10}}>
                        <Heart/>
                      </View>
                  </View>
            </View>
            <View style={{position:"absolute",bottom:20,left:15,gap:10}}>
            <Text style={{fontSize:16,fontWeight:"bold",color:"#fff"}}>
                Jezian Gradus Hotel
              </Text>
              <Text  style={{fontSize:16,color:"#fff"}}>Paris, France</Text>
              <View style={{flexDirection:"row"}}>
                <Text  style={{fontSize:16,fontWeight:"bold",color:"#fff"}}>$29 /</Text>
                <Text style={{fontSize:16,color:"#fff"}}>Per Night</Text>
              </View>
            </View>
            {/* <View style={{position:"absolute",backgroundColor:"#fff",bottom:20,left:15,paddingVertical:20,paddingHorizontal:10,gap:10,borderRadius:20}}>
              <Text style={{fontSize:16,fontWeight:"bold"}}>
                Jezian Gradus Hotel
              </Text>
              <View style={{flexDirection:"row",alignItems:"center"}}>
              <Location/>
              <Text style={{fontSize:12}}>9175 Chestnut StreetRome, NY 13440</Text>
              </View>
            <View>
            <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
              <Bed/>
                <Text>2 Beds</Text>
              </View>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <Wifi/>
               <Text> Wifi</Text>
              </View>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <Gym/>
              <Text>  GYM</Text>
              </View>
              </View>
            </View>
            </View> */}
    </TouchableOpacity>
    </>
)

  return (
    <View style={styles.container}>
     <View  style={{paddingVertical:70,paddingHorizontal:20}}>
      <View style={styles.location}>
       <View style={{flexDirection:"row",justifyContent:"space-between",alignContent:"center"}}>
       <View style={{flexDirection:'row',alignItems:"center",columnGap:5}}>
          <Location/>
          <Text style={{color:"#fff",fontSize:16,fontWeight:"500"}}>Chenango,New York</Text>
        </View>
        <View>
        <View style={{flexDirection:"row"}}>
        <Chat/>
        <Notification/>
        </View>
        </View>
       </View>
      </View>
        <View style={styles.search}>
            <TextInput placeholderTextColor={"#707071"} placeholder='Search here ...' style={styles.searchInput}/>
           <View style={styles.searchIcon}>
           <Search/>
           </View>
           <View style={styles.searchIcon2}>
           <Filter/>
           </View>
        </View>
          <View style={{marginVertical:20}}>
          <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10,marginBottom:10}}>
          <Text style={{color:"#707071",fontSize:15,fontWeight:'bold'}}>Popular Hotel</Text>
          <Text style={{color:"#707071",fontSize:13,fontWeight:'bold'}}>See All</Text>
        </View>
          <View>
              <FlatList
               bounces={false}
               data={Hotel}
               horizontal
               showsHorizontalScrollIndicator={false}
               renderItem={renderItem}
              />
          </View>
          </View>
          <View style={{marginHorizontal:10,height: 175,}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:15}}>
            <Text style={{color:"#707071",fontSize:15,fontWeight:'bold'}}>
              Nearby Hotels
            </Text>
            <Text style={{color:"#707071",fontSize:13,fontWeight:'bold'}}>See All</Text>
            </View>
            <FlatList
            bounces={false}
            data={Hotel}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
              <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#20222A",borderRadius:20,padding:10,marginBottom:20}}>
              <View>
                <Image width={90} height={90} borderRadius={20} source={{uri:"https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80"}} />
              </View>
              <View style={{marginLeft:15,gap:10}}>
                <Text style={{color:"#fff",fontSize:15,fontWeight:"bold"}}>Zeyzang Resert Hotel</Text>
                <Text style={{color:"#707071",fontSize:12}}>507 University St.Endicott, NY 13760</Text>
                <View  style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <Text style={{color:"#707071",fontSize:13}}>
                    <Text style={{color:"#05B4C4",fontWeight:"bold",marginRight:15}}>$38</Text>
                    /Night</Text>
                  <View  style={{flexDirection:"row"}}>
                    <Star/>
                    <Text style={{color:"#707071",fontSize:13}}>
                      <Text style={{color:"#FFBB0F",fontWeight:"bold",marginRight:20}}>4,2</Text>
                       (84 Reviews)</Text>
                  </View>
                </View>
              </View>
            </View>
            )}
            />
          </View>
      </View>
     

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    position:"relative",
    backgroundColor:"#181A21",
  },
  content:{
    marginTop:0,
    zIndex: 1,
    
    backgroundColor: '#ddd',
  },
  searchInput:{
    paddingVertical:18,
    borderRadius:15,
    paddingLeft:50,
    backgroundColor:"#20222A",

  },
  searchIcon:{
    position:"absolute",
    bottom:14,
    left:20,
  },
  searchIcon2:{
    position:"absolute",
    bottom:14,
    right:20,
  },
  location:{
    marginBottom:15
  },
  card:{
    height:280,
    width:cardWidth,
    elevation:15,
    marginRight:20,
  },
  image:{
    width:270,
    height:330,
    borderRadius:15,
  }
})