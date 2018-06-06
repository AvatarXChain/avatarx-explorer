import { request } from '../../../api/api';

export const fetchBlockList = params => {
  return request({
    method: 'get',
    url: `blocks?limit=${params.limit}&orderBy=height:desc&offset=${params.offset}`,
  });
}

export const fetchBlockItem = params => {
  return request({
    method: 'get',
    url: `blocks/get?id=${params.id}`,
  });
}
