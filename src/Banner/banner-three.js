import React from 'react';
import './banner-three.css';
import { Button, Divider } from 'antd';
import MenuTwo from '../Menu/menu-two';


function BannerThree() {
    return (
    
        <div className="containers">
            <div className="headers">
                <img src="/images/blazon.png" style={{height:"7rem",marginTop:"1rem"}} alt="log"/>

            </div>
            <Divider className="heading-dividers" >
            <div style={{ textAlign: "center" }}>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >HOME</Button>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >SERVICES</Button>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >ABOUT</Button>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >NEWS</Button>
                <Button size="default" type="link" style={{ color: 'white', fontWeight: "700" }} >CONTACT</Button>
            </div>
        </Divider>
        </div>
        
        

    )
}

export default BannerThree;
