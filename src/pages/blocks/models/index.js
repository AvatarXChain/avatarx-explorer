
import * as indexService from '../services/index';

export default {
  namespace: 'blocks',
  state: {
    blockList: null,
    transactionList: null,
  },
  reducers: {
    saveBlockList(state, { payload: blockList }) {
      return { ...state, blockList };
    },
    saveTransactionList(state, { payload: transactionList }) {
      return { ...state, transactionList };
    },
  },
  effects: {
    *fetchBlockList({ payload: params }, { call, put }) {
      const result = yield call(indexService.fetchBlockList, params);
      yield put({
        type: 'saveBlockList',
        payload: result
      })
    },
    *fetchTransactionList({ payload: params }, { call, put }) {
      const result = yield call(indexService.fetchTransactionList, params);
      yield put({
        type: 'saveTransactionList',
        payload: result
      })
    },
  },
  subscriptions: {
    inviteSubscriber({ dispatch, history }) {
      // const fetchBlockList = (limit = 20, offset = 0) => {
      //   dispatch({
      //     type: 'fetchBlockList',
      //     payload: {
      //       limit: 20,
      //       offset: 0,
      //     }
      //   })
      // }

      // const fetchTransactionList = (limit = 20, offset = 0) => {
      //   dispatch({
      //     type: 'fetchTransactionList',
      //     payload: {
      //       limit: 20,
      //       offset: 0,
      //     }
      //   })
      // }

      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          // fetchBlockList();
          // fetchTransactionList();
        }
      });
    },
  },
};
