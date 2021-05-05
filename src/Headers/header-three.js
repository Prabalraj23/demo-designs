import React from 'react';
import { Menu, Row, Col, Anchor, Button, Drawer, Space } from 'antd';
import './header-three.css'
import ButtonGroup from 'antd/lib/button/button-group';


function HeaderThree() {
    return (
        <div className="container">
            <img src="https://epe.brightspotcdn.com/dims4/default/2d57a2c/2147483647/strip/true/crop/5298x3595+47+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.amazonaws.com%2F7b%2Fae%2F5c5655c6481cbc1a5ec6d272e12f%2Fbooks.jpg" className="banner-image" alt="banner" />
            
            <Row >
                <Col span={6} className="logo">
                    <a href="/"><img style={{ height: "4rem" }} src="https://blazon.in/assets/images/blazon.png" alt="logo" /></a>
                </Col>
                <Col span={18} className="btn">
                    <ButtonGroup>
                        <Button size="large" type="link" style={{color:'orange', fontWeight:"600"}} >HOME</Button>
                        <Button size="large" type="link" style={{color:'orange', fontWeight:"600"}} >ABOUT</Button>
                        <Button size="large" type="link" style={{color:'orange', fontWeight:"600"}} >CONTACT</Button>
                        <Button size="large" type="link" style={{color:'orange', fontWeight:"600"}} >REGISTER FREE</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </div>
    )
}

export default HeaderThree
