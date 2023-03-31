import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

export const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: "#000"}}>
        <ActivityIndicator color={"red"} size={80} />
    </View>
  )
}