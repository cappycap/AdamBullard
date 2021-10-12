import { Dimensions, Appearance, StyleSheet } from 'react-native'

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
    mainBackground: '#1e201d',
    secondaryBackground: '#2c2d32',
    mainTextColor: '#eaeaea',
    mainHighlight: '#bb9457',
    secondaryHighlight: '#2f3f62',
}

export const app = StyleSheet.create({
  container: {
    flex:1
  }
})

export const header = StyleSheet.create({
  header: {
    marginLeft:50,
    marginRight:50,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  headerTitle: {
    color:colors.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:30,
  },
  headerList: {
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent: 'center',
    marginTop:11
  },
  headerListItem: {
    marginLeft:15,
    justifyContent:'center',
    alignItems:'center'
  },
  headerListText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:24,
  },
  headerListItemDot: {
    padding:4,
    borderRadius:10,
    backgroundColor:colors.mainHighlight
  }
})

export const services = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  upper: {
    padding:50,
    backgroundColor:colors.secondaryBackground
  }
})

export const empty = StyleSheet.create({
  container: {
    flex:1
  }
})
