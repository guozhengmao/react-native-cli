import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { Actions, } from 'react-native-router-flux';

export default class Test2 extends Component{
    render() {
        return(
            <View style={{paddingTop: 20}}>
                <Text>这是test2页面</Text>
                <Button
                    onPress={() => Actions.push('test1', {abc: '112223'})}
                    title='跳转到test1页面'
                />
            </View>
        )
    }
}