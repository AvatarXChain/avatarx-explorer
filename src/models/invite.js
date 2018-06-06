import * as inviteService from '../services/invite';

export default {

  namespace: 'invite',

  state: {
    inviteList: {
      code: 0,
      data: null,
      pagination: null,
      message: null,
    },
    inviteImage: {
      code: 0,
      data: null,
      message: null,
    },
  },

  reducers: {
    saveInviteList(state, { payload: inviteList }) {
      return { ...state, inviteList };
    },
    saveInviteImage(state, { payload: inviteImage }) {
      return { ...state, inviteImage };
    },
  },

  effects: {
    *fetchList({ payload: params }, { call, put }) {
      const { code, data, pagination, message } = yield call(inviteService.fetchList, params);
      yield put({
        type: 'saveInviteList',
        payload: { code, data, pagination, message }
      })
    },
    *fetchImage({ payload: params }, { call, put }) {
      const { code, data, message } = yield call(inviteService.fetchImage, params);
      yield put({
        type: 'saveInviteImage',
        payload: { code, data, message }
      })
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
};
