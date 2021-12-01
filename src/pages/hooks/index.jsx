import React from 'react';
import { Divider } from 'antd';
import TodoList from './todoList';
import Counter from './counter';
import Title from './title';
import Theme from './theme';
import Memo from './memo';

export default function() {
  return (
    <div className="common-wrap">
      <Divider orientation="left">change title</Divider>
      <Title />
      <Divider orientation="left">TODO LIST</Divider>
      <TodoList />
      <Divider orientation="left">Reducer count</Divider>
      <Counter />
      <Divider orientation="left">useContext</Divider>
      <Theme />
      <Divider orientation="left">useMemo</Divider>
      <Memo />
    </div>
  );
}
