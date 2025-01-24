import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper';

const index = () => {
    const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title='welcome' onPress={()=> router.push('Welcome')}/>
    </ScreenWrapper>
  )
}

export default index