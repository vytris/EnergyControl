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
          return (
            <View key={index} style={styles.itemBox}>
              <Text style={styles.title}>Periodo {index}</Text>
              <Text style={styles.itemtext}>Potencia: {item.potencia}kW</Text>
              <Text style={styles.itemtext}>Corrente: {item.corrente}A</Text>
              <Text style={styles.itemtext}>Custo: R${item.preco}</Text>
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