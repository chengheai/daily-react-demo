import React from 'react';
import Parent from './parent';
export default class index extends Parent {
  componentDidMount() {
    console.log('test');
    super.componentDidMount(); // 调用父组件生命周期
  }
  render() {
    return (
      <div className="common-wrap white">super.componentDidMount(); // 调用父组件生命周期</div>
    );
  }
}
