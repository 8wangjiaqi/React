import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch, NavLink, Redirect } from 'react-router-dom';
import Gailan from './Gailan';
import Tubiao from './Tubiao';
import Liaotian from './Liaotian';
import Bianji from './Bianji';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class Home extends Component {
    render() {
        const {url} = this.props.match;
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />工作台</span>}>
                            <Menu.Item key="1"><Link to={`${url}/gailan`}>概览</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={`${url}/tubiao`}>图表</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={`${url}/bianji`}>编辑器</Link></Menu.Item>
                            <Menu.Item key="4"><Link to={`${url}/liaotian`}>聊天室</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />设置中心</span>}>
                            <Menu.Item key="5">用户管理</Menu.Item>
                            <Menu.Item key="6">角色管理</Menu.Item>
                            <Menu.Item key="7">权限管理</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280,
                    }}
                    >
                        <Route path={url+'/gailan'} component={Gailan} />
                        <Route path={url+'/bianji'} component={Bianji} />
                        <Route path={url+'/tubiao'} component={Tubiao} />
                        <Route path={url+'/liaotian'} component={Liaotian} />
                        <Route exact path={url+'/'} render={()=><Redirect to='/home/gailan'/>} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
