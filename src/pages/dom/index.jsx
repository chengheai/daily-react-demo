import React from 'react';

import { Divider } from 'antd';
export default function Index() {
  const handleClick = () => {
    console.log('模拟冒泡阶段执行');
  };
  const handleClickCapture = () => {
    console.log('模拟捕获阶段执行');
  };
  const stopClick = e => {
    console.log('e: ', e);
    e.stopPropagation();
    console.log('stopClick');
  };

  return (
    <div className="common-wrap">
      <button onClick={handleClick} onClickCapture={handleClickCapture}>
        click
      </button>
      <Divider orientation="left">阻止冒泡</Divider>
      <div
        onClick={() => {
          console.log('feather');
        }}
      >
        <div onClick={stopClick}>click</div>
      </div>
    </div>
  );
}
