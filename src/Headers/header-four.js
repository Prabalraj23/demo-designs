import React, { useState } from 'react';

import './header-four.css';
import { Layout, Menu, Breadcrumb, Col, Avatar, Anchor, Row, Input, Button } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined,


} from '@ant-design/icons';
import './header-four.css';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const style = { background: '#F8F8FF', padding: '8px 0' };



function HeaderFour() {

  const [collapsed, setCollapsed] = useState(false);


  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout className="header" style={{ minHeight: '100vh' }} >
        <Sider className="slider" collapsible collapsed={collapsed} onCollapse={onCollapse}>
          {collapsed ? (<img className="logos" src="/images/blazon-logo.png" alt="logo" />) :
            <img className="logof" src="/images/blazon.png" alt="logo" />
          }


          <Menu className="slider" defaultSelectedKeys={['0']} mode="inline">
            <div >

            </div>
            <br />
            <Menu.Item key="0" icon={<HomeOutlined />}>
              Dashboard
              </Menu.Item>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Sales
                </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Sales">
              <Menu.Item key="3">trends</Menu.Item>
              <Menu.Item key="4">Channel</Menu.Item>
              <Menu.Item key="5">Purchase</Menu.Item>
              <Menu.Item key="5">Price</Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Shoppers
                </Menu.Item>
            <SubMenu key="sub2" icon={<UserOutlined />} title="Shoppers">
              <Menu.Item key="3">trends</Menu.Item>
              <Menu.Item key="4">Channel</Menu.Item>
              <Menu.Item key="5">Purchase</Menu.Item>
              <Menu.Item key="5">Price</Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              Team
          </Menu.Item>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

          </Menu>

        </Sider>

      <Layout className="site-layout">
        <Content >
        <br/>
          <Button className="login-button" type="primary" shape="round" >login</Button>
          <BellOutlined style={{ fontSize: '37px' }} className="bell" />
          <Avatar size={40} className="avatar-small"
            src={<img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt="avatar" />}
          />
          <h1 style={{ fontSize: "30px",color:"grey" }}>HEADING</h1>

          <br />
          <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <div style={style}>
                <div className="site-layout-content" style={{ padding: 24, minHeight: 500 }}>
                </div>
              </div>
            </Col>
          </Row>

        </Content>

      </Layout>
    </Layout>


  );
}



export default HeaderFour;