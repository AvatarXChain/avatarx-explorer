
import * as transactionService from '../services/index';

export default {
  namespace: 'transactions',
  state: {
    transactionList: null,
  },
  reducers: {
    saveTransactionList(state, { payload: transactionList }) {
      return { ...state, transactionList };
    },
  },
  effects: {
    *fetchTransactionList({ payload: params }, { call, put }) {
      const result = yield call(transactionService.fetchTransactionList, params);
      yield put({
        type: 'saveTransactionList',
        payload: result
      })
    },
  },
  subscriptions: {
    inviteSubscriber({ dispatch, history }) {
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
          // fetchTransactionList();
        }
      });
    },
  },
};
