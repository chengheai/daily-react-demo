import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
export default class child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextTypes = {
    theme: PropTypes.string,
    toggle: PropTypes.func,
  };
  render() {
    console.log(this.context);
    const { theme, toggle } = this.context;
    return (
      <>
        <Button type="primary" onClick={toggle} style={{ marginRight: 10 }}>
          son {theme}
        </Button>
      </>
    );
  }
}
