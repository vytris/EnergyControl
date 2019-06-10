import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Perfil extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image  
                    source = {require('.././assets/example.jpg')} 
                    style={styles.foto}/>
                <Text style={styles.title}>
                    Pedro Reis
                </Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    foto:{
        width: 250,
        height: 250,    
        borderRadius: 10
    }
})