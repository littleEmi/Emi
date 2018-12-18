import * as userActions from '../constant/user';
import { Modal, } from 'antd';
import React from 'react';

let initState = {
    userList: [],
    formUserId: '',
    formUserName: '',
    formUserAge: '',
}

function inputUserId(state = initState, action) {
    if (action.type === userActions.INPUT_USER_ID) {
        let newState = Object.assign({}, state);
        newState.formUserId = action.uid;
        return newState;
    }
    return state;
}
function inputUserName(state = initState, action) {
    if (action.type === userActions.INPUT_USER_NAME) {
        let newState = Object.assign({}, state);
        newState.formUserName = action.name;
        return newState;
    }
    return state;
}
function inputUserAge(state = initState, action) {
    if (action.type === userActions.INPUT_USER_AGE) {
        let newState = Object.assign({}, state);
        newState.formUserAge = action.age;
        return newState;
    }
    return state;
}
function checkIsExistById(id, state) {
    for (let v of state.userList) {
        if (v.id === state.formUserId) {
            return true;
        }
    }
    return false;
}

function info(msg) {
    Modal.info({
        title: '提示',
        content: (
            <div>
                <p>{msg}</p>
            </div>
        ),
        width: 300,
        maskClosable: true,
        onOk() { },
    });
}
function user(state = initState, action) {
    switch (action.type) {
        case userActions.ADD_USER:
            if (!state.formUserId) {
                alert("请输入用户id");
            } else if (!state.formUserName) {
                alert("请输入用户名");
            } else if (!state.formUserAge) {
                alert("请输入用户年龄");
            } else {
                let newState = Object.assign({}, state);
                let userList = newState.userList;
                if (checkIsExistById(newState.formUserId, newState)) {
                    info("用户id已存在");
                    newState.formUserId = '';
                } else {
                    userList.push({
                        id: parseInt(newState.formUserId),
                        name: newState.formUserName,
                        age: parseInt(newState.formUserAge),
                    })
                    newState = {
                        userList,
                        formUserId: '',
                        formUserName: '',
                        formUserAge: '',
                    }
                }
                return newState;
            }
            return state;
        case userActions.DEL_USER:
            let newState = Object.assign({}, state);
            newState.userList = newState.userList.filter((v, k) => {
                return v.id !== action.uid
            })
            return newState;
        case userActions.INPUT_USER_ID:
            return inputUserId(state, action)
        case userActions.INPUT_USER_NAME:
            return inputUserName(state, action)
        case userActions.INPUT_USER_AGE:
            return inputUserAge(state, action)
        default:
            break;
    };
    return state;
}

export let reducer = user;
