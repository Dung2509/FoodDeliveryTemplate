import { View, Text } from 'react-native'
import React from 'react'

export default function EditPaypal({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>EditPaypal</Text>
    </View>
  )
}