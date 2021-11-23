import { queryDog } from '../../services/message';

export default {
  namespace: 'message',
  state: {
    list: [],
  },

  effects: {
    *fetchDogs({ payload, callback }, { call, put }) {
      const data = yield call(queryDog, payload);
      console.log('data: ', data);
      callback(data.data.message);
      // if (data) {
      //   yield put({
      //     type: 'changeList',
      //     payload: {
      //       list: data.data.message,
      //     },
      //   });
      // }
    },
  },
  reducers: {
    changeList(state, action) {
      return { ...state, ...action.payload, ...action.list };
    },
  },
};
