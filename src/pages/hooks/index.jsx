import React, { useState, useEffect, useReducer } from 'react';
import { Button, Divider, Input, List, Row, Col, Icon, Popconfirm, message } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
export default function() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([{ text: 'hook' }, { text: 'react' }, { text: 'vue' }]);
  const handleFruit = props => {
    setFruit(props);
  };
  const handleDelete = index => {
    todo.splice(index, 1);
    setTodo([...todo]);
    message.success('Delete ok');
  };
  const handleAdd = text => {
    if (text === '') {
      message.error('请输入todo');
      return;
    }
    setTodo([...todo, { text }]);
    setInput('');
    message.success('Add ok');
  };
  function cancel(e) {
    console.log(e);
    message.error('Cancel Delete');
  }
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `clicked ${count}`;
  });
  //
  function init(initialCount) {
    return { count: initialCount };
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return init(action.payload);
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, 0, init);
  return (
    <div className="common-wrap">
      <Divider orientation="left">change title</Divider>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <Divider orientation="left">fruit</Divider>
      <p>{fruit}</p>
      <Input value={fruit} onInput={e => handleFruit(e.target.value)} />

      <Divider orientation="left">TODO LIST</Divider>
      <Row gutter={[16, 16]} style={{ marginBottom: 10 }}>
        <Col span={6}>
          <Input value={input} placeholder="请输入todo" onInput={e => setInput(e.target.value)} />
        </Col>
        <Col span={6}>
          <Button type="primary" onClick={() => handleAdd(input)}>
            add
          </Button>
        </Col>
      </Row>
      <List
        size="small"
        bordered
        dataSource={todo}
        renderItem={(item, idx) => (
          <List.Item
            actions={[
              <Popconfirm
                title="Are you sure delete this task?"
                onConfirm={() => handleDelete(idx)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="link" key="delete">
                  <Icon type="delete" />
                  Delete
                </Button>
              </Popconfirm>,
            ]}
          >
            {item.text}
          </List.Item>
        )}
      />
      <Divider orientation="left">Reducer count</Divider>
      <>
        <h3>Count: {state.count}</h3>
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
    </div>
  );
}
