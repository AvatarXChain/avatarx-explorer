import * as smsService from '../services/sms';

export default {

  namespace: 'sms',

  state: {
    smsCode: {
      code: null,
      data: null,
      message: null,
    },
  },

  reducers: {
    saveSMSCode(state, { payload: smsCode }) {
      return { ...state, smsCode };
    },
  },

  effects: {
    *fetch({ payload: params }, { call, put }) {
      const { code, data, message } = yield call(smsService.fetch, params);
      yield put({
        type: 'saveSMSCode',
        payload: { code, data, message }
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
};
