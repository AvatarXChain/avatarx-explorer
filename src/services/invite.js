import { request } from '../api/api';

export const fetchList = params => {
  return request({
    method: 'get',
    url: `user/invite?per_page=${params.perPage}&current_page=${params.currentPage}`,
  });
}

export const fetchImage = params => {
  return request({
    method: 'get',
    url: 'user/invite_image',
  });
}
