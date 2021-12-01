import { Button } from 'antd';
import React, { useState } from 'react';
import Child from './child';
const ButtonGroup = Button.Group;
export default () => {
  const [btn1, setBtn1] = useState('btn1等待状态');
  const [btn2, setBtn2] = useState('btn2等待状态');
  return (
    <React.Fragment>
      <Child name={btn1}>{btn2}</Child>
      <ButtonGroup>
        <Button onClick={() => setBtn1(new Date().getTime() + ' btn1')}>按钮1</Button>
        <Button onClick={() => setBtn2(new Date().getTime() + ' btn2')}>按钮2</Button>
      </ButtonGroup>
    </React.Fragment>
  );
};
