import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { FavoriteProvider } from './contexts/FavoriteContext'
import { DrawerNavigator } from './navigators/DrawerNavigator'

export const App = () => {
  return (
    <NavigationContainer >
      <FavoriteProvider>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <DrawerNavigator />
      </FavoriteProvider>
    </NavigationContainer>
  )
}