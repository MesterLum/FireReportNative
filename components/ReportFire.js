import React, { Component } from 'react'
import {
    View
} from 'react-native'
import {
    Container,
    Textarea,
    Button,
    Text,
    Icon
} from 'native-base'
import MapView, { Marker } from 'react-native-maps';
import {showImagePicker} from 'react-native-image-picker';
//TMP

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};


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

    pressCamera() {
        showImagePicker(options, (response) => {
            console.log("response", response)
        })
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
                <Textarea style={{ marginTop: 10, marginHorizontal: 7 }} rowSpan={5} bordered placeholder="Descripcion" />
                <View style={{ alignItems: 'center', marginTop: 15, marginHorizontal: 7, flexDirection: 'row', justifyContent: 'center' }}>

                    <Icon name='camera' type="FontAwesome" style={{ marginRight: 10, color: '#4267b2' }} onPress={this.pressCamera}/>
                    <Button iconLeft danger>
                        <Icon name='fire' type="FontAwesome" />
                        <Text>Enviar Reporte</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}