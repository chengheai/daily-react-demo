import styles from './index.less';
import Header from './Header'
import Footer from './Footer'
function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default BasicLayout;
