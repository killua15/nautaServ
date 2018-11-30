import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Icon, Button, Right, Body, Title, View } from 'native-base'
import { SearchBar } from 'react-native-elements';
import SearchList from '@unpourtous/react-native-search-list'

const HeaderLyrics = (props) => {
  console.log(props)
  return (
    <Header style={{backgroundColor:'#3A4A7D'}}>
      <Left >
        <Button transparent 
          onPress={props.onHandleBackButtonHeader}
          >
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Letras</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='download' />
        </Button>
      </Right>
    </Header>
    
  )
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#3A4A7D',
    borderBottomWidth: 0
  }
});

export default HeaderLyrics