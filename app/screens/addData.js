import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

import { db } from '../utils/firebase';

let addItem = (cValor, pValor) => {
  db.ref('/leituras').push({
    potencia: pValor,
    corrente: cValor,
    preco: Number((pValor*0.8).toFixed(1))
  });
};

export default class AddItem extends Component {
  state = {
    pValor: '',
    cValor: '',
    custo: '',
  };

  handlePChange = e => {
    this.setState({
      pValor: e.nativeEvent.text,
    });
  };
  handleCChange = e => {
    this.setState({
      cValor: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.cValor, this.state.pValor);
    Alert.alert('Item saved successfully');
  };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Read</Text>
        <TextInput style={styles.itemInput} onChange={this.handlePChange} placeholder="Potência" />
        <TextInput style={styles.itemInput} onChange={this.handleCChange} placeholder="Corrente" />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});