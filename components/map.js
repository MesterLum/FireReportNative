import React, { Component } from 'react'
import {
    Container
} from 'native-base'
import MapView from 'react-native-maps'

export default class Map extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <MapView style={{flex: 1}} />
            </Container>
        )
    }

}