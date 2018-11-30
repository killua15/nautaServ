/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderBar from '../componentes/header'
import CardServicios from '../componentes/cardServicios'
export default class Servicios extends Component {
  static navigationOptions = {
    header: null,
    };
    constructor(props){
      super(props)
    }
  render() {
    
    return (
        <View style={styles.container}>
              <HeaderBar></HeaderBar>
              <CardServicios Myprops={this.props}></CardServicios>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3A4A7D',
  }
});
