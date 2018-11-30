import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Icon, Button, Right, Body, Text, View } from 'native-base'
import { FormInput } from 'react-native-elements';


const SearchBar = (props) => {
   
    return (
        <View style={styles.container}>
            <FormInput
                containerStyle={styles.formImput}
                onChangeText={props.onChangeInputLyrics}
                >
                 
            </FormInput>
            <Button
                transparent
                style={styles.buttonStyle}
                onPress={props.onButtonClickRender}
                >
                <Text>
                    <Icon style={{color:'#3498db'}} name='search'></Icon>
                 </Text>
            </Button>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection:'row',
        backgroundColor: '#3A4A7D',
        paddingTop: 10,
        paddingBottom:40

    },
    logoView: {
        marginTop: 150
    },
    logo: {
        width: 100,
        height: 100
    },
    formImput: {
        flex:1,
        marginTop:40,
        marginLeft:15,
        marginRight:0,
        borderRadius:5,
        //width: Dimensions.get('screen').width - 50,
        backgroundColor: "#fff",
        paddingLeft: 15

    },
    formView: {
        paddingTop: 10
    },
    buttonStyle: {
        marginLeft: 0,
        marginRight: 5,
        //backgroundColor: '#6598E4'
        
    },
    spinerStyle: {
        marginTop: 20
    }
});

export default SearchBar