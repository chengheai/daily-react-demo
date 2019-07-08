import styles from './index.css';
import sayHello from 'courage';
import React from 'react';
import { Button } from 'antd';
let greeting = sayHello().split('');
export default class Menu extends React.Component {
  constructor(){
    super()
    this.state = {
      stNumber: 1
    }
  }
  componentWillMount(){
    console.log('组件进来了啊')
  }
  changeStyle(){
    this.setState({
      // stNumber: this.state.stNumber + 1
    },()=>{
      this.state.stNumber >= 7
        ? this.setState({ stNumber: 1 })
        : this.setState({ stNumber: this.state.stNumber + 1 });
    });

  };
  render(){
    let { stNumber } = this.state;
    return (
      <div className={`${styles.normal} ${styles.bg}`}>
        <Button type="danger" onClick={() => this.changeStyle()}>
          动画{stNumber}
        </Button>
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
