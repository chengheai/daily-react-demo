import { Button, Card, Spin } from 'antd';
import { connect } from 'dva';
import React, { Component } from 'react';
import './index.less';
const { Meta } = Card;

class Message extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    this.setState({
      loading: true,
    });
    this.props.dispatch({
      type: 'message/fetchDogs',
      callback: list => {
        this.setState({
          list,
        });
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 0);
      },
    });
  }
  handleClick = () => {
    this.getData();
  };
  render() {
    return (
      <div className="msg-wap">
        <div className="msg-test">
          <Button type="primary" onClick={this.handleClick}>
            加载 dogs
          </Button>
        </div>
        <Spin spinning={this.state.loading}>
          <div className="flex">
            {this.state.list.map((item, index) => {
              return (
                <Card
                  key={index}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={item} />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              );
            })}
          </div>
        </Spin>
      </div>
    );
  }
}

Message.propTypes = {};

function mapStateToProps({ message }) {
  return { message };
}
export default connect(mapStateToProps)(Message);
