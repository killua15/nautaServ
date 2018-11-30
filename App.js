/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './src/scenes/login';
import Servicios from './src/scenes/servicios';
import SongLetters from './src/scenes/songleters';
import SongView from './src/scenes/songView';
import {
  createStackNavigator,
} from 'react-navigation';
type Props = {};
const Routes = createStackNavigator({
  Home: { screen: Login },
  Servicios: { screen: Servicios },
  SongLetters: {screen : SongLetters},
  SongView: {screen : SongView} 
},
{
  initialRouteName: 'Servicios',
  headerMode:'screen',
        cardStyle:{
            backgroundColor: '#3A4A7D',
            //borderTopWith:-3
        }
});
export default class App extends Component<Props> {
  render() {
    return (
      <Routes></Routes>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A4A7D',
  }
});
