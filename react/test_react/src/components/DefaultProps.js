import React, { Component } from 'react';
import PropsType from 'prop-types';

class DefaultProps extends Component {
    static defaultProps = {
        title: '这是默认标题',
    }
    static propTypes = {
        title: PropsType.string,
    }
    constructor(props) {
        super(props);
        let that = this;
        that.state = {
            title: props.title,
        };
    }
    render() {
        return (
            <div>
                {this.state.title}
            </div>
        );
    }
}

export default DefaultProps;
