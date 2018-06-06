import axios from "./config";

export const VERSION = 'v3';

export const request = options => {
  const { method = 'get', url, params } = options;

  let result = null;

  if (!url) {
    return;
  }

  switch (method) {
    case 'get':
      result = axios.get(url, params).then(res => res.data).catch(err => err);
      break;
    case 'post':
      result = axios.post(url, params).then(res => res.data).catch(err => err);
      break;
    case 'put':
      result = axios.put(url, params).then(res => res.data).catch(err => err);
      break;
    case 'delete':
      result = axios.delete(url, params).then(res => res.data).catch(err => err);
      break;
    default:
  }
  return result;
};
