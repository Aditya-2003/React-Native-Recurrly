import { View, Text } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

const Onboarding = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Onboarding</Text>
      <Link href="/(auth)/sign-up">Sign Up</Link>
      <Link href="/(auth)/sign-in">Sign In</Link>
    </View>
  )
}

export default Onboarding