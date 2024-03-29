import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'antd';
export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: true,
      userInput: '',
    };
  }
  handleClick() {
    this.setState({
      liked: !this.state.liked,
    });
  }
  handleChange(e) {
    console.log(e);
    this.setState({
      userInput: e.target.value,
    });
  }
  clearAndFocusInput() {
    this.setState({ userInput: '' }, () => {
      this.refs.theInput.focus();
    });
  }
  render() {
    const { liked, userInput } = this.state;
    console.log(this.state);
    return (
      <div className="common-wrap">
        <Row gutter={10}>
          <Col span={2}>
            <Button type="primary" onClick={() => this.clearAndFocusInput()}>
              点击focus并重置
            </Button>
          </Col>
          <Col span={8}>
            <Input
              type="text"
              ref="theInput"
              value={userInput}
              onChange={e => this.handleChange(e)}
            />
          </Col>
          <Col span={8}>
            <Button type="danger" onClick={() => this.handleClick()}>
              {liked ? '喜欢' : '不喜欢'}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
