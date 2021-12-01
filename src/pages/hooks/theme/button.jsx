import React, { useContext } from 'react';
import { Button } from 'antd';
import { ThemeContext } from './theme';
const ButtonGroup = Button.Group;
function Buttons() {
  const { dispatch } = useContext(ThemeContext);
  return (
    <ButtonGroup>
      <Button type="primary" onClick={() => dispatch({ type: 'CHANGE_COLOR', color: 'red' })}>
        红色
      </Button>
      <Button type="primary" onClick={() => dispatch({ type: 'CHANGE_COLOR', color: 'blue' })}>
        蓝色
      </Button>
    </ButtonGroup>
  );
}
export default Buttons;
