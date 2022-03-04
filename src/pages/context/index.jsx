import { Button } from 'antd';
import React, { Component } from 'react';

const ThemeContext = React.createContext({
  theme: 'dark',
  toggle: () => {},
});

function GrandSon() {
  return (
    <ThemeContext.Consumer>
      {props => (
        <Button type="primary" onClick={props.toggle}>
          GrandSon: {props.theme}
        </Button>
      )}
    </ThemeContext.Consumer>
  );
}
function Son() {
  return (
    <ThemeContext.Consumer>
      {props => (
        <>
          <Button type="primary" onClick={props.toggle} style={{ marginRight: 10 }}>
            son: {props.theme}
          </Button>
          <GrandSon />
        </>
      )}
    </ThemeContext.Consumer>
  );
}
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      msg: '未改变',
      toggle: this.toggle,
    };
  }
  toggle = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark',
    });
  };
  componentDidMount() {
    console.log(this.state);
  }
  componentDidUpdate(prevProps, preState) {
    if (preState.theme !== this.state.theme) {
      this.setState({
        msg: `change!! preState:${preState.theme}`,
      });
    }
    console.log('preState: ', preState);
    console.log('prevProps: ', prevProps);
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="common-wrap">
          <h1>{this.state.msg}</h1>
          <Son />
        </div>
      </ThemeContext.Provider>
    );
  }
}
