/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HeaderBar from '../componentes/header'
import CardServicios from '../componentes/cardServicios'
import { Card, CardItem, Body, Text } from 'native-base'
export default class SongView extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props)

    }
    onHandleBackButton = () => {
        this.props.navigation.goBack()
    }
    render() {
        const { navigation } = this.props
        var Letra = navigation.getParam('props', "").item.LyricSong
        var letra_arreglada = ""
        console.log(navigation.getParam('props', "").item.LyricSong)
        var etiqueta = false
        for (var i = 0; i < Letra.length; i++) {
            if (Letra[i] == "<") {
               
                etiqueta = true
                Letra[i] = ""

            }
            if (etiqueta == false) {

                letra_arreglada = letra_arreglada + Letra[i]
            }
            if (Letra[i] == ">") {
                
                etiqueta = false
                Letra[i] = ""
            }

        }
        return (
            <View style={styles.container}>
                <HeaderBar title={navigation.getParam('props', "").item.Title} onHandleBackButton={this.onHandleBackButton} ></HeaderBar>
                <ScrollView>
                    <Card>
                        <CardItem header>
                            <Text>{navigation.getParam('props', "").item.Title}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    {letra_arreglada}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    //   container: {
    //     backgroundColor: '#3A4A7D',
    //   }
});
