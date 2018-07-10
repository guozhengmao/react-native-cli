import {
    ADD,
    SUB,
} from '../action/type';
import {
    Alert
} from 'react-native';

const initState = {
    num: 0,
}


export default function (state = initState, action) {
    switch (action.type){
        case 'ADD':
            if(state.num >= 9){
                Alert.alert('警告', '不能超过10');
                return state
            }
            return Object.assign({}, state, {
                num: state.num + 1
            })
        case 'SUB':
            return Object.assign({}, state, {
                num: state.num - 1
            })
        default:
            return state;
    }
}
