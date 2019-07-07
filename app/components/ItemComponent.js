import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          leitura = item.split(' '),
          custo = Number((leitura[1]*0.8).toFixed(1))
          return (
            <View key={index} style={styles.itemBox}>
              <Text style={styles.title}>Periodo {index}</Text>
              <Text style={styles.itemtext}>Potencia: {leitura[1]}kW</Text>
              <Text style={styles.itemtext}>Corrente: {leitura[0]}A</Text>
              <Text style={styles.itemtext}>Custo: R${custo}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemtext: {
    fontSize: 20,
    textAlign: 'justify',
    marginLeft: 15,
    padding: 5,
    color: 'white'
  },
  itemBox: {
    backgroundColor: 'lightblue',
    marginBottom: 50,
    borderRadius: 25,
    width: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  }

});