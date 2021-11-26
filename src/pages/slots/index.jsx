import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SlotA from './slot1';
import SlotB from './slot2';
import './index.less';
export default class index extends Component {
  render() {
    return (
      <div className="common-wrap white">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <SlotA>
              <div>left</div>
              <div>mid</div>
              <div>right</div>
            </SlotA>
          </Col>
          <Col span={12}>
            <SlotB left={<div>left</div>} mid={<div>mid</div>} right={<div>right</div>} />
          </Col>
        </Row>
      </div>
    );
  }
}
