import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import {
    Container,
    Fab,
    Icon,
    Button,
    Text
} from 'native-base'
import MapView, { Marker, Callout } from 'react-native-maps'
// Components
import WelcomeHome from './Welcome'

export class Home extends Component {
    constructor(props) {
        super(props)

        // Var for determinate welcome
        this.state = {
            welcome: false,
            active: false,
            fireDataWorl: undefined
        }

        this.getDataFire = this.getDataFire.bind(this)
    }

    getDataFire() {
        fetch('https://hawking.sv.cmu.edu:9016/opennex/getAPIResult', {
            method: 'POST',
            body: JSON.stringify({
                "serviceId": 25,
                "userId": 55,
                "date1": "2015012",
                "date2": "2018020",
                "ulx": -120,
                "uly": 25,
                "lrx": -98,
                "lry": 20,
                "purpose": "Space Apps"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(json => this.setState({ fireDataWorl: json }))
            .catch(err => console.log(err))
    }

    checkWelcomeToken() {
        //AsyncStorage.clear() // Development Mode
        AsyncStorage.getItem('welcome')
            .then(val => {

                if (!val) {
                    AsyncStorage.setItem("welcome", "true")
                        .then(value => this.setState({ welcome: true }))
                }
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.checkWelcomeToken()
        this.getDataFire()

    }

    render() {
        console.log(this.state.fireDataWorl)
        return (
            <Container>
                {this.state.welcome && <WelcomeHome />}
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 23.634501,
                        longitude: -102.55278399999997,
                        latitudeDelta: 0.100,
                        longitudeDelta: 0.94
                    }}
                >

                    {
                        this.state.fireDataWorl &&
                        this.state.fireDataWorl.map((element, key) => {

                            return (
                                <Marker key={key} coordinate={{ latitude: element.lat, longitude: element.lon }}>
                                    <Icon size={2} name="free-code-camp" type="FontAwesome" style={{ color: 'red' }} />
                                    <Callout>
                                        <Text>Hola a todos </Text>
                                    </Callout>
                                </Marker>
                            )
                        })
                    }

                </MapView>


                <Fab
                    active={this.state.active}
                    containerStyle={{}}
                    style={{ backgroundColor: 'red' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('ReportFire')}>
                    <Icon name="fire" type="FontAwesome" />
                </Fab>
            </Container>
        )
    }


}

