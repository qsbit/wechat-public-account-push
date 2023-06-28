/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 请将以下代码按照图示粘贴到对应位置'push-deer', 'wechat-test', 'server-chan',
  USE_PASSAGE: 'push-deer',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx742f3f09b9d42918',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '871bf922fa926b4c951e0e6c87fce944',

  // 推送的天气城市
  PROVINCE: '浙江',
  CITY: '杭州',

  // 天行推送的key
  TIAN_API: {
    key: 'bbc78aafa9a597171129acdd9e28fbc1'
  },

  USERS: [
    // =============发给她的（早上好--[push-deer]）=============
    {
      // 想要发送的人的名字
      name: '阿yuan~',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU23232T1Y0sah3ENnb0aquLGx0ywQ2wugdGeoJo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '姐姐', year: '1996', date: '05-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '姐姐', year: '1996', date: '07-08',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-11' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    // =============我看到发给他的（早上好--[push-deer]）=============
    {
      // 想要发送的人的名字
      name: '我',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU23225TkUX3kttnno0Q1wktSp8wE2QELkXeMJK7',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '姐姐', year: '1996', date: '05-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '姐姐', year: '1996', date: '07-08',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-11' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0000',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU23225TkUX3kttnno0Q1wktSp8wE2QELkXeMJK7',
    }
  ],

}

module.exports = USER_CONFIG

