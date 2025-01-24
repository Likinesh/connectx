import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/Theme'
import { height_percentage, width_percentage } from '../helpers/common'
import Loading from './Loading'

const Button = ({
    buttonstyle,
    textstyle,
    title='',
    onPress = ()=>{},
    loading=false,
    hasShadow=true
    }) => {
    const shadowStyle={
        shadowColor:theme.colors.dark,
        shadowOffset:{width:0,height:10},
        shadowOpacity:0.2,
        shadowRadius:8,
        elevation:5
      }
      if(loading){
        return(
            <View style={[styles.button,buttonstyle,{backgroundColor:'white'}]}>
                <Loading />
            </View>
        )
      }
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.button,buttonstyle,hasShadow && shadowStyle]} >
      <Text style={[styles.text,textstyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:theme.colors.primary,
        height:height_percentage(6.8),
        width:width_percentage(90),
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderCurve:'continuous',
        borderRadius:theme.radius.xxl,
    },
    text:{
        fontSize:height_percentage(2.7),
        color:'white',
        fontWeight:theme.fonts.bold,
    }
})