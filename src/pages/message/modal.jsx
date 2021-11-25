import { Modal } from 'antd';
import React, { Component } from 'react';
export default class modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOk = () => {
    console.log('this.props: ', this.props);
    this.props.changeModal(!this.props.visible);
  };
  render() {
    return (
      <div>
        <Modal
          title={this.props.dataSource.name}
          okText="关 闭"
          visible={this.props.visible}
          cancelText="取 消"
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <div>
            <img
              style={{ width: '100%' }}
              alt={this.props.dataSource.name}
              src={this.props.dataSource.url}
            />
          </div>
        </Modal>
      </div>
    );
  }
}
