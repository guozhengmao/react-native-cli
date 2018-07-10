import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { Actions, } from 'react-native-router-flux';

export default class TabBar extends Component{
    render() {
        return(
            <View style={{flex: 1, paddingTop: 20}}>
                <Text>这是tabBar</Text>
            </View>
        )
    }
}