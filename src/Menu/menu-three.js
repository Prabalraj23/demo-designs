import React from 'react'
import './banner-three.css';

import { Button, Divider } from 'antd';



function menuThree() {
    return (
        <Divider className="heading-dividers" >
            <div style={{ textAlign: "center" }}>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >HOME</Button>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >SERVICES</Button>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >ABOUT</Button>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >NEWS</Button>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >CONTACT</Button>
            </div>
        </Divider>
    )
}

export default menuThree
