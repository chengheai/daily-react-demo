import React from 'react';
import ReactDOM from 'react-dom';
export default function Index(props) {
  const [number, setNumber] = React.useState(0);
  /* 监听 number 变化 */
  React.useEffect(() => {
    console.log('监听number变化，此时的number是:  ' + number);
  }, [number]);
  const handleClick = () => {
    setNumber(11); // 前面的set会覆盖
    /** 高优先级更新 **/
    ReactDOM.flushSync(() => {
      setNumber(2);
    });
    /* 批量更新 */
    setNumber(1);
    /* 滞后更新 ，批量更新规则被打破 */
    setTimeout(() => {
      setNumber(3);
    });
  };
  console.log(number);
  return (
    <div className="common-wrap white">
      <span> {number}</span>
      <button onClick={handleClick}>number++</button>
    </div>
  );
}
