import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch, NavLink, Redirect } from 'react-router-dom';
// 组件：UI组件（展示数据）和容器组件（请求数据，写逻辑）
// 木偶组件和智能组件
// components // containers

import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import Home from './containers/Home';
import Lang from './containers/Lang';
import Login from './containers/Login';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link to="/home">首页</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/lang">设计语言</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/login">登录</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Route path="/home" component={Home} />
                    <Route path="/lang" component={Lang} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/" render={()=><Redirect to='/home'/>} />
                </Layout>
            </div>

        )
    }
}
