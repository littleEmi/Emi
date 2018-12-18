import React, { Component } from 'react';

class InnerHtml extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let htmlStr = '<div>react中使用innerHTml</div>';
        return (
            <div>
                将字符串以html格式插入到dom中:<br />
                <div dangerouslySetInnerHTML={{ __html: htmlStr, }} />
            </div>

        );
    }
}
export default InnerHtml;
