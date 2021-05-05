import { Button, Col, Row, Space } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React from 'react';
import './banner-two.css';


export default function BannerTwo() {
    return (
        <div className="main">
            <img style={{ width: "100%" }} src="/images/grass.jpg" alt="banner" />

            <Row >
                <Col span={6} className="logo">
                    <a href="/"><img style={{ width: "15rem"}} src="/images/blazon.png" alt="logo" /></a>
                </Col>
                <Col span={18} className="btns">
                    <ButtonGroup>
                        <Space>
                            <Button size="large" type="link" className="banner-buttons" >HOME</Button>
                            <Button size="large" type="link" className="banner-buttons" >ABOUT</Button>
                            <Button size="large" type="link" className="banner-buttons" >CONTACT</Button>
                            <Button size="large" type="link" className="banner-buttons" >REGISTER FREE</Button>
                        </Space>
                    </ButtonGroup>
                    <h1 className="banner-word" >BLAZON WELCOMES YOU... </h1>
                </Col>
            </Row>
        </div>
    )
}
