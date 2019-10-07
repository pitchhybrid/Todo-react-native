import { StyleSheet, Dimensions } from 'react-native';

const { width ,height } = Dimensions.get('screen');

export default style = StyleSheet.create({
    container: {
      paddingLeft:15,
      paddingRight:15,
      marginTop:10
    },
    borders:{
      borderLeftWidth:2,
      borderRightWidth:2,
      borderTopWidth:2,
      borderBottomWidth:2,
      borderColor:'#c0c0c0',
      borderRadius:5
    },
    entrada:{
      borderColor:'#c0c0c0',
      borderWidth:2,
      borderRadius:15,
      height:40
    },
    botao:{
      width:width * 0.30,
      height:25
    },
    data:{
      width:width * 0.55
    },
    col:{
      flex:1,
      flexBasis:1,
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:5,
      marginBottom:5
    },
    texto:{
      color:'green',
      fontSize:18
    },
    size:{
      width,
      height
    },
    scroll:{
      height:height * 0.75
    },
    root:{
      flex:1,
      flexBasis:1,
      flexDirection:'column',
      height:height * 0.90
    }
  });