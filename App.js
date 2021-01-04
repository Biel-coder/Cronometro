import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: 0,
      botao: 'Iniciar',
      lastResult: null
    }
    //Variável para setar o timer
    this.timer = null

    this.go = this.go.bind(this)
    this.clean = this.clean.bind(this)
  }

  go(){
    if(this.timer != null){
      // Para o timer
      clearInterval(this.timer)
      this.timer = null

      this.setState({ botao: 'Iniciar' })
    } else {
      // Começa o timer
      this.timer = setInterval( () => {
        this.setState({ time: this.state.time + 0.1 })
      }, 100)

      this.setState({ botao: 'Parar' })
    }

  }

  clean(){
    if(this.timer != null){
      // Para o timer
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      lastResult: this.state.time,
      time: 0,
      botao: 'Iniciar'
    })
  }

  render(){
    return(
      <View style={styles.container}>
        
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.time.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clean}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.lastArea}>
          <Text style={styles.lastText}>
            {this.state.lastResult > 0 ? 'Último resultado: ' + this.state.lastResult.toFixed(1) + 's' : ''}
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  lastArea: {
    marginTop: 40
  },
  lastText: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
})