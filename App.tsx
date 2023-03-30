import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { DrawerNavigator } from './navigators/DrawerNavigator'

export const App = () => {
  return (
    <NavigationContainer >
      <StatusBar translucent={true} backgroundColor={'transparent'}  />
      <DrawerNavigator />
    </NavigationContainer>
  )
}