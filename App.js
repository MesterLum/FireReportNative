/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import MapView from 'react-native-maps'
import { Container, Text, Fab, Icon, Button } from 'native-base'
import Modal from "react-native-modal"

type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {
    AsyncStorage.getItem("welcome1", (err, result) => {
      if (err) {
        console.log(err)
      }
      console.log(result)
      if (result) {
        console.log("Ya existe")
      }
      else {
        AsyncStorage.setItem("welcome1", "true", err => {
          if (err)
            console.log(err)
          else {
            console.log("Se monto.")
          }
        })
      }
    })
  }

  render() {
    return (
      <Container>

        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 25.777766,
            longitude: -108.991283,
            latitudeDelta: 0.0100,
            longitudeDelta: 0.050,
          }}
        >
        </MapView>
      </Container >
    );
  }
}
