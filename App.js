import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { colors, app } from './Scripts/Styles.js'
import { useFonts } from 'expo-font'

// Import pages.
import Services from './Scripts/Services.js'
import Works from './Scripts/Works.js'
import Philosophy from './Scripts/Philosophy.js'
import Contact from './Scripts/Contact.js'

// Linking configuration.
const linking = {
  prefixes: ['https://adambullard.com'],
  config: {
    screens: {
      Services: '',
      Works: 'works',
      Philosophy: 'philosophy',
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
      <Stack.Screen name="Works" component={Works} options={{title:'Works - Adam Bullard'}} />
      <Stack.Screen name="Philosophy" component={Philosophy} options={{title:'Philosophy - Adam Bullard'}} />
      <Stack.Screen name="Contact" component={Contact} options={{title:'Contact - Adam Bullard'}} />
    </Stack.Navigator>
  </NavigationContainer>)

}

