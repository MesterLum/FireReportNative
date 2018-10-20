import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import {
    Container,
    Input,
    Item,
    Text
} from 'native-base'
import Modal from 'react-native-modal'

export default class Welcome extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Modal
                isVisible={true}
                style={{ alignItems: 'center', justifyContent: 'flex-start' }}
            >
                <View style={styles.container}>
                    <Container>
                        <Item regular>
                            <Input placeholder='Rounded Textbox' />
                        </Item>
                        <Item regular>
                            <Input placeholder='Rounded Textbox' />
                        </Item>
                        <Item regular>
                            <Input placeholder='Rounded Textbox' />
                        </Item>
                        <Item regular>
                            <Input placeholder='Rounded Textbox' />
                        </Item>
                    </Container>

                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: "95%",
        width: "95%",
        backgroundColor: "white",
        justifyContent: 'flex-start'
    }
})