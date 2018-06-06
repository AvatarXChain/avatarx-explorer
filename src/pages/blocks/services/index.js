import { request } from '../../../api/api';

export const fetchBlockList = params => {
  return request({
    method: 'get',
    url: `blocks?limit=${params.limit}&orderBy=height:desc&offset=${params.offset}`,
  });
}
