import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Button } from 'antd';
import React from 'react';
import './menu-one.css';

const { Panel } = Collapse;



function MenuOne() {
    return (
        <div>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
            >

                <Panel header="Menu" showArrow={false} key="2" className="site-collapse-custom-panel">
                    <p><Button type="link">Home</Button></p>
                    <p><Button type="link">services</Button></p>
                    <p><Button type="link">about</Button></p>
                    <p><Button type="link">Help</Button></p>
                </Panel>
 
            </Collapse>
        </div>
    )
}

export default MenuOne
