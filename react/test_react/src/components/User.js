import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        let that = this;
        that.state = {
            name: props.name,
            age: 24,
        };
    }
    changeName = () => {
        this.setState({
            name: '这是被改变的名字',
        })
    }
    onNameChange = evt => {
        this.setState({
            name: evt.currentTarget.value,
        })
    }
    render() {
        console.log('render')
        return (
            <div>
                <div>name: {this.state.name}</div>
                <div>age: {this.state.age}</div>
                <br />
                双向绑定:<br />
                <input type="text" value={this.state.name} onChange={this.onNameChange} /><br />
                <button style={{ marginTop: 10 }} onClick={this.changeName}>改变name</button>
            </div>
        );
    }
    /**
     * 组件将要安装
     */
    componentWillMount() {
        console.log('componentWillMount');
    }
    /**
     * 组件完成安装
     */
    componentDidMount() {
        console.log('componentDidMount');

    }
    /**
     * 组件将要接收到属性
     */
    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps');
        this.setState({
            name: props.name,
        })
    }
    /**
     * 组件是否需要更新
     */
    shouldComponentUpdate(props) {
        console.log('shouldComponentUpdate');
        return true;
    }
    /**
     * 组件将要更新
     */
    componentWillUpdate(props) {
        console.log('componentWillUpdate');

    }
    /**
     * 组件完成更新
     */
    componentDidUpdate(props) {
        console.log('componentDidUpdate');

    }
    /**
     * 组件完成卸载
     */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

}
export default User;
