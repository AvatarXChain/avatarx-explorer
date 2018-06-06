import { request } from '../../../api/api';

export const fetchTransactionList = params => {
  return request({
    method: 'get',
    url: `transactions?limit=${params.limit}&orderBy=height:desc&offset=${params.offset}`,
  });
}