import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { height_percentage, width_percentage } from '../helpers/common'
import { theme } from '../constants/Theme'
import Input from '../components/Input'
import Button from '../components/Button'

const SignUp = () => {
  const router=useRouter();
  const username = useRef();
  const emailref = useRef();
  const pwdref = useRef();
  const [loading,set_loading] = useState(false);

  const onSubmit = ()=>{
    if(!emailref.current || !pwdref.current || !username.current ){
      Alert.alert('SignUp',"Please fill all the fields");
      return ;
    }
    set_loading(true);

  }
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark'/>
      <View style={styles.container}>
        <BackButton router={router}/>
        <View>
          <Text style={styles.text}>Hey,</Text>
          <Text style={styles.text}>Welcome to ConnectX</Text>
        </View>
        <View style={styles.form}>
          <Text style={{fontSize:height_percentage(1.8),color:theme.colors.text}}> Please details to create account </Text>
          <Input icon={<Icon name='lock' size={26} stroke={1.6} />} placeholder='Enter Your Username' onChangeText={value=>username.current = value}/>
          <Input icon={<Icon name='mail' size={26} stroke={1.6} />} placeholder='Enter Your Email' onChangeText={value=>emailref.current = value}/>
          <Input icon={<Icon name='lock' size={26} stroke={1.6} />} secureTextEntry placeholder='Enter Your Password' onChangeText={value=>pwdref.current = value}/>
          <Button title='Signup' loading={loading} onPress={onSubmit}/>
        </View>
        <View style={styles.footer}>
        <Text style={styles.f_text}>Already Have An Account</Text>
        <Pressable onPress={()=>router.push('Login')}>
          <Text style={[styles.f_text,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>Login</Text>
        </Pressable>
      </View>
      </View>
    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:45,
    paddingHorizontal:width_percentage(5)
  },
  text:{
    fontSize:height_percentage(4),
    fontWeight:theme.fonts.bold,
    color:theme.colors.text
  },
  form:{
    gap:23,
  },
  footer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:7,
  },
  f_text:{
    textAlign:'center',
    color:theme.colors.text,
    fontSize:height_percentage(1.8)
  }
})