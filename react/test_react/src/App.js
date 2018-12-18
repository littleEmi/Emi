import React, { Component } from 'react';
import DefaultProps from './components/DefaultProps';
import './assets/css/App.css';
import HelloWorld from './components/HelloWorld';
import User from './components/User';
import Form from './components/Form';
import MyRouter from './components/MyRouter';
import InnerHtml from './components/InnerHtml';
import ReduxNote from './redux/containers/ReduxNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buffname: 'buff',
    }
  }
  changeBuffName(name) {
    this.setState({
      buffname: name,
    })
  }
  render() {
    return (
      <div className="App">
        <HelloWorld HelloChangeBuffName={name => this.changeBuffName(name)} />
        <User name={this.state.buffname} />
        <Form />
        <h3>默认属性组件:</h3>
        {/* 这里title必须要传入string,不然会报错 */}
        <DefaultProps title="这是手动设置的标题" />
        <DefaultProps />
        <MyRouter />
        <InnerHtml />
        <ReduxNote />
      </div>
    );
  }
}

export default App;
