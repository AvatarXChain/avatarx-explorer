import * as wechatService from '../services/wechat';

export default {

  namespace: 'wechat',

  state: {
    authURL: {
      code: 0,
      data: '',
      message: '',
    },
    authUser: {
      code: 0,
      data: '',
      message: '',
    },
    jsConfig: {
      code: 0,
      data: '',
      message: '',
    }
  },

  reducers: {
    saveAuthURL(state, { payload: authURL }) {
      return { ...state, authURL };
    },
    saveAuthUser(state, { payload: authUser }) {
      return { ...state, authUser };
    },
    saveJSConfig(state, { payload: jsConfig }) {
      return { ...state, jsConfig };
    }
  },

  effects: {
    *fetchAuthURL({ payload: params }, { call, put }) {
      const { code, data, message } = yield call(wechatService.fetchAuthURL, params);
      yield put({
        type: 'saveAuthURL',
        payload: { code, data, message }
      })
    },
    *fetchAuthUser({ payload: params }, { call, put }) {
      const { code, data, message } = yield call(wechatService.fetchUser, params);

      yield put({
        type: 'saveAuthUser',
        payload: { code, data, message }
      });

      // const { code, data, message } = yield call(wechatService.fetchAccessToken, params);
      // if (code === 1) {
      //   yield put({
      //     type: 'saveAccessToken',
      //     payload: { code, data, message }
      //   })
      //   const user = yield call(wechatService.fetchUser, params);
      //   yield put({
      //     type: 'saveAuthUser',
      //     payload: user
      //   })
      // }
    },
    *fetchJSConfig({ payload: params }, { call, put }) {
      const { code, data, message } = yield call(wechatService.fetchJSConfig, params);
      yield put({
        type: 'saveJSConfig',
        payload: { code, data, message }
      });
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
};
