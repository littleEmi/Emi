import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import '../assets/css/form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        let that = this;
        that.state = {
            username: '',
            email: '',
            phone: '',
            homepage: '',
            zodiac: '',
            hobby: [{
                value: '看书',
                checked: false,
            },
            {
                value: '吃辣条',
                checked: false,
            },
            {
                value: '欺负宝宝',
                checked: false,
            },
            {
                value: '大宝剑',
                checked: false,
                disabled: true,
            },
            ],
            gender: '',
            avatar: '',
            message: '',
        };
    }
    render() {
        return (<div style={
            {
                margin: '30px auto 0 auto',
                width: 290,
                border: '1px dashed #000',
                padding: '0px 5px 10px 5px',
            }
        } >
            <form action="" >
                <h3 style={
                    { textAlign: 'center' }
                } >表单功能合集</h3>
                <div className="form-item input" >
                    username:< input type="text"
                        placeholder='请输入用户名'
                        value={this.state.username}
                        onChange={
                            (evt) => {
                                this.setState({
                                    username: evt.currentTarget.value,
                                })
                            }
                        }
                    />
                </div>
                <div className="form-item email" >
                    email:< input type="email"
                        placeholder='请输入邮箱'
                        value={this.state.email}
                        onChange={
                            (evt) => {
                                this.setState({
                                    email: evt.currentTarget.value,
                                })
                            }
                        }
                    /></div>
                <div className="form-item input" >
                    phone:< input type="text"
                        pattern="1[356789]\d{9}"
                        placeholder='请输入手机号码'
                        value={this.state.phone}
                        onChange={
                            (evt) => {
                                this.setState({
                                    phone: evt.currentTarget.value,
                                })
                            }
                        }
                    /></div>
                <div className="form-item datalist" >
                    个人主页:< input type="text"
                        list="homepage"
                        value={this.state.homepage}
                        onChange={
                            (evt) => {
                                this.setState({
                                    homepage: evt.currentTarget.value,
                                })
                            }
                        }
                    /><datalist id="homepage" >
                        <option label="buffge官网"
                            value="www.buffge.com" >www.buffge.com</option><option label="论坛站"
                                value="bbs.buffge.com" >bbs.buffge.com</option><option label="游戏站"
                                    value="game.buffge.com" >game.buffge.com</option>
                    </datalist>
                </div>
                <div className="form-item select" >
                    生肖:
           <select value={this.state.zodiac}
                        onChange={
                            (evt) => {
                                this.setState({
                                    zodiac: evt.currentTarget.value,
                                })
                            }
                        } >
                        <option value='0'>鼠</option>
                        <option value='1'>牛</option>
                        <option value='2'>虎</option>
                        <option value='3'>兔</option>
                        <option value='4'>龙</option>
                        <option value='5'>蛇</option>
                        <option value='6'>马</option>
                        <option value='7'>羊</option>
                        <option value='8'>猴</option>
                        <option value='9'>鸡</option>
                        <option value='10'>狗</option>
                        <option value='11'>猪</option>
                    </select></div><div className="form-item checkbox">
                    爱好: {
                        this.state.hobby.map((v, k) => {
                            return <label key={k} >
                                <input name="hobby" type="checkbox"
                                    checked={this.state.hobby[k].checked}
                                    disabled={this.state.hobby[k].disabled}
                                    onChange={
                                        (evt) => {
                                            let hobby = this.state.hobby;
                                            hobby[k].checked = !hobby[k].checked;
                                            this.setState({
                                                hobby: hobby,
                                            })
                                        }
                                    }
                                />{v.value}</label>
                        })
                    }
                </div>
                <div className="form-item radio" >
                    性别:
           <label>
                        <input name='gender' type="radio" value='0' checked={this.state.gender === 0}
                            onChange={() => {
                                this.setState({
                                    gender: 0,
                                })
                            }} />男</label>
                    <label>
                        <input name='gender' type="radio" value='1' checked={this.state.gender === 1}
                            onChange={() => {
                                this.setState({
                                    gender: 1,
                                })
                            }} />女</label></div>
                <div className="form-item file" >
                    头像:< input type="file"
                        multiple={true}
                        accept="image/gif, image/jpeg, image/png" />
                </div>
                <div className="form-item textarea">
                    留言:<textarea cols={20} rows={3} value={this.state.message} onChange={(evt) => {
                        this.setState({
                            message: evt.currentTarget.value,
                        })
                    }} />
                </div>
                <Button onClick={this.testSubmit} >检测提交</Button>
            </form>
        </div>
        );
    }
    testSubmit = () => {
        Modal.success({
            title: '表单内容',
            content: <div>
                表单信息:<br />
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>,
        });
    }

}
export default Form;
