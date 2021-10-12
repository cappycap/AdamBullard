import { Dimensions, Appearance, StyleSheet } from 'react-native'
import { set, get, getTTL, ttl } from '../Scripts/Storage.js'

// Unchanging stylesheets and elements.
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const btnColors = {
  primary:'#007ac8',
  caution:'#f1c40f',
  danger:'#e74c3c',
  success:'#2ecc71',
  info:'#41C3E0',
  light: '#FAFAFA',
}

export const colors = {
    mainBackground: '#1e20d',
    secondaryBackground: '2c2d32',
    mainTextColor: '#eaeaea',
    mainHighlight: '#bb9457',
    secondaryHighlight: '#2f3f62',
}

export const app = StyleSheet.create({
  container: {
    flex:1
  }
})

export const empty = StyleSheet.create({
  container: {
    flex:1
  }
})
