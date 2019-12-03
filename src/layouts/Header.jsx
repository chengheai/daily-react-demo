import styles from './index.less';
import { Button, Icon } from 'antd';
import router from 'umi/router';
import withRouter from 'umi/withRouter';
import React, { Component } from 'react';
import formats from './../utils/resource';
console.log(formats);
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  goBack = () => {
    router.push('/');
  };
  componentDidMount() {
    this.setState({
      title: this.props.location.pathname,
    });
  }
  filterName = path => {
    let name = '';
    formats.routes.forEach(i => {
      if (i.path === path) {
        name = i.name;
      }
    });
    return name;
  };
  render() {
    return (
      <div className={styles.header_wrap}>
        <Button type="link" onClick={this.goBack}>
          <Icon type="left" />
          返回
        </Button>
        <h1 className={styles.title}>React DEMO 测试</h1>
        <h2>当前页面：{this.filterName(this.props.location.pathname)}</h2>
      </div>
    );
  }
}
Header = withRouter(Header);
