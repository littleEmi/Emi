import * as userAction from '../constant/user';

export function add() {
    return {
        type: userAction.ADD_USER,
    }
}
export function del(uid) {
    return {
        type: userAction.DEL_USER,
        uid,
    }
}
export function inputUid(uid) {
    return {
        type: userAction.INPUT_USER_ID,
        uid,
    }
}
export function inputUserName(name) {
    return {
        type: userAction.INPUT_USER_NAME,
        name,
    }
}
export function inputUserAge(age) {
    return {
        type: userAction.INPUT_USER_AGE,
        age,
    }
}
export function update(userInfo) {
    return {
        type: userAction.UPDATE_USER,
        userInfo,
    }
}
