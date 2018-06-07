
export default {
  namespace: 'index',
  state: {
  },
  reducers: {
  },
  effects: {
  },
  subscriptions: {
    indexSubscriber({ dispatch, history }) {
      const fetchBlockList = (limit = 20, offset = 0) => {
        dispatch({
          type: 'blocks/fetchBlockList',
          payload: {
            limit: 20,
            offset: 0,
          }
        })
      }

      const fetchTransactionList = (limit = 20, offset = 0) => {
        dispatch({
          type: 'transactions/fetchTransactionList',
          payload: {
            limit: 20,
            offset: 0,
          }
        })
      }

      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          fetchBlockList();
          fetchTransactionList();
        }
      });
    },
  },
};
