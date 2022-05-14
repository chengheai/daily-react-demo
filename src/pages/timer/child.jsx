import React, { Component } from 'react';
import { Button, message, Spin } from 'antd';

export default class index extends Component {
  state = {
    loading: false,
    count: 0,
    timer1: null,
    timer2: null,
  };
  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.handleClearTimeout();
  }
  handleClearTimeout = () => {
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  };
  fetchData = () => {
    this.setState({ count: this.state.count + 1 });
    console.log('fetchData...');
    return new Promise((resolve, reject) => {
      resolve(this.state.count);
    });
  };
  handleChange = loading => {
    this.setState({ loading });
  };
  handleDownload = async () => {
    this.handleChange(true);
    const res = await this.fetchData();

    if (res === 8) {
      this.handleChange(false);
      message.success('导出成功1');
    } else {
      // 定时
      this.timer1 = setInterval(async () => {
        const res1 = await this.fetchData();
        console.log('res1: ', res1);
        if (res1 === 8) {
          this.handleChange(false);
          message.success('导出成功2');
          this.handleClearTimeout();
        }
      }, 1000);
      // 5秒后自动关闭
      this.timer2 = setTimeout(() => {
        this.handleClearTimeout();
        this.handleChange(false);
        message.error('超时关闭');
        console.log('超时');
      }, 1000 * 10);
    }
  };
  render() {
    const { loading } = this.state;
    return (
      <>
        <Spin spinning={loading}>
          <Button onClick={this.handleDownload} loading={loading}>
            导出
          </Button>
        </Spin>
      </>
    );
  }
}
