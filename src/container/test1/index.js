import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { Actions, } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    add,
    sub,
} from '../../action/test';

@connect(state => ({test: state.test}), {
    add,
    sub,
})
export default class Test1 extends Component{

    render() {
        const { abc, add, sub, test } = this.props;
        return(
            <View style={{paddingTop: 20}}>
                <Text>这是test1页面</Text>
                <Button
                    onPress={() => Actions.push('test2')}
                    title='跳转到test2页面'
                />
                {
                    abc ? <Text>{abc}</Text> : 'none'
                }
                <Text>{test.num}</Text>
                <Button
                    onPress={() => add()}
                    title='+'
                />
                <Button
                    onPress={() => sub()}
                    title='-'
                />
                <Button
                    onPress={() => Actions.drawerOpen()}
                    title='111'
                />
            </View>
        )
    }
}