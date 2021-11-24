import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './index.less';
import Header from './Header';
import Footer from './Footer';
export default withRouter(props => (
  <TransitionGroup>
    <CSSTransition key={props.location} classNames="fade" timeout={600}>
      <ConfigProvider locale={zhCN}>
        <div className="basic-content-wrap">
          <div className="normal">
            <Header />
            <div className="content">{props.children}</div>
            <Footer />
          </div>
        </div>
      </ConfigProvider>
    </CSSTransition>
  </TransitionGroup>
));
