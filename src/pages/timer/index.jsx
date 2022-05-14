import React, { Component } from 'react';
import Child from './child';
import { Button, Row, Col } from 'antd';
export default class index extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div className="common-wrap white">
        <Row>
          <Col span={12}>
            <Button
              type="primary"
              onClick={() => {
                this.setState({ show: !this.state.show });
              }}
            >
              {this.state.show ? 'hide' : 'show'}
            </Button>
          </Col>
          <Col span={12}>{this.state.show ? <Child /> : null}</Col>
        </Row>
      </div>
    );
  }
}
