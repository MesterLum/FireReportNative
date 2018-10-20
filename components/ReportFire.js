import React, { Component } from 'react'
import {

} from 'react-native'
import {
    Container
} from 'native-base'
import MapView, { Marker } from 'react-native-maps';

export default class ReportFire extends Component {
    constructor(props) {
        super(props)
        var initialRegion = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        this.state = {
            initialRegion: this.initialRegion
        }
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            let latitude = parseFloat(position.coords.latitude)
            let longitude = parseFloat(position.coords.longitude)
            this.setState({
                initialRegion: {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }
            })
        })
    }

    componentDidMount() {
        this.getLocation()
    }

    render() {
        return (
            <Container>
                <MapView
                    region={this.state.initialRegion}
                    style={{ height: 150 }}>
                    <MapView.Marker
                        draggable
                        coordinate={this.state.initialRegion}
                        onDragEnd={e => console.log(e.nativeEvent)}
                    ></MapView.Marker>
                </MapView>


            </Container>
        )
    }
}