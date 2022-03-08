import React, { createRef, forwardRef, useCallback, useRef, useState } from 'react';
import { Divider, Button } from 'antd';
import Child from './Child';
import Child1 from './Child1';
import MemoTest from './useMemo.jsx';

const Sub = forwardRef((props, inputRefs) => {
  // console.log('inputRefs: ', inputRefs);
  return (
    <div>
      <p>组件ref</p>
      <input ref={inputRefs} placeholder="forwardRef" />
      {props.children}
    </div>
  );
});
export default function Use() {
  const inputRef = useRef(null);
  const inputRef1 = createRef(null);
  const inputRef2 = createRef(null);

  const [state, setState] = useState({ count: 0, title: 'default' });
  const [title, setTitle] = useState('默认标题');
  const handleClick = type => {
    if (type === 1) {
      inputRef.current.focus();
    } else if (type === 2) {
      inputRef1.current.focus();
    } else {
      inputRef2.current.focus();
    }
  };
  return (
    <div className="common-wrap">
      <h1>React 性能优化思路</h1>
      <h1>
        1、减少重新 render 的次数。因为在 React 里最重(花时间最长)的一块就是
        reconction(简单的可以理解为 diff)，如果不 render，就不会 reconction。 <br />
        2、减少计算的量。主要是减少重复计算，对于函数式组件来说，每次 render
        都会重新从头开始执行函数调用。
      </h1>
      <h3>
        React.memo 和 useCallback 都是为了减少重新 render 的次数。对于如何减少计算的量，就是 useMemo
        来做的
      </h3>
      <Divider orientation="left">
        <h2>useRef, createRef</h2>
      </Divider>
      <p>原生:</p>
      <input ref={inputRef} placeholder="useRef" />
      <Button onClick={() => handleClick(1)} type="primary">
        focus
      </Button>
      <input ref={inputRef1} placeholder="createRef" />
      <Button onClick={() => handleClick(2)} type="primary">
        focus
      </Button>
      <Divider orientation="left">
        <h2>forwardRef</h2>
      </Divider>
      <Sub ref={inputRef2}>
        <Button onClick={() => handleClick(3)} type="primary">
          Sub组件 focus
        </Button>
      </Sub>
      <Divider orientation="left">
        <h2>memo :props不改变自组件不更新 类似PureComponent</h2>
      </Divider>
      <Child count={state.count} />
      <h3>{state.title}</h3>
      <Button type="primary" onClick={() => setState({ ...state, count: state.count + 1 })}>
        count++
      </Button>
      <Button
        style={{ marginLeft: 8 }}
        type="primary"
        onClick={() => setState({ ...state, title: Math.random() })}
      >
        change title
      </Button>
      <Divider orientation="left">
        <h2>useCallback props.fn</h2>
      </Divider>
      <h3>父组件: {title}</h3>
      <Child1 onClick={useCallback(() => setTitle(Math.random()), [])} name="test" />
      <Divider orientation="left">
        <h2>useMemo</h2>
      </Divider>
      <MemoTest />
    </div>
  );
}
