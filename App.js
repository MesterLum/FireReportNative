import React from 'react'
import { Root } from 'native-base'
import { Home } from './components/Home'
import { createStackNavigator } from 'react-navigation'
import ReportFireComponent from './components/ReportFire'

const HomeComponent = props => (
  <Root>
    <Home navigation={props.navigation} />
  </Root>
)

const StackNavigation = createStackNavigator({
  Home: {
    screen: HomeComponent, navigationOptions: {
      header: null

    }
  },
  ReportFire: {screen: ReportFireComponent, navigationOptions: {
    headerTitle: 'Reportar Fuego'
  }}
})

export default () => (
  <StackNavigation />
)







