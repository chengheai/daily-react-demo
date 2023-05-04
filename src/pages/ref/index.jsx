import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';

const Son = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  useImperativeHandle(
    ref,
    () => {
      const handleRefs = {
        onFocus() {
          inputRef.current.focus();
        },
        onChangeValue(value) {
          setInputValue(value);
        },
      };
      return handleRefs;
    },
    [],
  );
  return (
    <>
      <input
        placeholder="请输入内容"
        ref={inputRef}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </>
  );
});

export default class Index extends React.PureComponent {
  cur = null;
  handleClick() {
    const { onFocus, onChangeValue } = this.cur;
    onFocus();
    onChangeValue('let us learn react');
  }
  render() {
    return (
      <div className="common-wrap">
        <Son ref={cur => (this.cur = cur)} />
        <button onClick={() => this.handleClick()}>操控子组件</button>
      </div>
    );
  }
}
