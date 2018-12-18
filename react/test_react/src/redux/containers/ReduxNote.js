import ReduxNote from '../../components/ReduxNote';
import { connect } from 'react-redux';
import * as userAction from '../actions/user';
const mapStateToProps = (state) => {
    return {
        userList: state.userList,
        formUserId: state.formUserId,
        formUserName: state.formUserName,
        formUserAge: state.formUserAge,
        buffge: "tesdfghsjdg",
    }
}
const mapDispatchToProps = (
    dispatch,
    ownProps,
) => {
    return {
        addUser: () => {
            dispatch(userAction.add());
        },
        delUser: (evt) => {
            dispatch(userAction.del(parseInt(evt.currentTarget.dataset.uid)));
        },
        inputUid: (evt) => {
            dispatch(userAction.inputUid(parseInt(evt.currentTarget.value)));
        },
        inputUserName: (evt) => {
            dispatch(userAction.inputUserName(evt.currentTarget.value));
        },
        inputUserAge: (evt) => {
            dispatch(userAction.inputUserAge(evt.currentTarget.value));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxNote);
