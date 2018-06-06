import { request } from '../api/api';

export const fetch = params => {
  return request({
    method: 'get',
    url: 'wechat/index',
  });
}

export const fetchAuthURL = params => {
  return request({
    method: 'get',
    url: `wechat/auth_url?redirect=${params.redirect}`,
  });
}

// export const fetchAccessToken = params => {
//   return request({
//     method: 'get',
//     url: `wechat/access_token?code=${params.code}`,
//   });
// }

export const fetchUser = params => {
  return request({
    method: 'get',
    url: `wechat/auth_user?code=${params.code}`,
  });
}

export const fetchJSConfig = params => {
  return request({
    method: 'get',
    url: `wechat/jsconfig?url=${params.url}`,
  });
}
