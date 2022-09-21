import * as React from 'react';
import { Text, View, StyleSheet , Dimensions, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

function HomeScreen() {
  return (
      <View style={styles.containerP}>
    <View style={styles.container}>
      <View style={[styles.caja, styles.caja1]}>
      <Text style={{fontSize:45, marginStart:110,marginTop:10}}>SERIES</Text>
       
      </View>
     
   </View>

    <View >
       <Image
        source= {require('./img/1.jpg')}
        style={styles.img1}
       />
       <Text style={styles.img1}>Harry Potter</Text>
    </View>

    <View  >
       <Image
        source= {require('./img/descarga.jpg')}
        style={styles.img2}
       />
         <Text style={styles.txt2}>Stranger Things</Text>
    </View>

    <View >
       <Image
        source= {require('./img/3.jpg')}
        style={styles.img3}
       />
       <Text  style={styles.img3}>Ozarks</Text>
    </View>

     <View >
       <Image
        source= {require('./img/4.jpg')}
        style={styles.img4}
       />
     
    </View>
    <View>
         <Text style={styles.txt4}>Casa de Papel</Text>
    </View>

   
    </View>
  );
}

function SettingsScreen() {
  return (
   <View style={styles.containerP}>
    <View style={styles.container}>
      <View style={[styles.caja, styles.caja1]}>
      <Text style={{fontSize:45, marginStart:95,marginTop:10}}>PELICULAS</Text>
       
      </View>
     
   </View>

    <View >
       <Image
        source= {require('./img/5.jpg')}
        style={styles.img5}
       />
       <Text style={styles.img1}>Ni en Suenos</Text>
    </View>

    <View  >
       <Image
        source= {require('./img/6.jpg')}
        style={styles.img6}
       />
         <Text style={styles.txt2}>Cars</Text>
    </View>

    <View >
       <Image
        source= {require('./img/7.jpg')}
        style={styles.img7}
       />
       <Text  style={styles.img3}>Batman</Text>
    </View>

     <View >
       <Image
        source= {require('./img/8.jpg')}
        style={styles.img8}
       />
         <Text style={styles.txt5}>Thor</Text>
    </View>


    
    </View>
  );
}
const styles=StyleSheet.create({

img1:{
color:'brown',
height:120,
width:100,
textAlign:'center',
marginStart:60,
fontSize:20
},

img2:{
height:120,
width:110,
textAlign:'center',
marginStart:200,
marginTop:-240
},

txt4:{
height:130,
width:100,
textAlign:'center',
marginStart:230,
marginTop:-135,
fontSize:20
},

txt2:{
height:120,
width:80,
textAlign:'center',
marginStart:220,
marginTop:1,
fontSize:20
},

txt5:{
height:120,
width:80,
textAlign:'center',
marginStart:220,
marginTop:1,
fontSize:20
},

img3:{
height:130,
width:100,
textAlign:'center',
marginStart:45,
fontSize:20
},

img4:{
height:130,
width:100,
textAlign:'center',
marginStart:220,
marginTop:-258
},

img5:{
height:130,
width:100,
textAlign:'center',
marginStart:45,
fontSize:20
},

img6:{
height:120,
width:110,
textAlign:'center',
marginStart:200,
marginTop:-240
},

img7:{
height:130,
width:100,
textAlign:'center',
marginStart:45,
fontSize:20
},

img8:{
height:120,
width:110,
textAlign:'center',
marginStart:200,
marginTop:-240
},

container:{
  flex:2,
  flexDirection:'row'
},

containerP:{
  flex:2,
  alignItems:'stretch',
  justifyContent:'center'
},
  caja1:{
    backgroundColor:'orange',
    height:85

  },
 

  caja:{
  //  width:50,
 // height:40,
   flex:2
  },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Series Favoritas') {
              iconName = focused
                ? 'movie-open-check'
                : 'movie-open-check-outline';
            } else if (route.name === 'Peliculas Favoritas') {
              iconName = focused ? 'movie-filter' : 'movie-filter-outline';
            }

            // You can return any component that you like here!
            return < MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Series Favoritas" component={HomeScreen} />
        <Tab.Screen name="Peliculas Favoritas" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

