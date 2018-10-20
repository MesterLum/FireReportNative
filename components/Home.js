import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import {
    Container,
    Fab,
    Icon,
    Button
} from 'native-base'
import MapView from 'react-native-maps'
// Components
import WelcomeHome from './Welcome'

export class Home extends Component {
    constructor(props) {
        super(props)

        // Var for determinate welcome
        this.state = {
            welcome: false,
            active: false
        }
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

    }

    render() {
        console.log(this.props.navigation)
        return (
            <Container>
                {this.state.welcome && <WelcomeHome />}
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >

                </MapView>



                


                
                <Fab    
                    active={this.state.active}
                    containerStyle={{}}
                    style={{ backgroundColor: 'red' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('ReportFire')}>
                    <Icon name="fire" type="FontAwesome"/>
                </Fab>
            </Container>
        )
    }


}

