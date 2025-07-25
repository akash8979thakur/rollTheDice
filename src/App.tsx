import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

import { 
  ImageSourcePropType,
  StyleSheet, Text, View ,
  Image, 
 } from 'react-native';

 import DiceOne from '../assests/One.png'
 import DiceTwo from '../assests/Two.png'
 import DiceThree from '../assests/Three.png'
 import DiceFour from '../assests/Four.png'
 import DiceFive from '../assests/Five.png'
 import DiceSix from '../assests/Six.png'


 type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
 }>

 const Dice =({imageUrl}:DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
 }
export default function App() {
  const [diceImage, setDiceImage] = useState(DiceOne)
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFF2F2',

  },
  diceContainer:{
    margin:12,
  },
  diceImage:{
    width:200,
    height:200,
  },
  rollDiceBtnText:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:8,
    borderColor:'#8EA7E9',
    fontSize:16,
    color:'#8EA&E9',
    fontWeight:'700',
    textTransform:'uppercase',
  }
});
