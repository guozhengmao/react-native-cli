import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import { scenes } from './routes/index';
import configureStore from './stores/configureStore'

const store = configureStore();

export default class App extends Component{
    render() {
        return (
            <View style={{flex: 1,}}>
                <Provider store={ store }>
                    <Router
                        scenes={scenes}
                        tintColor='white'
                    />
                </Provider>
            </View>
        )
    }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        height: height,
    },
    header: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        paddingTop: 20,
    }
});