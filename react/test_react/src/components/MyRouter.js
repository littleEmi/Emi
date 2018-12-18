import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import url from 'url';
const DefaultRoute = () => {
    return <div>
        这是默认路由
        </div>
};
const News = () => {
    let newList = [
        {
            id: 1,
            content: '这是新闻1啊',
        },
        {
            id: 2,
            content: '这是新闻2啊',
        },
        {
            id: 3,
            content: '这是新闻3啊',
        },
        {
            id: 4,
            content: '这是新闻4啊',
        },
    ];
    return (<Router>
        <div>
            这是新闻组件<br />
            <ul style={{ padding: 0, }}>
                {newList.map((v, k) => {
                    return <li key={k} style={{ listStyle: 'none', margin: '5px 0', }}>
                        <Link to={`/news/${v.id}?p1=这是第一个参数&p2=sdhjkh`}>{v.content}</Link>
                    </li>
                })}
            </ul>
        </div>
    </Router>)
};
const NewsDetail = (props) => {
    
    const { match, location } =props;
    return (<div>
        这是新闻详情组件<br />
        新闻的id是: {match.params.newsId}<br />
        query : <pre>{JSON.stringify(url.parse(location.search, true).query, null, 2)}</pre>
    </div>)
}
const About = () => {
    return <div>
        这是关于我们组件
        </div>
};
class MyRouter extends Component {
    constructor(props) {
        super(props);
        let that = this;
        that.state = {
        };
    }
    render() {
        return (
            <Router>
                <div>
                    router:<br />
                    {/* 开发环境下如果没有replace,点击相同的链接会警告 */}
                    <Link to="/" replace>首页</Link><br />
                    <Link to="/news" replace>新闻</Link><br />
                    <Link to="/about" replace>关于我们</Link><br />
                    <br />
                    <Route exact path="/" component={DefaultRoute} />
                    <Route exact path="/news" component={News} />
                    <Route path="/about" component={About} />
                    <Route path="/news/:newsId" component={NewsDetail} />
                    <button>点击跳转到关于我们页</button>
                </div>
            </Router>)
    }
}
export default MyRouter;
