import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { db } from '../utils/firebase';

let itemsRef = db.ref('/cabo');

export default class List extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.items.length > 0 ? (
            <ItemComponent items={this.state.items} />
        ) : (
          <Text>No items</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#ebebeb'
  },
});