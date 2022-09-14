import * as React from 'react';
import { Text, View, StyleSheet , Dimensions,Image,} from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  return (
    
    <View style={styles.containerP}>
    <View style={styles.container}>
      <View style={[styles.caja, styles.caja1]}>
      <Text style={{fontSize:50, marginStart:145,marginTop:15}}>4</Text>
       <Text  style={{fontSize:20, marginStart:175, marginTop:-40}}>ft Club</Text>
      </View>
     
   </View>

    <View >
       <Image
        source= {require('./img/medalla.png')}
        style={styles.img1}
       />
       <Text style={styles.img1}>Mis Medallas</Text>
    </View>

    <View  >
       <Image
        source= {require('./img/pesas.png')}
        style={styles.img2}
       />
         <Text style={styles.txt2}>Ejercicios</Text>
    </View>

    <View >
       <Image
        source= {require('./img/perfil.png')}
        style={styles.img3}
       />
       <Text  style={styles.img3}>Mi Perfil</Text>
    </View>

     <View >
       <Image
        source= {require('./img/calendario.png')}
        style={styles.img4}
       />
     
    </View>
    <View>
         <Text style={styles.txt4}>Calendario</Text>
    </View>

    <View style={styles.container}>

      <View style={[styles.caja3, styles.caja]} >
      <Text style={{textAlign:'center', fontSize:25, marginTop:10}}>www.notas.com</Text></View>

   </View>
    </View>
    

    
  );
}

const styles=StyleSheet.create({

img1:{
color:'brown',
height:130,
width:100,
textAlign:'center',
marginStart:45,
fontSize:20
},

img2:{
height:130,
width:100,
textAlign:'center',
marginStart:225,
marginTop:-250
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
height:130,
width:100,
textAlign:'center',
marginStart:225,
marginTop:-15,
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
marginStart:235,
marginTop:-258
},

container:{
  flex:1,
  flexDirection:'row'
},

containerP:{
  flex:1,
  alignItems:'stretch',
  justifyContent:'center'
},
  caja1:{
    backgroundColor:'orange',
    height:85

  },
 
  caja3:{
    backgroundColor:'gray',
    height:55,
    marginTop:-35

  },
  caja:{
  //  width:40,
 // height:40,
   flex:1
  },
});