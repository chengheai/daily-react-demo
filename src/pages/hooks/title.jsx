import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
export default () => {
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `clicked ${count}`;
  });
  return (
    <React.Fragment>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </React.Fragment>
  );
};
