import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const ListLyrics = (props) => {
  return (
    <View style={{ marginLeft: 10, marginRight: 10, marginTop: 20, height: Dimensions.get('window').height - 130 }}>
      <FlatList
        data={props.dataSongsLyrics}
        
        renderItem={(item) => {
          console.log(item.item)
          return (
            <ListItem
              containerStyle={{ backgroundColor: '#fff' }}
              roundAvatar
              avatar={require('../img/icon_lyric.png')}
              title={item.item.Title}
              titleStyle={{ color: '#3A4A7D' }}
              onPress={() => props.onPressItemList(item) }
            //avatar={{uri:item.avatar_url}}
            />
          )
        }}
        keyExtractor={item => item.item}
      />
    </View>

  )
}
export default ListLyrics