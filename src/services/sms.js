import { request } from '../api/api';

export const fetch = params => {
  return request({
    method: 'get',
    url: `sms/send/${params.mobile}`,
  });
}

export const check = params => {
  return request({
    method: 'get',
    url: `sms/check/${params.mobile}/${params.code}`,
    params
  });
}
