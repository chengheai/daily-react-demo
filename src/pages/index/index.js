import styles from './index.css';
import sayHello from 'courage';
import React from 'react';
import { Button, Col, Row, Tooltip } from 'antd';
import Link from 'umi/link';
let greeting = sayHello().split('');
export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      stNumber: 3,
    };
  }
  componentWillMount() {
    // console.log('组件进来了啊');
  }
  changeStyle() {
    this.setState(
      {
        // stNumber: this.state.stNumber + 1
      },
      () => {
        this.state.stNumber >= 7
          ? this.setState({ stNumber: 1 })
          : this.setState({ stNumber: this.state.stNumber + 1 });
      },
    );
  }
  render() {
    let { stNumber } = this.state;
    let popStr = '动画-' + stNumber;
    return (
      <div className={`${styles.normal} ${styles.bg}`}>
        <div style={{ padding: '15px 8px' }}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Tooltip placement="top" title={popStr}>
                <Button type="danger" onClick={() => this.changeStyle()}>
                  动画{stNumber}
                </Button>
              </Tooltip>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Link to="/">
                <Tooltip placement="top" title="首页">
                  <Button type="primary">首页</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Link to="/calendar">
                <Tooltip placement="top" title="日历">
                  <Button type="danger">日历</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Link to="/skeleton">
                <Tooltip placement="top" title="产品">
                  <Button type="primary">产品</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Link to="/recursion">
                <Tooltip placement="top" title="递归">
                  <Button type="primary">递归</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Link to="/props">
                <Tooltip placement="top" title="组件通信">
                  <Button type="primary">组件通信</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Link to="/lifecycle">
                <Tooltip placement="top" title="生命周期">
                  <Button type="primary">生命周期</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Link to="/message">
                <Tooltip placement="top" title="异步加载message">
                  <Button type="primary">异步加载message</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2}>
              <Link to="/like">
                <Tooltip placement="top" title="like操作">
                  <Button>like</Button>
                </Tooltip>
              </Link>
            </Col>
          </Row>
        </div>
        <div className={styles.container}>
          <div
            className={`${styles.animate} ${
              stNumber === 1
                ? styles.one
                : stNumber === 2
                ? styles.two
                : stNumber === 3
                ? styles.three
                : stNumber === 4
                ? styles.four
                : stNumber === 5
                ? styles.five
                : stNumber === 6
                ? styles.six
                : styles.seven
            }`}
          >
            {greeting.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
            <span>老</span>
            <span>玻</span>
            <span>璃</span>
          </div>
        </div>
        <h2 style={{ fontSize: 40, color: 'white' }}>welcome guys</h2>
      </div>
    );
  }
}
