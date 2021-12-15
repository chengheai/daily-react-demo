import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const Render = () => {
  const [temp, setTemp] = useState(5);
  const [count, setCount] = useState(0);
  const log = () => {
    setTimeout(() => {
      console.log('3 秒前 temp = 5，现在 temp =', temp);
    }, 3000);
  };
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <React.Fragment>
      <div className="common-wrap">
        <p>{temp}</p>
        <Button
          type="primary"
          onClick={() => {
            log();
            setTemp(3);
          }}
        >
          点击测试
        </Button>
        <Button className="ml10" type="primary">
          {count}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Render;
