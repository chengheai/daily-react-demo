import { Button, Card, Spin, message } from 'antd';
import { connect } from 'dva';
import React, { Component } from 'react';
import ShModal from './modal';
import './index.less';
const { Meta } = Card;

class Message extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      dataSource: {},
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
    });
  }
  handleClick = () => {
    if (this.props.message.isLoading) {
      message.info('数据加载中...');
      return;
    }
    this.getData();
  };
  handlePreview(item) {
    this.setState({
      dataSource: item,
      visible: true,
    });
  }
  changeModal = visible => {
    this.setState({
      visible,
      dataSource: {},
    });
  };
  render() {
    const { isLoading = true, list } = this.props.message;
    const { visible, dataSource } = this.state;
    return (
      <div className="msg-wap">
        <div className="msg-test">
          <Button type="primary" onClick={this.handleClick}>
            加载{isLoading ? '中...' : 'dogs'}
          </Button>
        </div>
        <Spin spinning={isLoading}>
          <div className="flex">
            {list.map((item, index) => {
              return (
                <Card
                  key={index}
                  hoverable
                  onClick={() => this.handlePreview(item)}
                  style={{ width: 240, marginLeft: 20, marginBottom: 20 }}
                  cover={<img alt="example" src={item.url} />}
                >
                  <Meta title={item.name} description={item.category} />
                </Card>
              );
            })}
          </div>
        </Spin>
        <ShModal visible={visible} dataSource={dataSource} changeModal={this.changeModal} />
      </div>
    );
  }
}

Message.propTypes = {};

function mapStateToProps({ message }) {
  return { message };
}
export default connect(mapStateToProps)(Message);
