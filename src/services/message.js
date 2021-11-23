import request from '../utils/http';

export function queryDog() {
  // api.stack021.cn/api/wall/list
  return request('api/breed/hound/images/random/3', {
    method: 'get',
  });
}
