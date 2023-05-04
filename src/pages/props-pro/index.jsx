import React from 'react';
import PropsComponent from './PropsComponent';
function ChildrenComponent() {
  return <div> In this chapter, let's learn about react props ! </div>;
}
export default class Index extends React.Component {
  state = {
    mes: 'hello,React',
  };
  node = null;
  say = () => this.setState({ mes: 'let us learn React!' });
  render() {
    return (
      <div className="common-wrap">
        <PropsComponent
          mes={this.state.mes} // ① props 作为一个渲染数据源
          say={this.say} // ② props 作为一个回调函数 callback
          Component={ChildrenComponent} // ③ props 作为一个组件
          renderName={() => <div> my name is alien </div>} // ④ props 作为渲染函数
        >
          {() => <div>hello,world</div>} {/* ⑤render props */}
          <ChildrenComponent /> {/* ⑥render component */}
        </PropsComponent>
      </div>
    );
  }
}
