import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { colors, app } from './Scripts/Styles.js'
import { useFonts } from 'expo-font'

// Import pages.
import Services from './Scripts/Services.js'
import Portfolio from './Scripts/Portfolio.js'
import Papers from './Scripts/Papers.js'
import Contact from './Scripts/Contact.js'

// Linking configuration.
const linking = {
  prefixes: ['https://adambullard.com'],
  config: {
    screens: {
      Services: '',
      Portfolio: 'portfolio',
      Papers: 'papers',
      Contact: 'contact'
    }
  }
}

const Stack = createStackNavigator()

export default function App() {

  const [styles, setStyles] = useState(app)

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    OCRA: require('./assets/fonts/OCRA.ttf')
  })

  return (<NavigationContainer linking={linking}>
    <Stack.Navigator headerMode="none" initialRouteName="Services">
      <Stack.Screen name="Services" component={Services} options={{title:'Services - Adam Bullard'}} />
      <Stack.Screen name="Portfolio" component={Portfolio} options={{title:'Portfolio - Adam Bullard'}} />
      <Stack.Screen name="Papers" component={Papers} options={{title:'Papers - Adam Bullard'}} />
      <Stack.Screen name="Contact" component={Contact} options={{title:'Contact - Adam Bullard'}} />
    </Stack.Navigator>
  </NavigationContainer>)

}

