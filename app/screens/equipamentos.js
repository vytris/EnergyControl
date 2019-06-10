import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Televisao',
    avatar_url: 'https://i5.walmartimages.ca/images/Large/010/121/6000199010121.jpg',
  },
  {
    name: 'Computador',
    avatar_url: 'https://media.wired.com/photos/5a25b07469e4a92363d488e4/master/pass/16-CyberPowerPC-Gaming-Desktop-SOURCE-Amazon.jpg',

  }
]
export default class Equipamentos extends Component {
    render() {
        return (
            <View>
            {
                list.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                    />
            ))
            }
            </View>
           
        );
    }
}