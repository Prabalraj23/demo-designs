import React from 'react';
import { Menu, Row, Col, Anchor, Button, Drawer, Space } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import './banner-one.css';


export default function BannerOne() {
    return (
        <div className="container">
            <img style={{ width: "100%" }} src="/images/plant.jpg" alt="banner" />

            <Row >
                <Col span={6} className="logo">
                    <a href="/"><img style={{ height: "4rem" }} src="https://blazon.in/assets/images/blazon.png" alt="logo" /></a>
                </Col>
                <Col span={18} className="btn">
                    <ButtonGroup>
                        <Space>
                            <Button size="large" type="primary" className="banner-button" >HOME</Button>
                            <Button size="large" type="primary" className="banner-button" >ABOUT</Button>
                            <Button size="large" type="primary" className="banner-button" >CONTACT</Button>
                            <Button size="large" type="primary" className="banner-button" >REGISTER FREE</Button>
                        </Space>
                    </ButtonGroup>
                    <h1 className="banner-words" >BLAZON WELCOMES YOU... </h1>
                </Col>
            </Row>
        </div>
    )
}
