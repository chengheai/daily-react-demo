import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Table } from 'antd';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: true,
    };
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        width: 100,
        fixed: 'left',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: 100,
        render: sex => (sex === 1 ? '男' : sex === 2 ? '女' : '保密'),
        fixed: 'left',
      },
      {
        title: '等级',
        dataIndex: 'level',
        width: 100,
        fixed: 'left',
      },
      {
        title: '头像',
        dataIndex: 'avatar',
        width: 100,
        render: avatar => {
          return (
            <img
              src={avatar}
              alt="avatar"
              style={{ width: 50, height: 50, background: '#ffd591', padding: 3, borderRadius: 5 }}
            />
          );
        },
        fixed: 'left',
      },
      {
        title: '手机号',
        dataIndex: 'phone',
      },

      {
        title: '简介',
        dataIndex: 'info',
        width: 400,
        // render: info => {
        //   return <div className="txt-cut">{info}</div>;
        // },
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
    ];
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    this.props.dispatch({
      type: 'user/getData',
      payload: {},
      callback: list => {
        this.setState({
          list: list,
          isLoading: false,
        });
      },
    });
  }
  render() {
    const { isLoading, list } = this.state;
    return (
      <div>
        <Table
          rowKey={record => record.id}
          dataSource={list}
          loading={isLoading}
          columns={this.columns}
        />
        ;
      </div>
    );
  }
}

export default connect()(User);
