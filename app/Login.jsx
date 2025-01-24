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

const Login = () => {
  const router=useRouter();
  const emailref = useRef();
  const pwdref = useRef();
  const [loading,set_loading] = useState(false);

  const onSubmit = ()=>{
    if(!emailref.current && !pwdref.current){
      Alert.alert('Login',"Please fill all the fields");
      return ;
    }
    if(!emailref.current){
      Alert.alert('Login',"Please fill the email");
      return ;
    }
    if(!pwdref.current){
      Alert.alert('Login',"Please fill the password");
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
          <Text style={styles.text}>Welcome Back</Text>
        </View>
        <View style={styles.form}>
          <Text style={{fontSize:height_percentage(1.8),color:theme.colors.text}}> Please Login To Continue </Text>
          <Input icon={<Icon name='mail' size={26} stroke={1.6} />} placeholder='Enter Your Email' onChangeText={value=>emailref.current = value}/>
          <Input icon={<Icon name='lock' size={26} stroke={1.6} />} secureTextEntry placeholder='Enter Your Password' onChangeText={value=>pwdref.current = value}/>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Button title='Login' loading={loading} onPress={onSubmit}/>
        </View>
        <View>
          
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.f_text}>Don't Have An Account</Text>
        <Pressable onPress={()=> router.push('Signup')}>
          <Text style={[styles.f_text,{color:theme.colors.primaryDark,fontWeight:theme.fonts.semibold}]}>Signup</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  )
}

export default Login

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
    gap:25,
  },
  forgotPassword:{
    textAlign:'right',
    fontWeight:theme.fonts.semibold,
    color:theme.colors.text
  },
  footer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5,
  },
  f_text:{
    textAlign:'center',
    color:theme.colors.text,
    fontSize:height_percentage(1.8)
  }
})