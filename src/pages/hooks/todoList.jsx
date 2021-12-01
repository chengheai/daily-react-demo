import React, { useState } from 'react';

import { message, Row, Col, Button, List, Input, Popconfirm, Icon } from 'antd';
export default function TodoList() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([{ text: 'hook' }, { text: 'react' }, { text: 'vue' }]);

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

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
