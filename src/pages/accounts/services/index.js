import { request } from '../../../api/api';

export const fetchAccountsTop = params => {
  return request({
    method: 'get',
    url: `accounts/top?limit=${params.limit}&offset=${params.offset}`,
  });
}

export const fetchAccountsItem = params => {
  return request({
    method: 'get',
    url: `accounts?address=${params.address}`,
  });
}
