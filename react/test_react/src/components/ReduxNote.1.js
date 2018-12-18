import React, { Component } from 'react';

class ReduxNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            formUserId: '',
            formUserName: '',
            formUserAge: '',
        };
    }
    addUser = (evt) => {
        if (!this.state.formUserId) {
            alert("请输入用户id");
        } else if (!this.state.formUserName) {
            alert("请输入用户名");
        } else if (!this.state.formUserAge) {
            alert("请输入用户年龄");
        } else {
            if (this.checkUserIsExistWithId(parseInt(this.state.formUserId))) {
                return alert("用户id重复");
            }
            let userList = this.state.userList;
            userList.push({
                id: parseInt(this.state.formUserId),
                name: this.state.formUserName,
                age: this.state.formUserAge,
            })
            this.setState({
                userList,
                formUserId: '',
                formUserName: '',
                formUserAge: '',
            })
        }
    }
    delUser = (evt) => {
        let uid = parseInt(evt.currentTarget.dataset.userId);
        if (!this.checkUserIsExistWithId(uid)) {
            return alert("用户不存在");
        }
        let userList = this.state.userList;
        userList = userList.filter((v, k) => {
            return v.id !== uid
        })
        this.setState({
            userList,
        })
    }
    checkUserIsExistWithId = (uid) => {
        for (let i = 0; i < this.state.userList.length; i++) {
            if (this.state.userList[i].id === uid) {
                return true;
            }
        }
        return false;
    }
    render() {
        return (<div>
            <div>
                用户id: <input type="number" value={this.state.formUserId} onChange={(evt) => {
                    this.setState({
                        formUserId: evt.currentTarget.value,
                    })
                }} /><br />
                用户名: <input type="text" value={this.state.formUserName} onChange={(evt) => {
                    this.setState({
                        formUserName: evt.currentTarget.value,
                    })
                }} /><br />
                年龄: <input type="number" value={this.state.formUserAge} onChange={(evt) => {
                    this.setState({
                        formUserAge: evt.currentTarget.value,
                    })
                }} /><br />
            </div>
            <button onClick={this.addUser}>添加用户</button>
            <ul>
                {this.state.userList.map((v, k) => {
                    return <li style={{ listStyle: 'none', margin: '5px 0', }}
                        key={v.id}>
                        id: {v.id}, name: {v.name},age: {v.age}
                        <button data-user-id={v.id} style={{ marginLeft: 20, }} onClick={this.delUser}>删除</button>
                    </li>
                })}
            </ul>
        </div>)
    }
}
export default ReduxNote;
