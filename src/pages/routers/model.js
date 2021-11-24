const loadData = () => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      UserName: `Edward King ${i}`,
      Telephone: `18825020001`,
      Live: 'Shanghai Pudong',
      Remark: `Remark${i}`,
      Address: `No. ${i}, Wantang Road, Pudong, Shanghai, China`,
    });
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
};
export default {
  namespace: 'routing',
  state: {
    list: [],
    isLoading: true,
  },

  effects: {
    *fetchTableData({ payload, callback }, { call, put }) {
      yield put({ type: 'showLoading' });
      const data = yield call(loadData, payload);
      console.log('=====加载数据了');
      if (data.length > 0) {
        yield put({
          type: 'changeList',
          payload: {
            list: data,
          },
        });
      }
    },
  },
  reducers: {
    changeList(state, action) {
      return { ...state, ...action.payload, ...action.list, isLoading: false };
    },
    showLoading(state, action) {
      return { ...state, isLoading: true };
    },
  },
};
