import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import {height_percentage, weight_percentage, width_percentage} from '../helpers/common'
import { theme } from '../constants/Theme';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <Image resizeMode='contain' source={require('../assets/images/Welcome.png')} style={styles.img}/>
        <View style={{gap:15}}>
        <Text style={styles.title}>Connectx</Text>
        <Text style={styles.tag}>Where every thought find a home and image tells a story</Text>
      </View>

      <View style={[styles.footer,{gap:10}]}>
        <Button title='Get Started' buttonstyle={{marginHorizontal: width_percentage(3)}} onPress={()=>router.push('Signup')}  />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.text}>Already have a account?</Text>
        <Pressable>
          <Text style={[styles.text,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]} onPress={()=>router.push('Login')}>Login</Text>
        </Pressable>
      </View>
      </View>
    </ScreenWrapper> 
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundColor:'white',
    paddingHorizontal: width_percentage(4),
  },
  img:{
    height:height_percentage(30),
    width:width_percentage(100),
    alignSelf:'center'
  },
  title:{
    color:theme.colors,
    fontSize:height_percentage(6),
    textAlign:'center',
    fontWeight:theme.fonts.extrabold
  },
  tag:{
    textAlign:'center',
    paddingHorizontal:width_percentage(12),
    fontSize:height_percentage(2.3),
    color:theme.colors.text
  },
  footer:{
    width:'100%',
    gap:20,
  },
  bottom:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5
  },
  text:{
    textAlign:'center',
    color:theme.colors.text,
    fontSize:height_percentage(2.3)
  }
})