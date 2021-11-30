import { queryData } from '../../services/form';

export default {
  namespace: 'form',
  state: {
    example: 'form',
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
