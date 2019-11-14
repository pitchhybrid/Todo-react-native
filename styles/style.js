import { StyleSheet, Dimensions } from 'react-native';

const { width ,height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      paddingLeft:15,
      paddingRight:15
    },
    borders:{
      borderWidth: 1,
      borderColor:'#c0c0c0',
      borderRadius:5
    },
    entrada:{
      height:40,
      marginTop:15
    },
    botao:{
      width: '100%',
      height: 25
    },
    data:{
      width: width * 0.55
    },
    row:{
      flex: 0,
      flexBasis: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    col:{
      marginTop: 5,
      marginBottom: 5,
      width: ( width - 30 ) / 2,
      padding:2
    },
    texto:{
      color: 'green',
      fontSize: 18
    },
    root:{
      height
    },
    scroll:{
      // position: 'absolute',
      // top:350
    }
  });