import pathToRegexp from 'path-to-regexp';
import * as accountsService from '../services/index';

export default {
  namespace: 'accounts',
  state: {
    accountsTop: null,
    accountsItem: null,
  },
  reducers: {
    saveAccountsTop(state, { payload: accountsTop }) {
      return { ...state, accountsTop };
    },
    saveAccountsItem(state, { payload: accountsItem }) {
      return { ...state, accountsItem };
    },
  },
  effects: {
    *fetchAccountsTop({ payload: params }, { call, put }) {
      const result = yield call(accountsService.fetchAccountsTop, params);
      yield put({
        type: 'saveAccountsTop',
        payload: result
      })
    },
    *fetchAccountsItem({ payload: params }, { call, put }) {
      const result = yield call(accountsService.fetchAccountsItem, params);
      yield put({
        type: 'saveAccountsItem',
        payload: result
      })
    },
  },
  subscriptions: {
    indexSubscriber({ dispatch, history }) {
      const fetchAccountsTop = (limit = 20, offset = 0) => {
        dispatch({
          type: 'fetchAccountsTop',
          payload: {
            limit: 20,
            offset: 0,
          }
        });
      }

      return history.listen(({ pathname, query }) => {
        if (pathname === '/accounts') {
          fetchAccountsTop();
        }
      });
    },
    itemSubscriber({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/accounts/:itemId').exec(pathname);
        if (match) {
          const address = match[1];
          dispatch({
            type: 'fetchAccountsItem',
            payload: {
              address
            },
          });
        }
      });
    },
  },
};
