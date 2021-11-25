const Mock = require('mockjs');

export default {
  'GET /mock/api/users': Mock.mock({
    status: 'success',
    'list|100-200': [
      {
        id: '@id', //随机id
        name: '@cname', //随机名称
        nickName: '@clast', // 随机昵称
        phone: /^1[34578]\d{9}$/, //随机电话号码
        'level|1-5': 1, //等级
        address: '@county(true)', //随机地址
        email: '@email', //随机邮箱
        'sex|0-2': 2, //随机性别
        createTime: '@datetime', //创建时间
        info() {
          return Mock.Random.cparagraph();
        }, // 说明
        avatar() {
          //用户头像
          return Mock.Random.image('100×100', Mock.Random.color(), '#FFF', this.nickName).replace(
            '×',
            'x',
          );
        },
      },
    ],
  }),
};
