import React, { Component } from 'react';
import { Button, Table } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
class Routing extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'UserName',
        dataIndex: 'UserName',
      },
      {
        title: 'Telephone',
        dataIndex: 'Telephone',
      },
      {
        title: 'Address',
        dataIndex: 'Address',
      },
      {
        title: 'Action',
        render: (text, record) => (
          <Button type="primary" onClick={() => this.handleLink(record)}>
            Detail
          </Button>
        ),
      },
    ];
  }
  handleLink = row => {
    console.log('row:', row);

    router.push(`/routers/${row.key}`);
  };

  componentDidMount() {
    this.getData();
  }
  getData() {
    this.props.dispatch({
      type: 'routing/fetchTableData',
    });
  }
  render() {
    // console.log('this.props: ', this.props);
    const { list, isLoading } = this.props.routing;

    return (
      <>
        <Table dataSource={list} loading={isLoading} columns={this.columns} />;
      </>
    );
  }
}

Routing.propTypes = {};

function mapStateToProps({ routing }) {
  return { routing };
}
export default connect(mapStateToProps)(Routing);
