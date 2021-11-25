import React, { Component } from 'react';
import { Button, Input, Slider, message } from 'antd';
import dom2Image from 'dom-to-image';
import './index.less';
import defaultImg from '@/assets/yay.jpg';
export default class index extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      preImg: '',
      markOptions: {
        text: '仅供 xxx 验证使用',
        fontSize: 10,
        width: 5,
        color: '#000000',
        alpha: 50,
        rotate: 35,
      },
    };
  }
  uploadImg(e, num) {
    //上传图片
    var file = e.target.files[0];
    if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
      alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种');
      return false;
    }
    var reader = new FileReader();
    reader.onload = e => {
      let data;
      if (typeof e.target.result === 'object') {
        // 把Array Buffer转化为blob 如果是base64不需要
        data = window.URL.createObjectURL(new Blob([e.target.result]));
      } else {
        data = e.target.result;
      }
      if (num === 1) {
        this.setState({
          preImg: data,
        });
      }
    };
    reader.readAsDataURL(file);
  }
  paint() {
    const { markOptions } = this.state;
    console.log('markOptions: ', markOptions);
    // 文字长度
    const wordWidth = markOptions.fontSize * markOptions.text.split('').length;
    const width = wordWidth + markOptions.width;

    let svgText = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${width}px">
    <text x="50%" y="50%"
        alignment-baseline="middle"
        text-anchor="middle"
        stroke="${markOptions.color}"
        opacity="${markOptions.alpha / 100}"
        transform="translate(${width / 2}, ${width / 2}) rotate(${
      markOptions.rotate
    }) translate(-${width / 2}, -${width / 2})"
        font-weight="100"
        font-size="${markOptions.fontSize}"
        font-family="microsoft yahei"
        >
        ${markOptions.text}
    </text>
   </svg>`;

    return `url(data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgText)))})`;
  }
  handleDown = () => {
    const node = this.myRef.current;
    dom2Image
      .toPng(node)
      .then(function(dataUrl) {
        var oLink = document.createElement('a');
        oLink.download = '水印图片.png';
        oLink.href = dataUrl;
        oLink.click();
        message.success('下载成功');
      })
      .catch(function(error) {
        console.error('oops, something went wrong!', error);
        message.error('下载失败');
      });
  };
  handleChange = (val, type) => {
    const markOptions = this.state.markOptions;
    markOptions[type] = val;
    this.setState({
      markOptions,
    });
  };
  render() {
    const { markOptions, preImg } = this.state;
    return (
      <div className="common-wrap">
        <div className="wrap">
          <div className="op-left">
            <div className="file-upload">
              <p>选择图片</p>
              <Button type="primary" icon="cloud-upload">
                <label htmlFor="uploads"> 选择需要添加水印的图片</label>
              </Button>
              <input
                type="file"
                id="uploads"
                hidden
                accept="image/png, image/jpeg, image/gif, image/jpg"
                onChange={e => this.uploadImg(e, 1)}
              />
            </div>
            <p>水印文字</p>
            <Input
              value={markOptions.text}
              placeholder="请输入水印内容"
              onChange={val => this.handleChange(val.target.value, 'text')}
            ></Input>
            <p>字体颜色</p>
            <Input
              placeholder="色彩"
              type="color"
              onChange={val => this.handleChange(val.target.value, 'color')}
            ></Input>
            <p>旋转角度</p>
            <Slider
              value={markOptions.rotate}
              min={0}
              max={360}
              onChange={val => this.handleChange(val, 'rotate')}
            ></Slider>
            <p>透明度</p>
            <Slider
              value={markOptions.alpha}
              min={0}
              max={100}
              onChange={val => this.handleChange(val, 'alpha')}
            ></Slider>
            <p>文本间距</p>
            <Slider
              value={markOptions.width}
              min={0}
              max={100}
              onChange={val => this.handleChange(val, 'width')}
            ></Slider>
            <p>字体大小</p>
            <Slider
              value={markOptions.fontSize}
              min={0}
              step={1}
              max={50}
              onChange={val => this.handleChange(val, 'fontSize')}
            ></Slider>
          </div>
          <div className="right">
            <Button
              onClick={this.handleDown}
              className="download-btn"
              type="primary"
              icon="cloud-download"
            >
              下载水印图片
            </Button>
            <div className="preview" ref={this.myRef}>
              <img src={preImg || defaultImg} alt="" />
              <div className="watermark" style={{ background: this.paint() }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
