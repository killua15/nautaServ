import React from 'react'
import { View } from 'react-native'
import { Spinner } from 'native-base'

const SpinnerLogin = (props) => {
    console.log(props)
    const {spinerShow, style, color} = props
    if(spinerShow){
        return null
    }
    return (
        <View >
            <Spinner style ={style}  color={color} />
        </View>

    )
}


export default SpinnerLogin