/* eslint-disable */
const TEMPLATE_CONFIG = [
  // 推送结果提醒通知模板
  {
    id: '0000',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
  // 推送早安模板
  {
    id: '0001',
    title: '亲爱的姐姐, 早上好呀~🌅',
    desc: `
    
      🗓️今天是**{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{tian_api_weather_weather_0.DATA}}
      
      气温🌡️(最低/最高):{{tian_api_weather_lowest_0.DATA}} / {{tian_api_weather_highest_0.DATA}}
      
      风向: {{tian_api_weather_wind_0.DATA}} {{tian_api_weather_windsc_0.DATA}}

      紫外线强度: {{tian_api_weather_uv_index_0.DATA}}

      温馨提示🔔：{{tian_api_weather_tips_0.DATA}}
      
      {{comprehensive_horoscope.DATA}}

      {{constellation_fortune.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天💗

      {{earthy_love_words.DATA}}
      
      {{birthday_message.DATA}}
      
      ---

      每日一言：{{one_talk.DATA}}

    `
  },
]

module.exports = TEMPLATE_CONFIG