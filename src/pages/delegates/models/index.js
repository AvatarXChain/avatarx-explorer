
import * as delegatesService from '../services/index';

export default {
  namespace: 'delegates',
  state: {
    delegatesList: null,
  },
  reducers: {
    saveDelegatesList(state, { payload: delegatesList }) {
      return { ...state, delegatesList };
    },
  },
  effects: {
    *fetchDelegatesList({ payload: params }, { call, put }) {
      const result = yield call(delegatesService.fetchDelegates, params);
      yield put({
        type: 'saveDelegatesList',
        payload: result
      })
    },
  },
  subscriptions: {
    indexSubscriber({ dispatch, history }) {
      const fetchDelegatesList = (limit = 20, offset = 0) => {
        dispatch({
          type: 'fetchDelegatesList',
          payload: {
            limit: 101,
            offset: 0,
          }
        });
      }

      return history.listen(({ pathname, query }) => {
        if (pathname === '/delegates') {
          fetchDelegatesList();
        }
      });
    },
  },
};
