import { Button, Divider } from 'antd';
import React from 'react';
import './menu-five.css';


function MenuFive() {
    return (
        <Divider className="heading-divider" >
            <div style={{ textAlign: "center" }}>
                <Button size="default" type="link" style={{ color: 'darkorange', fontWeight: "600" }} >HOME</Button>
                <Button size="default" type="link" style={{ color: 'darkorange', fontWeight: "600" }} >SERVICES</Button>
                <Button size="default" type="link" style={{ color: 'darkorange', fontWeight: "600" }} >ABOUT</Button>
                <Button size="default" type="link" style={{ color: 'darkorange', fontWeight: "600" }} >NEWS</Button>
                <Button size="default" type="link" style={{ color: 'darkorange', fontWeight: "600" }} >CONTACT</Button>
            </div>
        </Divider>
    )
}

export default MenuFive
