
import styles from './index.css';
import { Button, Col, Row } from 'antd';
import Link from 'umi/link';
export default function() {
  return (
    <div>
      <h1 className={styles.title}>React DEMO 测试</h1>
      <div style={{ padding: '15px 8px' }}>
        <Row>
          <Col xs={6} sm={6} md={6} lg={3} xl={2}>
            <Link to="/">
              <Button type="primary">首页</Button>
            </Link>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={2}>
            <Link to="/antd">
              <Button type="primary">antd</Button>
            </Link>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={2}>
            <Link to="/products">
              <Button type="primary">products</Button>
            </Link>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} xl={2}>
            <Link to="/recursion">
              <Button type="primary">递归</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
