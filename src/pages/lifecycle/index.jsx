import React, { Component } from 'react';
import { Carousel } from 'antd';
import img1 from './../../assets/images/WechatIMG139.png';
import img2 from './../../assets/images/WechatIMG140.png';
import img3 from './../../assets/images/WechatIMG141.png';
import img4 from './../../assets/images/WechatIMG142.png';
import img5 from './../../assets/images/WechatIMG143.png';
import img6 from './../../assets/images/WechatIMG144.png';
import img7 from './../../assets/images/WechatIMG145.png';
import img8 from './../../assets/images/WechatIMG384.png';
import './index.less';
export default class Index extends Component {
  constructor(props) {
    super(props);
    // getDefaultProps：接收初始props
    // getInitialState：初始化state
  }
  state = {};
  componentWillMount() {
    console.log('componentWillMount...');
    // 组件挂载前触发
  }
  render() {
    var imgArr = [img1, img2, img3, img4, img5, img6, img7, img8];
    console.log('render...');
    return (
      <div className="cal-wrap">
        <Carousel autoplay>
          {imgArr.map((o, i) => {
            return (
              <div className="cal-img">
                <img src={o} key={i} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
  componentDidMount() {
    // 组件挂载后触发
    console.log('componentDidMount...');
  }
  componentWillReceiveProps(nextProps) {
    // 接收到新的props时触发
    console.log('componentWillReceiveProps...');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 组件Props或者state改变时触发，true：更新，false：不更新
    console.log('shouldComponentUpdate...');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    // 组件更新前触发
    console.log('componentWillUpdate...');
  }
  componentDidUpdate() {
    // 组件更新后触发
    console.log('componentDidUpdate...');
  }
  componentWillUnmount() {
    // 组件卸载时触发
    console.log('componentWillUnmount...');
  }
}
