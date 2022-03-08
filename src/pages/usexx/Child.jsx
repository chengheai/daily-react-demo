import React, { memo } from 'react';

function Child(props) {
  console.log('child render');
  return <div>{props.count}</div>;
}
export default memo(Child);
