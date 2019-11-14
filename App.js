import React, { Component } from 'react';
import { Text, SafeAreaView, TextInput, Button, TouchableHighlight, View, FlatList,ScrollView} from 'react-native';

import Navbar from './components/navbar'

import  style from './styles/style'

const { root, data, container, botao, entrada,texto,col, row, borders, scroll} = style;

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
      <SafeAreaView style={[root]}>
        <Navbar name="MY TODO"></Navbar>
        <View style={[container]}>
            <TextInput style={[entrada,borders]} 
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
            <View style={row}>
              <View style={col}>
                <TouchableHighlight style={[botao,borders]} 
                    onPress={()=>{
                      if(this.state.text != ''){
                        const lista = this.state.lista.concat({index:0,text:this.state.text})
                        this.state.text = ''
                        this.setState({lista})
                      }
                    }}>
                      <Text style={{textAlign:'center'}}>Adicionar</Text>
                </TouchableHighlight>
              </View>
              <View style={col}>
                <TouchableHighlight style={[botao,borders]} 
                    onPress={()=>{
                      this.cont = 0;
                      this.setState({lista:[],text:''})
                    }}>
                      <Text style={{textAlign:'center'}}>Limpar</Text>
                </TouchableHighlight>
              </View>
            </View>
            <ScrollView style={{marginTop:50}}>
              <View style={[scroll]}>
                <FlatList data={this.state.lista} 
                    keyExtractor={() => String(this.cont++)}
                    renderItem={({item,index})=>(<Item id={index} text={item.text} onPress={()=> {
                  item.index = index 
                  this.deletar(item)}}/>)}>
                </FlatList>  
              </View>
            </ScrollView>
        </View>
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
    <TouchableHighlight style={[borders,botao]} onPress={onPress}>
      <Text style={{textAlign:'center'}}>Delete</Text>
    </TouchableHighlight>
  </View>
  )
}