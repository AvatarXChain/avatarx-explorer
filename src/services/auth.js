import { request } from '../api/api';

export const loginWechat = params => {
  return request({
    method: 'post',
    url: 'user/login/wechat',
    params
  });
};

export const checkAuth = params => {
  const accessToken = localStorage.getItem('kpc_access_token')
  // @TODO 服务端验证获取用户信息
  return accessToken
}

export const signOut = params => {
  localStorage.removeItem('kpc_access_token');
  return null;
}
