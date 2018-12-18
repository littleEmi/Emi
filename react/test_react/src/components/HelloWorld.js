import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeBuffName: name => props.HelloChangeBuffName(name),
        }
    }
    render() {
        return (
            <div>
                <div>Hello World</div>
                输入的名字会立即传递到User组件中: <input type="text" onChange={evt =>
                    this.state.changeBuffName(evt.currentTarget.value)
                } />
            </div>
        );
    }
}
export default HelloWorld;
