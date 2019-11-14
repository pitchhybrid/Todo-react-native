import { StyleSheet,StatusBar } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#87CEFA',
        alignItems: 'center',
        top:0,
        width:'100%',
        height:StatusBar.currentHeight + 50
      },
      texto:{
          color:'white',
          fontSize:22,
          position:'absolute',
          bottom:0
      }
});