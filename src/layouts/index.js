import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.less';
import Header from './Header';
import Footer from './Footer';
// function BasicLayout(props) {
//   return (
//     <div className={styles.normal}>
//       <Header />
//       <div className={styles.content}>{props.children}</div>

//       <Footer />
//     </div>
//   );
// }
export default withRouter(props => (
  <TransitionGroup>
    <CSSTransition key={props.location} classNames="fade" timeout={600}>
      <div className="basic-content-wrap">
        <div className="normal">
          <Header />
          <div className="content">{props.children}</div>
          <Footer />
        </div>
      </div>
    </CSSTransition>
  </TransitionGroup>
));

// export default BasicLayout;
