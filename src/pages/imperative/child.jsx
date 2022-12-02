import { useEffect, useState, forwardRef, useImperativeHandle, useCallback } from 'react';
import { Select } from 'antd';
import { generateRange, waitTime } from '@/utils';
const { Option } = Select;
const data = generateRange(10).map(i => {
  return {
    value: i,
    label: `选项${i}`,
  };
});

export default forwardRef((props, ref) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setFinish } = props;
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line no-use-before-define
  }, [fetchData, setFinish]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = useCallback(async () => {
    console.log('fetch.....');
    setList([]);
    setLoading(true);
    setFinish(false);

    await waitTime(3000);

    setList(data);
    setLoading(false);
    setFinish(true);
  });
  const test = () => {
    console.log('test');
  };

  useImperativeHandle(ref, () => ({
    test: () => test,
    fetchData,
    list,
  }));
  return (
    <Select placeholder="请选择" style={{ width: 240 }} loading={loading}>
      {list.map(item => (
        <Option key={item.value}>{item.label}</Option>
      ))}
    </Select>
  );
});
