import { request } from '../../../api/api';

export const fetchDelegates = params => {
  return request({
    method: 'get',
    url: `delegates?limit=${params.limit}&offset=${params.offset}`,
  });
}
