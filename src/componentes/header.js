import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Icon, Button, Right, Body, Title } from 'native-base'


const HeaderBar = (props) => {
  return (
    <Header style={{ backgroundColor: '#3A4A7D' }}>
      <Left >
        <Button transparent
          onPress={props.onHandleBackButton} >
          <Icon name='arrow-back' style={props.style} />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='menu' />
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

export default HeaderBar