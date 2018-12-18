import React, { Component } from 'react';

class ReduxNote extends Component {
    render() {
        return (<div>
            <h2>redux note</h2>
            <div>
                用户id: <input type="number" value={this.props.formUserId} onChange={this.props.inputUid} /><br />
                用户名: <input type="text" value={this.props.formUserName} onChange={this.props.inputUserName} /><br />
                年龄: <input type="number" value={this.props.formUserAge} onChange={this.props.inputUserAge} /><br />
            </div>
            <button onClick={this.props.addUser}>添加用户</button>
            <ul>
                {this.props.userList.map((v, k) => {
                    return <li style={{ listStyle: 'none', margin: '5px 0', }}
                        key={v.id}>
                        id: {v.id}, name: {v.name},age: {v.age}
                        <button data-uid={v.id} style={{ marginLeft: 20, }} onClick={this.props.delUser}>删除</button>
                    </li>
                })}
            </ul>
        </div>)
    }
}
export default ReduxNote;
