import React from 'react';
import { SafeAreaView ,Text} from 'react-native';

import style from './style';

export default ({name}) => {
    
return(
    <SafeAreaView style={style.container}>
        <Text style={style.texto}>{name}</Text>
    </SafeAreaView>)  
}