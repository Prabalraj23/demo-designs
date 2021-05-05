import React from 'react';
import { Menu, Row, Col, Anchor } from 'antd';
import './header_one.css';
import MenuOne from '../Menu/menu-one';

function HeaderOne() {
    return (
        <div>
            <Row style={{ padding: "2rem 0px" }}>
                <Col md={6} sm={24} >
                    <a href="/"><img style={{ height: "4rem" }} src="https://blazon.in/assets/images/blazon.png" alt="logo" /></a>
                </Col>
                <Col md={18} sm={24}>
                    <Menu mode="horizontal">
                        <Menu.Item key="Login" className="signin-button"  >
                            Login
                    </Menu.Item>

                    </Menu>
                </Col>
            </Row>
            <MenuOne />
        </div>
    )
}

export default HeaderOne;