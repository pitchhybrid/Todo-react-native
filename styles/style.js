import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
    container: {
      paddingLeft:15,
      paddingRight:15,
    },
    entradaContainer:{
      borderLeftWidth:2,
      borderRightWidth:2,
      borderTopWidth:2,
      borderBottomWidth:2,
      borderColor:'#ff0000',
      borderRadius:5,
      width:100
    },
    entrada:{
      borderColor:'#c0c0c0',
      borderWidth:2,
      borderRadius:15,
      height:40
    },
    botao:{
      width:'50%',
    },
    col:{
      flexBasis:0,
      flexGrow:0,
      maxWidth:'100%',
      position:'relative',
      width:'100%',
      minHeight:1,
      paddingRight:15,
      paddingLeft:15
    },
    texto:{
      color:'green',
      fontSize:20
    }

  });