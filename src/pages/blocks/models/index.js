import pathToRegexp from 'path-to-regexp';
import * as blocksService from '../services/index';

export default {
  namespace: 'blocks',
  state: {
    blockList: null,
    blockItem: null,
  },
  reducers: {
    saveBlockList(state, { payload: blockList }) {
      return { ...state, blockList };
    },
    saveBlockItem(state, { payload: blockItem }) {
      return { ...state, blockItem };
    },
  },
  effects: {
    *fetchBlockList({ payload: params }, { call, put }) {
      const result = yield call(blocksService.fetchBlockList, params);
      yield put({
        type: 'saveBlockList',
        payload: result
      })
    },
    *fetchBlockItem({ payload: params }, { call, put }) {
      console.log(params)
      const result = yield call(blocksService.fetchBlockItem, params);
      yield put({
        type: 'saveBlockItem',
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
    itemSubscriber({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/blocks/:itemId').exec(pathname);
        if (match) {
          const itemId = match[1];
          dispatch({
            type: 'fetchBlockItem',
            payload: {
              id: itemId
            },
          });
        }
      });
    },
  },
};
