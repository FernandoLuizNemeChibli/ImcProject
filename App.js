/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      altura: 0, 
      massa: 0,
      resultado: 0,
      resultadoText: ""
    }
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.massa/(this.state.altura*this.state.altura)

    let s = this.state
    s.resultado = imc
    this.setState(s)

    if (imc<16){
      s.resultadoText = "Magreza Grave"
    } else if (imc<17){
      s.resultadoText = "Magreza Moderada"
    } else if (imc<18.5){
      s.resultadoText = "Magreza Leve"
    } else if (imc<25){
      s.resultadoText = "Saudável"
    } else if (imc<30){
      s.resultadoText = "Sobrepeso"
    } else if (imc<35){
      s.resultadoText = "Obesidade Grau I"
    } else if (imc<40){
      s.resultadoText = "Obesidade Grau II (severa)"
    } else 
      s.resultadoText = "Obesidade Grau III (mórbida)"

    this.setState(s)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        
        <TouchableOpacity onPress={this.calcular} style={styles.button}>
          <Text style={styles.buttonText}>
            Calcular
          </Text>
        </TouchableOpacity>
        <Text style={styles.resultado}> 
          {this.state.resultado.toFixed(2)} 
        </Text>
        <Text style={[styles.resultado, {fontSize:35}]}> 
          {this.state.resultadoText} 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection: 'row',
  },
  input: {
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:24,
  },
  button: {
    backgroundColor: '#89ffa5',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6dc4a4',
    fontWeight: 'bold',
  },
  resultado:{
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15,
  }
});
