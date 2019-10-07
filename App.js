import React, { Component } from 'react';
import { Text, SafeAreaView, TextInput, Button, View, FlatList, TouchableOpacity,ScrollView} from 'react-native';

import  { Navbar } from './components/navbar'

import  style from './styles/style'

const { root, data, container, botao, entrada,texto,col, size, borders, scroll,clear} = style;

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
      <SafeAreaView style={root}>
        <Navbar name="MY TODO"></Navbar>
          <View style={[container]}>
            <TextInput style={[entrada,borders]} 
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}/>
          </View>
          <View style={[container,col]}>
          <TouchableOpacity style={[botao,borders]} onPress={()=>{
                if(this.state.text != ''){
                  const lista = this.state.lista.concat({index:0,text:this.state.text})
                  this.state.text = ''
                  this.setState({lista})
                }
              }}>
                <Text style={[{textAlign:'center'}]}>APPEND</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[botao,borders]} onPress={()=>{
                this.cont = 0;
                this.setState({lista:[],text:''})
              }}>
                <Text style={{textAlign:'center'}}>CLEAR</Text>
          </TouchableOpacity>
        </View>
            <ScrollView style={[scroll]}>
              <View style={[container]}>
                <FlatList data={this.state.lista} 
                    keyExtractor={() => String(this.cont++)}
                    renderItem={({item,index})=>(<Item id={index} text={item.text} onPress={()=> {
                  item.index = index 
                  this.deletar(item)}}/>)}>
                </FlatList>  
              </View>
            </ScrollView>
      </SafeAreaView>
    );
  }
  
}


function Item({id,text,onPress}){
  return(
  <View style={[col]}>
    <View style={data}>
      <ScrollView horizontal={true}>
        <Text style={[texto]}>{id} - {text}</Text>
      </ScrollView>
    </View>
    <TouchableOpacity style={[borders,botao]} onPress={onPress}>
      <Text style={{textAlign:'center'}}>Delete</Text>
    </TouchableOpacity>
  </View>
  )
}