import React from 'react';
import 'antd/dist/antd.less'
import { Layout, Affix, Row, Col } from 'antd';
function LayoutHeader() {
    return (
        <Affix offsetTop={0}>
            <Layout.Header>
                <div className="warp">
                    <Row>
                        <Col>首页</Col>
                        <Col>导航</Col>
                    </Row>
                </div>
                
            </Layout.Header>
        </Affix>
    );
}
export default LayoutHeader