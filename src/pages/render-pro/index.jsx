import React from 'react';

const Child = ({ number }) => {
  console.log('子组件render');
  return <div> child {number} </div>;
};
export default function Index() {
  const [numberA, setNumberA] = React.useState(0);
  const [numberB, setNumberB] = React.useState(0);

  return (
    <div className="common-wrap white">
      {React.useMemo(
        () => (
          <Child number={numberA} />
        ),
        [numberA],
      )}
      <span> numberA:{numberA}</span>
      <span> numberB:{numberB}</span>
      <button onClick={() => setNumberA(number => number + 1)}>numberA++</button>
      <button onClick={() => setNumberB(number => number + 1)}>numberB++</button>
    </div>
  );
}
