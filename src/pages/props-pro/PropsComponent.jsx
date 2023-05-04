import React from 'react';
export default class PropsComponent extends React.Component {
  componentDidMount() {
    console.log(this, '_this');
  }
  render() {
    const { children, mes, renderName, say, Component } = this.props;
    const renderFunction = children[0];
    const renderComponent = children[1];
    /* 对于子组件，不同的props是怎么被处理 */
    return (
      <div>
        {renderFunction()}
        {mes}
        {renderName()}
        {renderComponent}
        <Component />
        <button onClick={() => say()}> change content </button>
      </div>
    );
  }
}
