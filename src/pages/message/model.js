import { queryDog } from '../../services/message';

export default {
  namespace: 'message',
  state: {
    list: [],
    isLoading: true,
  },

  effects: {
    *fetchDogs({ payload, callback }, { call, put }) {
      yield put({ type: 'showLoading' });
      const data = yield call(queryDog, payload);
      const { message } = data.data;
      let result = [];
      if (data.data.status === 'success') {
        result = message.map(item => {
          return {
            url: item,
            name: item.substring(item.lastIndexOf('/') + 1),
            category: item,
          };
        });
        yield put({
          type: 'changeList',
          payload: {
            list: result,
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
