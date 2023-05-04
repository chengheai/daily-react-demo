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
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Tooltip placement="top" title={popStr}>
                <Button type="danger" onClick={() => this.changeStyle()}>
                  动画{stNumber}
                </Button>
              </Tooltip>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/hooks">
                <Tooltip placement="top" title="hooks">
                  <Button type="primary">hooks</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/calendar">
                <Tooltip placement="top" title="日历">
                  <Button type="danger">日历</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/skeleton">
                <Tooltip placement="top" title="产品">
                  <Button type="primary">产品</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/recursion">
                <Tooltip placement="top" title="递归">
                  <Button type="primary">递归</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/props">
                <Tooltip placement="top" title="组件通信">
                  <Button type="primary">组件通信</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/lifecycle">
                <Tooltip placement="top" title="生命周期">
                  <Button type="primary">生命周期</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/message">
                <Tooltip placement="top" title="异步加载message">
                  <Button type="primary">异步加载</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/like">
                <Tooltip placement="top" title="like操作">
                  <Button type="primary">like</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/routers">
                <Tooltip placement="top" title="router示例🌰">
                  <Button type="primary">路由</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/users">
                <Tooltip placement="top" title="mock示例">
                  <Button type="primary">mock</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/watermark">
                <Tooltip placement="top" title="watermark加水印">
                  <Button type="primary">加水印</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/decorator">
                <Tooltip placement="top" title="decorator修饰符">
                  <Button type="primary">修饰符</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/slots">
                <Tooltip placement="top" title="slots插槽">
                  <Button type="primary">slots插槽</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/form">
                <Tooltip placement="top" title="示例form">
                  <Button type="primary">示例form</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/render">
                <Tooltip placement="top" title="render">
                  <Button type="primary">render</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/hoc">
                <Tooltip placement="top" title="Hoc Component">
                  <Button type="primary">Hoc</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/context">
                <Tooltip placement="top" title="context">
                  <Button type="primary">context</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/context-old">
                <Tooltip placement="top" title="context-old">
                  <Button type="primary">context-old</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/usual">
                <Tooltip placement="top" title="常见问题">
                  <Button type="danger">常见问题</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/usexx">
                <Tooltip placement="top" title="usexx">
                  <Button type="danger">usexx</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/timer">
                <Tooltip placement="top" title="定时查询导出">
                  <Button type="primary">定时器</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/imperative">
                <Tooltip placement="top" title="imperative">
                  <Button type="primary">父取子数据</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/super">
                <Tooltip placement="top" title="super componentDidMount">
                  <Button type="primary">super</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/state">
                <Tooltip placement="top" title="state">
                  <Button type="primary">state</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/props-pro">
                <Tooltip placement="top" title="PropsComponent">
                  <Button type="primary">props-pro</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/loading">
                <Tooltip placement="top" title="loading">
                  <Button type="primary">loading</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/test">
                <Tooltip placement="top" title="test">
                  <Button type="primary">test</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/render-pro">
                <Tooltip placement="top" title="render-pro">
                  <Button type="primary">render-pro</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/ref">
                <Tooltip placement="top" title="ref">
                  <Button type="primary">ref</Button>
                </Tooltip>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={2} className={styles.mb20}>
              <Link to="/big-data">
                <Tooltip placement="top" title="海量数据📊">
                  <Button type="primary">big-data</Button>
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
