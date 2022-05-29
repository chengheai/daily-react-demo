import { useState, useEffect, useRef } from 'react';
import Child from './child';
import { List, Avatar, Button } from 'antd';
export default () => {
  const childRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    console.log(childRef.current);
    childRef.current?.list.length && setLoading(false);
  }, [finish]);
  const handleChange = () => {
    // console.log('handleChange', childRef.current);
    childRef.current.list = [];
    setLoading(true);
    childRef.current.fetchData();
  };
  return (
    <div className="common-wrap">
      <Child ref={childRef} setFinish={setFinish} />
      <Button type="primary" style={{ marginLeft: 8 }} loading={loading} onClick={handleChange}>
        {loading ? 'reloading' : 'reloaded'}
      </Button>
      <List
        loading={loading}
        style={{ width: 500 }}
        itemLayout="horizontal"
        dataSource={childRef.current?.list || []}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.label}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      ,
    </div>
  );
};
