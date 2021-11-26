import { Component } from 'react';

function testable(target) {
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    console.log(this.isTestable);
  }
  render() {
    return <div className="common-wrap">Decorator</div>;
  }
}

export default MyTestableClass;
