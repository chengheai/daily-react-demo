import React, { useMemo, useState } from 'react';
import { Radio } from 'antd';
let count = 0;
let count1 = 0;
function Child({ name, children }) {
  // console.log('children: ', children)

  const [type, setType] = useState('normal');
  const clickTip = name => {
    count++;
    return name;
  };
  const clickTip1 = name => {
    count1++;
    return name;
  };
  const onChange = e => {
    setType(e.target.value);
    count1 = 0;
    count = 0;
  };
  const text = clickTip(name);
  const text1 = useMemo(() => clickTip1(name), [name]);
  return (
    <React.Fragment>
      <Radio.Group onChange={onChange} value={type}>
        <Radio value={'normal'}>normal</Radio>
        <Radio value={'useMemo'}>useMemo</Radio>
      </Radio.Group>
      {type === 'normal' ? (
        <h2>
          {text}
          &nbsp;==={'>'} 全部更新{count}
        </h2>
      ) : (
        <h2>
          {text1}&nbsp;==={'>'} 按需更新{count1}
        </h2>
      )}

      <h2>{children}</h2>
    </React.Fragment>
  );
}

export default Child;
