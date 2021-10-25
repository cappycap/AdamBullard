import { Dimensions, Appearance, StyleSheet } from 'react-native'

// Unchanging stylesheets and elements.
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const btnColors = {
  primary:'#a4c1ec',
  caution:'#f1c40f',
  danger:'#e74c3c',
  success:'#2ecc71',
  info:'#41C3E0',
  light: '#FAFAFA',
}

export const colors = {
    mainBackground: '#1e201d',
    secondaryBackground: '#2c2d32',
    offSecondaryBackground: '#373840',
    mainTextColor: '#eaeaea',
    mainHighlight: '#A4C1EC',
    secondaryHighlight: '#2f3f62',
}

export const app = StyleSheet.create({
  container: {
    flex:1
  }
})

export const headerMobile = StyleSheet.create({
  header: {
    marginTop:10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  headerTitle: {
    marginLeft:20,
    color:colors.mainHighlight,
    fontFamily:'PoppinsSemiBold',
    fontSize:32,
  },
  mobileMenu: {
    backgroundColor:colors.offSecondaryBackground,
    marginTop:10,
    marginBottom:10
  },
  headerList: {
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'center',
  },
  headerListItem: {
    marginLeft:15,
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'center',
    marginRight:20,
    marginTop:5,
    marginBottom:5
  },
  headerListText: {
    color:colors.mainTextColor,
    fontFamily:'Poppins',
    fontSize:24,
  },
  headerListItemDot: {
    padding:4,
    marginRight:5,
    borderRadius:10,
    backgroundColor:colors.mainHighlight
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft:20,
    paddingBottom:10
  },
  socialIcon: {
    marginRight:10
  },
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
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft:50
  },
  socialIcon: {
    marginRight:10
  },
})

export const footerMobile = StyleSheet.create({
  footer: {
    paddingLeft:20,
    paddingRight:20,
    paddingTop:20,
    paddingBottom:20,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:colors.secondaryBackground,
  },
  footerSection: {
    marginTop:10
  },
  pText: {
    fontFamily:'Poppins',
    fontSize:20,
    color:colors.mainTextColor,
    opacity:0.6,
    textAlign:'center'
  },
  link: {
    color:btnColors.primary,
    opacity:1
  },
})

export const footer = StyleSheet.create({
  footer: {
    paddingLeft:50,
    paddingRight:50,
    paddingTop:20,
    paddingBottom:20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:colors.secondaryBackground,
  },
  footerSection: {
    flex:1
  },
  pText: {
    fontFamily:'Poppins',
    fontSize:20,
    color:colors.mainTextColor,
    opacity:0.6,
    textAlign:'justify'
  },
  link: {
    color:btnColors.primary,
    opacity:1
  },
})

export const servicesMobile = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  upper: {
    backgroundColor:colors.secondaryBackground
  },
  categoryText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
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
    textAlign:'left',
    flexWrap:'wrap'
  },
  textCentered: {
    textAlign:'center',
  },
  jumboRow: {
    flexDirection: 'row',
    paddingTop:0,
    paddingLeft:10,
    paddingRight:10
  },
  me: {
    alignItems:'flex-end',
    flex:1,
  },
  meInfo: {
    flex:1,
    justifyContent:'flex-end'
  },
  meImage: {
    width:375,
    height:420,
    marginRight:140
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  introduction: {
    flex:1,
    justifyContent: 'flex-end',
    marginBottom:20,
    marginTop:20,
    marginLeft:10,
    marginRight:10
  },
  socialIcon: {
    marginRight:10  
  },
  lower: {
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10,
    flex:1,
  },
  boxRow: {
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:20
  },
  box: {
    padding:20,
    borderColor:colors.mainHighlight,
    borderRadius:20,
    borderWidth:0,
    backgroundColor:colors.secondaryBackground,
    alignItems:'center',
    marginBottom:20,
    width:'100%'
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
  },
  languageImageRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20
  },
  languageImage: {
    width:64,
    height:64
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
    fontSize:22,
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
    textAlign:'justify',
    flexWrap:'wrap'
  },
  textCentered: {
    textAlign:'center',
  },
  jumboRow: {
    flexDirection: 'row',
    paddingTop:0,
    paddingLeft:50,
    paddingRight:50
  },
  me: {
    alignItems:'flex-end',
    flex:1,
  },
  circle: {
    backgroundColor:colors.mainHighlight,
    borderRadius:400,
    width:320,
    height:320,
    left:-200,
    bottom:-100,
    zIndex:1,
    position:'absolute'
  },
  meInfo: {
    flex:1,
    justifyContent:'flex-end'
  },
  meImage: {
    width:375,
    height:420,
    marginRight:140
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  introduction: {
    flex:1,
    justifyContent: 'flex-end',
    marginBottom:160,
    marginTop:20
  },
  socialIcon: {
    marginRight:10  
  },
  lower: {
    paddingLeft:100,
    paddingRight:100,
    paddingTop:50,
    paddingBottom:50,
    flex:1,
  },
  boxRow: {
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:20
  },
  box: {
    padding:20,
    borderColor:colors.mainHighlight,
    borderRadius:20,
    borderWidth:0,
    backgroundColor:colors.secondaryBackground,
    alignItems:'center',
    marginBottom:20,
    flex:1,
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
  },
  languageImageRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20
  },
  languageImage: {
    width:64,
    height:64
  }
})

export const portfolioMobile = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  upper: {
    padding:0,
    backgroundColor:colors.secondaryBackground
  },
  categoryText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
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
  lower: {
    padding:10,
    flex:1,
  },
})

export const portfolio = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  upper: {
    paddingTop:50,
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:20,
    backgroundColor:colors.secondaryBackground
  },
  categoryText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
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
  lower: {
    paddingLeft:100,
    paddingRight:100,
    paddingTop:50,
    paddingBottom:50,
    flex:1,
  },
})

export const papersMobile = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  upper: {
    backgroundColor:colors.secondaryBackground
  },
  categoryText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    color:colors.mainTextColor,
    opacity:0.6,
    letterSpacing:3,
    marginBottom:5
  },
  bigText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:26,
    color:colors.mainTextColor,
  },
  titleText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    color:colors.mainTextColor,
    marginTop:10
  },
  pText: {
    fontFamily:'Poppins',
    fontSize:20,
    color:colors.mainTextColor,
    opacity:0.6,
    textAlign:'left'
  },
  lower: {
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    paddingTop:10,
    flex:1,
  },
  paperContainer: {
    backgroundColor:colors.secondaryBackground,
    borderRadius:20,
    marginBottom:20
  },
  paperImage: {
    height:200,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  paperInner: {
    padding:20,
  },
  link: {
    color:btnColors.primary,
    marginLeft:5,
    opacity:1
  },
  paperNotFound: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleRow: {
    flexDirection:'column',
    alignItems:'flex-start',
  },
  paperTop: {
    flexDirection:'column',
    marginBottom:20,
    borderBottomWidth:2,
    borderBottomColor:colors.secondaryBackground,
    paddingBottom:20
  },
  paperTopInfo: {
    flex:1,
    justifyContent: 'space-between'
  },
  paperImageLarge: {
    width:500,
    height:250,
    borderRadius:20,
    marginTop:10
  },
  viewPdfButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingLeft:20,
    alignSelf:'flex-start'
  },
  viewPdfButtonTitle: {
    fontFamily:'Poppins',
    color:'#fff',
    fontSize:20,
    textAlign:'center'
  },
  paperSection: {
    marginBottom:30
  },
  paperSectionImage: {
    alignSelf:'center'
  },
  paperSectionCaption: {
    fontFamily:'PoppinsItalic',
    fontSize:20,
    color:colors.mainTextColor,
    opacity:0.6,
    textAlign:'center'
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10
  },
})

export const papers = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  upper: {
    paddingTop:50,
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:20,
    backgroundColor:colors.secondaryBackground
  },
  categoryText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
    color:colors.mainTextColor,
    opacity:0.6,
    letterSpacing:3,
    marginBottom:5
  },
  bigText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:26,
    color:colors.mainTextColor,
  },
  titleText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:30,
    color:colors.mainTextColor,
  },
  pText: {
    fontFamily:'Poppins',
    fontSize:20,
    color:colors.mainTextColor,
    opacity:0.6,
    textAlign:'justify'
  },
  lower: {
    paddingLeft:100,
    paddingRight:100,
    paddingTop:50,
    paddingBottom:50,
    flex:1,
  },
  paperContainer: {
    backgroundColor:colors.secondaryBackground,
    borderRadius:20,
    flexDirection: 'row',
    marginBottom:20
  },
  paperImage: {
    height:200,
    width:400,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
  },
  paperInner: {
    padding:20,
  },
  link: {
    color:btnColors.primary,
    marginLeft:5,
    opacity:1
  },
  paperNotFound: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleRow: {
    flexDirection:'row',
    alignItems:'center',
  },
  paperTop: {
    flexDirection:'row',
    marginBottom:20,
    borderBottomWidth:2,
    borderBottomColor:colors.secondaryBackground,
    paddingBottom:20
  },
  paperTopInfo: {
    flex:1,
    justifyContent: 'space-between'
  },
  paperImageLarge: {
    width:500,
    height:250,
    borderRadius:20
  },
  viewPdfButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingLeft:20,
    alignSelf:'flex-start'
  },
  viewPdfButtonTitle: {
    fontFamily:'Poppins',
    color:'#fff',
    fontSize:20,
    textAlign:'center'
  },
  paperSection: {
    marginBottom:30
  },
  paperSectionImage: {
    alignSelf:'center'
  },
  paperSectionCaption: {
    fontFamily:'PoppinsItalic',
    fontSize:20,
    color:colors.mainTextColor,
    opacity:0.6,
    textAlign:'center'
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems:'center'
  },
})

export const contactMobile = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  },
  upper: {
    padding:0,
    backgroundColor:colors.secondaryBackground
  },
  categoryText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:22,
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
  lower: {
    padding:10,
    flex:1,
  },
})

export const contact = StyleSheet.create({
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
    fontSize:22,
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
  lower: {
    paddingLeft:100,
    paddingRight:100,
    paddingTop:50,
    paddingBottom:50,
    flex:1,
  },
})


export const empty = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.mainBackground
  }
})
