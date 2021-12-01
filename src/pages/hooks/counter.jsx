import React, { useReducer } from 'react';
import { Button } from 'antd';
const ButtonGroup = Button.Group;
export default function Counter() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return 0;
      default:
        return state;
    }
  }, 0);
  return (
    <>
      <h3>Count: {count}</h3>
      <ButtonGroup>
        <Button type="primary" onClick={() => dispatch({ type: 'decrement' })}>
          -
        </Button>
        <Button type="primary" onClick={() => dispatch({ type: 'reset', payload: 0 })}>
          Reset
        </Button>
        <Button type="primary" onClick={() => dispatch({ type: 'increment' })}>
          +
        </Button>
      </ButtonGroup>
    </>
  );
}
