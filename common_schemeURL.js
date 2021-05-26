var common = {};

// 设置：prefs:root=SETTING

// 触宝拨号：dialer://
// 蜂窝网络：prefs:root=MOBILE_DATA_SETTINGS_ID 
// WIFI：prefs:root=WIFI（WIFI这几个字母一定要大写） 
// 定位服务：prefs:root=LOCATION_SERVICES 
// 微信 :weixin://
// 备忘录：mobilenotes://
// 百度贴吧:tencent100385258://
// 高德地图：iosamap://
// 今日头条 snssdk141://
// 挖财记账 wacai://
// QQ音乐 :QQmusic://
// 百度音乐:baidumusic://
// 猎豹浏览器:sinaweibosso.422729959://
// UC浏览器:ucbrowser://
// 百度云:baiduyun://
// 淘宝网:taobao://
// 支付宝:alipay://
// 新浪微博:weibo://
// 优酷:youku://
// 百度地图:baidumap://
// QQ:mqq://
// QQ浏览器:qq browser://
// 节奏大师:节奏大师tencentrm://
// 刀塔传奇:刀塔传奇teiron2273://
// 天天动听:ttpod://
// 淘宝taobao:// 
// 点评dianping:// dianping://search 
// 名片全能王camcard:// 
// 支付宝alipay:// 
// 豆瓣fm：doubanradio:// 
// 微盘 sinavdisk:// 
// 网易公开课ntesopen://
// 美团 i**:// 
// 京冬openapp.jdmoble:// 
// 人人renren:// 
// 我查查 wcc:// 
// 1号店wccbyihaodian:// 
// 有道词典yddictproapp:// 
// 知乎zhihu://
// 墨客 com.moke.moke-1://
// 名片全能王 camcard://
// 扫描全能王 camscanner://
// TuneIn Radio tunein:// 或 tuneinpro://
// OfficeSuite mobisystemsofficesuite://
// WPS Office KingsoftOfficeApp://
// Line line://
// 1Password onepassword://
// Clear(著名的Todo应用) clearapp://
// Chrome谷歌浏览器 googlechrome://
// Calendars 5 calendars://
// GoodReader 4 com.goodreader.sendtogr://
// PDF Expert 5 pdfexpert5presence://
// Documents 5 rdocs://
// nPlayer nplayer-http://
// GPlayer gplayer://
// AVPlayer HD AVPlayerHD://
// AVPlayer AVPlayer://
// Ace Player aceplayer://
// 12306订票助手 trainassist://
// 金山词霸 com.kingsoft.powerword.6://
// 节奏大师 tencentrm://
// 赶集生活 **://
// 凤凰新闻 comIfeng3GifengNews://
// 高铁管家 gtgj://
// 飞信 fetion://
// 豆瓣FM doubanradio://
// 大智慧 dzhiphone://
// 布卡漫画 buka://
// 爱奇艺PPS ppstream://
// 哔哩哔哩动画 bilibili://
// 56视频 com.56Video://
// 365日历 rili365://
// 58同城 wbmain://
// 遇见 iaround://
// 陌陌 momochat://
// 旺旺卖家版 wangwangseller://
// 有道词典 yddict://
// 掌阅iReader iReader://
// 艺龙旅行 elongIPhone://
// 迅雷+迅雷云播 thunder://
// 熊猫公交 wb1405365637://
// 携程无线 CtripWireless://
// 无线苏州 SuZhouTV://
// 唯品会 vipshop://
// 微视 weishiiosscheme://
// 微拍 wpweipai://
// 旺信 wangxin://
// 网易公开课 ntesopen://
// 网易将军令 netease-mkey://
// 万年历 youloft.419805549://
// 土豆视频 tudou://
// 同花顺 amihexin://
// 天涯社区 tianya://
// 天气通Pro sinaweatherpro://
// 天气通 sinaweather://
// 墨迹天气 rm434209233MojiWeather://
// 腾讯新闻 qqnews://
// 腾讯微云 weiyun://
// 腾讯地图 sosomap://
// 淘宝旅行 taobaotravel://
// 人人 renrenios://
// 蜻蜓FM qtfmp://
// 浦发银行 wx1cb534bb13ba3dbd://
// 招商银行 cmbmobilebank://
// 支付宝 alipay://
// 建设银行 wx2654d9155d70a468://
// 工商银行 com.icbc.iphoneclient://
// 酷我音乐 com.kuwo.kwmusic.kwmusicForKwsing://
// 酷狗音乐 kugouURL://
// 京东 openApp.jdMobile://
// QQ音乐 qqmusic://
// QQ斗地主 tencent382://
// QQ浏览器 mttbrowser://
// QQ安全中心 qmtoken://
// QQ国际版 mqqiapi://
// PPTV pptv://
// 爱奇艺视频 qiyi-iphone://
// 暴风影音 com.baofeng.play://
// 保卫萝卜2 wb2217954495://
// 保卫萝卜 wb1308702128://
// 百度音乐 baidumusic://
// 百度视频 baiduvideoiphone:// 或 bdviphapp://
// 百度糯米 bainuo://
// 百度魔图 photowonder://
// 百度魔拍 wondercamera://
// 百度地图 baidumap://
// 百度导航 bdNavi://
// 百度 baiduboxapp:// 或 BaiduSSO://
// 搜狗输入法 com.sogou.sogouinput://
// 搜狐视频 sohuvideo-iphone:// 或 sohuvideo://
// 搜狐新闻 sohunews://
// 随手记 FDMoney://
// 腾讯企业邮箱 qqbizmailDistribute2://
// 腾讯手机管家 mqqsecure://
// 腾讯视频 tenvideo:// 或 tenvideo2:// 或 tenvideo3://
// 腾讯微博 TencentWeibo://
// 天猫 tmall://
// 天天星连萌 tencent100689806://
// 天天爱消除 tencent100689805://
// 天天酷跑 tencent100692648://
// 天天飞车 tencent100695850://
// 天天动听 ttpod://
// 威锋网 com.weiphone.forum://
// 新浪微博 weibo:// 或 sinaweibo://
// 网易邮箱 neteasemail://
// 百度输入法 BaiduIMShop://
// UC浏览器 ucbrowser://
// E-Mail MESSAGE://

common.抖音 = function(){

    // home: "snssdk1128://feed?refer=web&gd_label={{gd_label}}",
    // detail: "snssdk1128://aweme/detail/{{id}}?refer=web&gd_label={{gd_label}}&appParam={{appParam}}&needlaunchlog=1",
    // user: "snssdk1128://user/profile/{{uid}}?refer=web&gd_label={{gd_label}}&type={{type}}&needlaunchlog=1",
    // challenge: "snssdk1128://challenge/detail/{{id}}?refer=web",
    // music: "snssdk1128://music/detail/{{id}}?refer=web",
    // live: "snssdk1128://live?room_id={{room_id}}&user_id={{user_id}}&from=webview&refer=web",
    // webview: "snssdk1128://webview?url={{url}}&from=webview&refer=web",
    // webview_fullscreen: "snssdk1128://webview?url={{url}}&from=webview&hide_nav_bar=1&refer=web",
    // poidetail: "snssdk1128://poi/detail?id={{id}}&from=webview&refer=web",
    // forward: "snssdk1128://forward/detail/{{id}}",
    // billboard_word: "snssdk1128://search/trending",
    // billboard_video: "snssdk1128://search/trending?type=1",
    // billboard_music: "snssdk1128://search/trending?type=2",
    // billboard_positive: "snssdk1128://search/trending?type=3",
    // billboard_star: "snssdk1128://search/trending?type=4"
    // 跳转主页并关注:
    // snssdk1128://user/profile/72673737181?refer=web&gd_label=click_wap_profile_bottom&type=need_follow&needlaunchlog=1
    // snssdk1128://user/profile/72673737181?refer=web&gd_label=click_wap_download_follow&type=need_follow&needlaunchlog=1
    // 打开视频：
    // snssdk1128://aweme/detail/6683443624597916941?refer=web&gd_label=click_wap_profile_feature&appParam=&needlaunchlog=1
    // 原声（同一个音乐的作品）：
    // snssdk1128://music/detail/6680045787365247747?refer=web
    // 热搜榜
    // snssdk1128://search/trending
    // 最热视频:
    // snssdk1128://search/trending?type=1
    // 音乐榜:
    // snssdk1128://search/trending?type=2
    // 抖音内打开网址:
    // snssdk1128://webview?url=http%3A%2F%2Fbaidu.com&from=webview&refer=web
    // 抖音内打开网址（全屏）
    // snssdk1128://webview?url=http%3A%2F%2Fbaidu.com&from=webview&hide_nav_bar=1&refer=web

};

common.QQ = function(){

    // 打开QQ群资料
    // mqqapi://card/show_pslcard?src_type=internal&version=1&uin=78237147&card_type=group&source=qrcode
    // 打开QQ临时对话
    // mqqwpa://im/chat?chat_type=wpa'&'uin=453485278'&'version=1
    // QQ转账
    // mqqapi://forward/url?url_prefix=aHR0cHM6Ly9tcXEudGVucGF5LmNvbS92Mi9oeWJyaWQvd3d3L21vYmlsZV9xcS9wYXltZW50L2luZGV4LnNodG1sP193dj0xMDI3JmZyb209MTMmX3ZhY2Y9cXc='&'version=1'&'src_type=web
    // 通过Base64加密下面的网址得到上面的加密字符串
    // https://link.zhihu.com/?target=https%3A//mqq.tenpay.com/v2/hybrid/www/mobile_qq/payment/index.shtml%3F_wv%3D1027%26from%3D13%26_vacf%3Dqw
    // QQ个人资料
    // mqqapi://card/show_pslcard?src_type=internal'&'source=sharecard'&'version=1'&'uin=453485278
    // 打开群名片
    // mqqapi://card/show_pslcard?src_type=internal'&'version=1'&'uin=78237147'&'card_type=group'&'source=qrcode
    // QQ群成员列表    
    // ShanHai.execute ("am start -n 'com.tencent.mobileqq/com.tencent.mobileqq.activity.TroopMemberListActivity' -e 'troop_uin' "&群号)
    // 用QQ打开网址
    // shanhai.execute ("am start -n com.tencent.mobileqq/com.tencent.biz.pubaccount.PublicAccountBrowser --es 'url' "&uri)
    // 用QQ打开网址第二种，仅限打开腾讯自家网址
    // Dim Base64加密=ShanHai.Base64En("https://mqq.tenpay.com/v2/hybrid/www/mobile_qq/payment/index.shtml?_wv=1027&from=13&_vacf=qw")
    // shanhai.execute("am start -a android.intent.action.VIEW -d mqqapi://forward/url?url_prefix="&Base64加密&"'&'version=1'&'src_type=web")

};

common.快手 = function(){
    
    // 打开快手个人页面
    // kwai://profile/18070221
    // 快手作品页
    // kwai://work/5221923782104138503
    // 快手个人主页
    // kwai://profile/1162429530")
    // 快手直播间
    // kwai://live/play/nxBwp_TQa3M")
    // 快手极速版作品页
    // ksnebula://work/5221923782104138503")
    // 快手极速版个人页
    // ksnebula://profile/1162429530")

};

common.微信 = function(){

    // "weixin://dl/stickers"
    // "weixin://dl/games"
    // "weixin://dl/moments"
    // "weixin://dl/add"
    // "weixin://dl/shopping"
    // "weixin://dl/groupchat"
    // "weixin://dl/scan"
    // "weixin://dl/profile"
    // "weixin://dl/settings"
    // "weixin://dl/general"
    // "weixin://dl/help"
    // "weixin://dl/notifications"
    // "weixin://dl/terms"
    // "weixin://dl/chat"
    // "weixin://dl/features"
    // "weixin://dl/clear"
    // "weixin://dl/feedback"
    // "weixin://dl/faq"
    // "weixin://dl/recommendation"
    // "weixin://dl/groups"
    // "weixin://dl/tags"
    // "weixin://dl/officialaccounts"
    // "weixin://dl/posts"
    // "weixin://dl/favorites"
    // "weixin://dl/privacy"
    // "weixin://dl/security"
    // "weixin://dl/wallet"
    // "weixin://dl/businessPay"
    // "weixin://dl/businessPay/"
    // "weixin://dl/wechatout"
    // "weixin://dl/protection"
    // "weixin://dl/card"
    // "weixin://dl/about"
    // 打开微信好友
    // Dim 微信号id="wxid_q57bixvy5ptx22"
    // ShanHai.execute ("am start -n 'com.tencent.mm/com.tencent.mm.ui.chatting.ChattingUI' -e 'Chat_User' "&微信号id)
    // 打开微信群
    // Dim 群id="19960697439@chatroom"
    // ShanHai.execute ("am start -n 'com.tencent.mm/com.tencent.mm.ui.chatting.ChattingUI' -e 'Chat_User' " & 群id)
    // 打开朋友圈
    // Dim 微信id="wxid_q57bixvy5ptx22"
    // ShanHai.execute ("am start -n 'com.tencent.mm/com.tencent.mm.plugin.sns.ui.SnsUserUI' -e 'sns_userName' " & 微信id)
    // 打开指定本地图片
    // shanhai.execute ("am start -a android.intent.action.VIEW -d file:///sdcard/pictures/1.png -t image/*")
 

};

common.新浪微博 = function(){

    // 新浪微博聊天
    // sinaweibo://messagelist?uid=7189409646
    // 新浪微博个人主页
    // sinaweibo://userinfo?uid=5281885901
    // 打开新浪微博内容页
    // sinaweibo://detail?mblogid=JmLMXocIG
    // 新浪搜索指定内容
    // sinaweibo://searchall?q=按键精灵安卓版教程
    
};

common.小红书 = function(){

    // 小红书内容页
    // xhsdiscover://item/5f5b3fbc0000000001004c3e
    // 小红书个人主页
    // xhsdiscover://user/5f12d8cf0000000001004c15
    
};


module.exports = common;