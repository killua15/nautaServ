import React from "react";

import { StyleSheet, View, Text, Dimensions, Image, TouchableHighlight } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import GridView from 'react-native-super-grid'
const CardServicios = (props) => {
    console.log(props)
    const items = [
        { name: 'Letras Canciones', code: '#3498db', img: require('../img/lyrics.png') },
        { name: 'EMERALD', code: '#3498db', img: require('../img/lyrics.png') },
        { name: 'PETER RIVER', code: '#3498db', img: require('../img/lyrics.png') },
        { name: 'AMETHYST', code: '#3498db', img: require('../img/lyrics.png') }]

    return (

        <View style={styles.container}>
            <GridView
                itemDimension={130}
                items={items}
                style={styles.gridView}
                
                renderItem={item => (
                    <TouchableHighlight onPress={() => {props.Myprops.navigation.navigate('SongLetters')}} >
                   <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Image style={{ width: 40, height: 40, marginBottom: 20 }} source={item.img} />
                        <Text style={styles.itemName}>{item.name}</Text>

                    </View>
                    </TouchableHighlight>
                )}
            />

        </View>


    );

}
const styles = StyleSheet.create({
    container: {
        marginTop: 340,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        backgroundColor: '#3A4A7D',
        flexDirection: 'row',
        alignItems: 'center'

    },
    gridView: {

        flex: 1,
        backgroundColor: '#3A4A7D',
        height: Dimensions.get('screen').height
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        //padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
export default CardServicios