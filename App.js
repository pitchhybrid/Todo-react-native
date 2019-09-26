import React, { Component } from 'react';
import { Text, SafeAreaView, TextInput, Button,View ,ScrollView ,FlatList ,Dimensions} from 'react-native';

import  { Navbar } from './components/navbar'

import  style from './styles/style'

const { container, botao, entrada,texto,col} = style;

export default class App extends Component {
  
  cont = 0
  constructor(props){
    super(props);
    this.state = {
      lista:[],
      text:''
    };
    
  }

  deletar(item){
      var novo = this.state.lista.filter(function(index){
        return item.index != index.index
      })
      this.setState({lista:novo})
  }

  render(){
    
    return (
      <SafeAreaView style={[{height:Dimensions.get('screen').height}]}>
        <Navbar name="MY TODO"></Navbar>
        <View style={[{marginTop:10}]}> 
            <View style={[container]}>
              <TextInput style={entrada} 
              onChangeText={(texto)=>this.setState({text:texto})}
              value={this.state.text}/>
            </View>
            <View style={[container,{marginTop:10}]}>
              <Button title="append" onPress={()=>{
                if(this.state.text != ''){
                  const lista = this.state.lista.concat({index:0,text:this.state.text})
                  this.state.text = ''
                  this.setState({lista})
                }
              }}/>
            </View>
            <ScrollView style={{marginTop:20}}>
              <FlatList data={this.state.lista} 
              keyExtractor={() => String(this.cont++)}
              renderItem={({item,index})=>(<Item id={index} text={item.text} onPress={()=> {
                item.index = index 
                this.deletar(item)}}/>)}>
              </FlatList>
            </ScrollView>
        </View>
        <View style={[{position:'absolute',bottom:50,width:Dimensions.get('screen').width}]}>
              <Button title="clear" onPress={()=>{
                this.cont = 0;
                this.setState({lista:[],text:''})
              }}></Button>
            </View>
      </SafeAreaView>
    );
  }
  
}


function Item({id,text,onPress}){
  return(
  <View>
    <View style={col}>
      <Text style={texto}>{id} - {text}</Text>
    </View>
    <View style={[col,botao]}>
      <Button title="deletar" onPress={onPress}></Button>
    </View>
  </View>
  )
}