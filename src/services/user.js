import request from '../utils/mock-http';

export function queryData() {
  return request('mock/api/users', {
    method: 'get',
  });
}
