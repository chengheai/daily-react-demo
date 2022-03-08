import React, { useReducer, useState, useEffect, memo } from 'react';
import { Divider, Button, message } from 'antd';

const Sub = props => {
  console.log('props: ', props);
  useEffect(() => {
    console.log('依赖props.count');
    // 相当于ComponentWillUnmount;
    return () => {
      //相当于ComponentWillUnmount
      message.info('ComponentWillUnmount');
    };
  }, []); // 相当于ComponentDidUpdate
  return (
    <div>
      <h2>sub</h2>
      <p>{props.count}</p>
    </div>
  );
};
const Child0 = props => {
  console.log('Child0 render');
  return <h2>Child0</h2>;
};

const Child1s = props => {
  console.log('Child1 render');
  return <h2>memo Child1</h2>;
};
const Child1 = memo(Child1s);
export default function Usual() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const handleClick = () => {
    forceUpdate();
  };
  return (
    <div className="common-wrap">
      <Divider orientation="left">hooks实现forceUpdate</Divider>
      <Button type="primary" onClick={handleClick}>
        test
      </Button>
      <Divider orientation="left">componentDidMount，componentDidUpdate</Divider>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        count++
      </Button>
      <Divider orientation="left">componentWillUnmount</Divider>
      {show ? <Sub count={count} state={show} /> : ''}
      <Button type="primary" onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </Button>
      <Divider orientation="left">memo </Divider>
      <Child0 />
      <Child1 />
      <Divider orientation="left">useReducer </Divider>
      <Divider orientation="left">useMemo </Divider>
      <Divider orientation="left">useCallback </Divider>
    </div>
  );
}
