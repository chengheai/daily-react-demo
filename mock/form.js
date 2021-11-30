const Mock = require('mockjs');

export default {
  'GET /mock/api/detail': Mock.mock({
    status: 'success',
    'list|10': {
      id: '1', //随机id
      nickname: '@clast', // 随机昵称
      password: '88888888',
      confirm: '88888888',
      phone: /^1[34578]\d{9}$/, //随机电话号码
      captcha() {
        return Mock.mock('@word(5)');
      },
      website: '@url',
      'agreement|1-2': true,
      email: '@email', //随机邮箱
      createTime: '@datetime', //创建时间
    },
  }),
};
