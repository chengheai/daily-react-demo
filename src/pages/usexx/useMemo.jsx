import React, { useState, useMemo } from 'react';
import { Button } from 'antd';
export default function MemoTest() {
  const [count, setCount] = useState(0);
  const expensiveFn = () => {
    let result = 0;

    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    console.log('重新计算 result:', result);
    return result;
  };
  const memoizedValue = useMemo(expensiveFn, []);
  return (
    <div>
      <h2>{count}</h2>
      <Button type="primary" onClick={() => setCount(count + memoizedValue)}>
        count++
      </Button>
    </div>
  );
}
