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
    mainHighlight: '#A4C1EC',
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
    color:colors.mainHighlight,
    fontFamily:'PoppinsSemiBold',
    fontSize:32,
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
    paddingTop:50,
    paddingLeft:50,
    paddingRight:50,
    backgroundColor:colors.secondaryBackground
  },
  categoryText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
    color:colors.mainTextColor,
    opacity:0.6,
    letterSpacing:3
  },
  bigText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:26,
    color:colors.mainTextColor,
  },
  pText: {
    fontFamily:'Poppins',
    fontSize:20,
    color:colors.mainTextColor,
    opacity:0.6,
    textAlign:'justify'
  },
  jumboRow: {
    flexDirection: 'row',
    paddingTop:0,
    paddingLeft:50,
    paddingRight:50
  },
  me: {
    flex:1,
  },
  meInfo: {
    flex:1,
    justifyContent:'flex-end'
  },
  meImage: {
    width:375,
    height:420,
    left:40,
    marginTop:20
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  introduction: {
    flex:1,
    justifyContent: 'flex-end',
    marginBottom:140
  },
  socialIcon: {
    marginRight:10
  },
  lower: {
    padding:50,
  },
  boxRow: {
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:20
  },
  box: {
    flex:1,
    padding:20,
    borderColor:colors.mainHighlight,
    borderRadius:20,
    borderWidth:0,
    backgroundColor:colors.secondaryBackground,
    alignItems:'center'
  },
  boxSpacer: {
    width:50
  },
  boxHeader: {
    borderBottomWidth:2,
    borderBottomColor:colors.mainHighlight,
    paddingBottom:10,
    marginBottom:10,
    textAlign:'center'
  }
})

export const empty = StyleSheet.create({
  container: {
    flex:1
  }
})
