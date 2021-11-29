import React, { Component } from 'react';
import { Button, Descriptions } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
class Detail extends Component {
  constructor() {
    super();
    this.state = {
      info: {},
    };
  }
  goBack() {
    router.goBack();
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    // 使用async
    const {
      match: {
        params: { id },
      },
    } = this.props;
    if (this.props.data.list.length === 0) {
      await this.props.dispatch({
        type: 'routing/fetchTableData',
      });
    }
    console.log('this.props: ', this.props);
    let info = this.props.data.list.find(item => item.key === +id);
    const i = 888;
    const defaultData = {
      key: i,
      UserName: `Edward King ${i}`,
      Telephone: `18825020001`,
      Live: 'Shanghai Pudong',
      Remark: `Remark${i}`,
      Address: `No. ${i}, Wantang Road, Pudong, Shanghai, China`,
    };
    this.setState({
      info: info || defaultData,
    });
  }
  render() {
    const { info } = this.state;
    return (
      <div className="">
        <Button type="primary" className="mb20" onClick={() => this.goBack()}>
          返回
        </Button>
        <div>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">{info.UserName}</Descriptions.Item>
            <Descriptions.Item label="Telephone">{info.Telephone}</Descriptions.Item>
            <Descriptions.Item label="Live">{info.Live}</Descriptions.Item>
            <Descriptions.Item label="Remark">{info.Remark}</Descriptions.Item>
            <Descriptions.Item label="Address">{info.Address}</Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    );
  }
}
Detail.propTypes = {};

function mapStateToProps({ routing: data }) {
  return { data };
}
export default connect(mapStateToProps)(Detail);
