import React, { memo } from 'react';
import { Button } from 'antd';
function Child(props) {
  console.log('child1 render');
  return (
    <div>
      {props.name}
      <Button onClick={props.onClick}>change</Button>
    </div>
  );
}
export default memo(Child);
