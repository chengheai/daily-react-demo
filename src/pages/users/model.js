import { queryData } from '../../services/user';

export default {
  namespace: 'user',
  state: {
    example: 'example',
    arr: [],
  },

  effects: {
    *getData({ payload, callback }, { call, put }) {
      const data = yield call(queryData, payload);
      if (data.data.status === 'success') {
        callback(data.data.list);
      }
    },
  },
  reducers: {},
};
