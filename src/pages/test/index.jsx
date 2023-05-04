import React from 'react';

export default function Index() {
  const [number, setNumber] = React.useState(0);

  return (
    <div className="common-wrap white">
      <span> {number}</span>
      <button onClick={() => setNumber(number => number + 1)}>number++</button>
    </div>
  );
}
