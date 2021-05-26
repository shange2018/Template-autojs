const PI = Math.PI;
var common = {};

// 常用命令
common.test = function (){
    // auto()
    // auto.waitFor()  // 检查无障碍服务是否已经启用
    // waitForActivity(, )  // 等待指定的Activity出现
    // waitForPackage(, )   // 等待指定的应用出现

    // log(currentPackage())
    // log(app.getAppName(currentPackage()))
    // log(currentActivity())

    // 跳转当前脚本的应用详情页面(用包名打开)
    // app.openAppSetting(context.getPackageName())

    // 程序开始运行之前判断无障碍服务
    // com.stardust.autojs.core.accessibility.AccessibilityService@362eea
    // if (auto.service == null) {
    //     toastLog("请先开启无障碍服务！");
    //     return
    // };

    // // 屏蔽音量键调节声音
    // events.setKeyInterceptionEnabled("volume_up", true);
    // // 启用按键监听
    // events.observeKey();
    // // 监听音量键按下
    // events.onKeyDown("volume_up", () => {
    //     toastLog('按音量键停止脚本');
    //     exit();
    // });
};

// 检查是否具有浮窗权限，如果没有则跳转到开启浮窗权限界面
common.requestAppDrawOverlay = function (){
    if(floaty.checkPermission()){    // 检测悬浮窗权限
        toastLog("已开启浮窗权限")
    }else{
        toastLog("未开启浮窗权限")
        floaty.requestPermission()  // 请求悬浮窗权限
        // 跳转悬浮窗权限设置界面(第二种方式)
        // app.startActivity({
        //     packageName: "com.android.settings",
        //     className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
        //     data: "package:" + context.getPackageName(),
        // });  
    } 
};

// 获取屏幕截图权限
common.requestScreenCapture = function (){
    threads.start(function () {
        if (requestScreenCapture()) {
            toastLog("获取截图权限 成功");
        } else {
            toastLog("获取截图权限 失败");
        }
    });
};

// 跳转页面
common.jumpPage = function (){
    // var intent = new Intent();
    // vpnIntent.setAction("android.net.vpn.SETTINGS");
    // intent.setAction("android.settings.ACCESSIBILITY_SETTINGS"); //辅助功能无障碍
    // intent.setAction("android.settings.ADD_ACCOUNT_SETTINGS"); //添加账户
    // intent.setAction("android.settings.AIRPLANE_MODE_SETTINGS"); //系统设置首页
    // intent.setAction("android.settings.APN_SETTINGS"); //APN设置
    // intent.setAction("android.settings.APPLICATION_SETTINGS"); //应用管理
    // intent.setAction("android.settings.BATTERY_SAVER_SETTINGS"); //节电助手
    // intent.setAction("android.settings.BLUETOOTH_SETTINGS"); //蓝牙
    // intent.setAction("android.settings.CAPTIONING_SETTINGS"); //字幕
    // intent.setAction("android.settings.CAST_SETTINGS"); //无线显示
    // intent.setAction("android.settings.DATA_ROAMING_SETTINGS"); //移动网络
    // intent.setAction("android.settings.DATE_SETTINGS"); //日期和时间设置
    // intent.setAction("android.settings.DEVICE_INFO_SETTINGS"); //关于手机
    // intent.setAction("android.settings.DISPLAY_SETTINGS"); //显示设置
    // intent.setAction("android.settings.DREAM_SETTINGS"); //互动屏保设置
    // intent.setAction("android.settings.HARD_KEYBOARD_SETTINGS"); //实体键盘
    // intent.setAction("android.settings.HOME_SETTINGS"); //应用权限,默认应用设置,特殊权限
    // intent.setAction("android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS"); //忽略电池优化设置
    // intent.setAction("android.settings.INPUT_METHOD_SETTINGS"); //可用虚拟键盘设置
    // intent.setAction("android.settings.INPUT_METHOD_SUBTYPE_SETTINGS"); //安卓键盘语言设置(AOSP)
    // intent.setAction("android.settings.INTERNAL_STORAGE_SETTINGS"); //内存和存储
    // intent.setAction("android.settings.LOCALE_SETTINGS"); //语言偏好设置
    // intent.setAction("android.settings.LOCATION_SOURCE_SETTINGS"); //定位服务设置
    // intent.setAction("android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS"); //所有应用
    // intent.setAction("android.settings.MANAGE_APPLICATIONS_SETTINGS"); //应用管理
    // intent.setAction("android.settings.MANAGE_DEFAULT_APPS_SETTINGS"); //与ACTION_HOME_SETTINGS相同
    // intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION"); //在其他应用上层显示,悬浮窗
    // intent.setAction("android.settings.MANAGE_UNKNOWN_APP_SOURCES"); //安装未知应用 安卓8.0
    // intent.setAction("android.settings.action.MANAGE_WRITE_SETTINGS"); //可修改系统设置 权限
    // intent.setAction("android.settings.MEMORY_CARD_SETTINGS"); //内存与存储
    // intent.setAction("android.settings.NETWORK_OPERATOR_SETTINGS"); //可用网络选择
    // intent.setAction("android.settings.NFCSHARING_SETTINGS"); //NFC设置
    // intent.setAction("android.settings.NFC_SETTINGS"); //网络中的 更多设置
    // intent.setAction("android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS"); //通知权限设置
    // intent.setAction("android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS"); //勿扰权限设置
    // intent.setAction("android.settings.ACTION_PRINT_SETTINGS"); //打印服务设置
    // intent.setAction("android.settings.PRIVACY_SETTINGS"); //备份和重置
    // intent.setAction("android.settings.SECURITY_SETTINGS"); //安全设置
    // intent.setAction("android.settings.SHOW_REGULATORY_INFO"); //监管信息
    // intent.setAction("android.settings.SOUND_SETTINGS"); //声音设置
    // intent.setAction("android.settings.SYNC_SETTINGS"); //添加账户设置
    // intent.setAction("android.settings.USAGE_ACCESS_SETTINGS"); //有权查看使用情况的应用
    // intent.setAction("android.settings.USER_DICTIONARY_SETTINGS"); //个人词典
    // intent.setAction("android.settings.VOICE_INPUT_SETTINGS"); //辅助应用和语音输入
    // intent.setAction("android.settings.VPN_SETTINGS"); //VPN设置
    // intent.setAction("android.settings.VR_LISTENER_SETTINGS"); //VR助手
    // intent.setAction("android.settings.WEBVIEW_SETTINGS"); //选择webview
    // intent.setAction("android.settings.WIFI_IP_SETTINGS"); //高级WLAN设置
    // intent.setAction("android.settings.WIFI_SETTINGS"); //选择WIFI,连接WIFI
    // app.startActivity(intent)
};

// 获取设备信息
common.getDeviceInfo = function (){
    log("基本系统版本: " + device.baseOS)  // 基本系统版本
    log("设备的主板型号: " + device.board)   // 设备的主板型号
    log("bootloader版本: " + device.bootloader)  // bootloader版本
    log("设备的修订版本: " + device.buildId) // 设备的修订版本
    log("设备的开发代号: " + device.codename)    // 设备的开发代号
    log("工业设计的名称: " + device.device)  // 工业设计的名称
    log("设备的硬件名称: " + device.hardware)    // 设备的硬件名称
    log("构建的唯一标识: " + device.fingerprint)    // 构建(build)的唯一标识码
    log("底层源代码管理: " + device.incremental)    // 底层源代码管理
    log("整个产品的名称: " + device.product) // 整个产品的名称
    log("安卓系统版本: " + device.release) // 安卓系统版本
    log("安卓系统api版本: " + device.sdkInt)  // 安卓系统api版本
    log("安全补丁级别: " + device.securityPatch)   // 安全补丁级别
    log("设备型号: " + device.model)   // 设备型号
    log("设备序列号: " + device.serial)  // 设备序列号
    log("屏幕高度: " + device.width)   // 屏幕高度
    log("屏幕宽度: " + device.height)  // 屏幕宽度
    log("是否在充电: " + device.isCharging())    // 是否在充电
    log("是否屏幕常亮: " + device.isScreenOn())    // 是否屏幕常亮
    log("保持屏幕常亮: " + device.keepScreenDim()) // 保持屏幕常亮，允许变暗
    log("保持屏幕常亮: " + device.keepScreenOn())  // 保存屏幕常亮
    log("最大通知音量: " + device.getNotificationMaxVolume())  // 最大通知音量
    log("当前通知音量: " + device.getNotificationVolume()) // 当前通知音量
    // log("设置闹钟音量: " + device.setAlarmVolume())    // 设置闹钟音量，需要修改系统设置权限
    // log("设置音乐音量: " + device.setMusicVolume())    // 设置音乐音量，需要修改系统设置权限
    // log("设置通知音量: " + device.setNotificationVolume()) // 设置通知音量，需要修改系统设置权限
    // log("设置手机亮度: " + device.setBrightness()) // 设置手机亮度
    // log("设置手机亮度模式: " + device.setBrightnessMode()) // 设置手机亮度模式
    log("设备的IMDI: " + device.getIMEI())   // 设备的IMDI
    log("设备的Mac地址: " + device.getMacAddress()) // 设备的Mac地址
    log("设备的AndroidId: " + device.getAndroidId())  // 设备的AndroidId
    log("设备的可用内存: " + device.getAvailMem())   // 设备的可用内存
    log("设备的内存总数: " + device.getTotalMem())   // 设备的内存总数
    log("当前电量百分比: " + device.getBattery())    // 当前电量百分比
    log("震动2秒: " + device.vibrate(2))  // 震动2秒
    log("唤醒设备屏幕: " + device.wakeUp())    // 唤醒设备，包括屏幕cpu等
    log("如果需要唤醒设备: " + device.wakeUpIfNeeded())    // 如果需要唤醒设备
    log("是否有悬浮窗权限: " + floaty.checkPermission())    // 是否有悬浮窗权限
    log("当前包名称1: " + context.getPackageName())  // 当前包名称
    log("当前包名称2: " + currentPackage())    // 当前包名称
    log("当前Activity: " + currentActivity())   // 当前Activity
};

// 获取云端代码
common.getScriptCode = function (url){
    http.__okhttp__.setTimeout(10000)   // 设置联网超时为10秒
    let myThread = threads.start(function(){
        res = http.get(url);
    });
    myThread.join(10000);
    if (res.statusCode != 200) {
        toast("下载失败")
        log("下载失败, 返回码:", res.statusCode, "返回信息:", res.statusMessage)
        return ""
    }
    scriptCode = res.body.string()
    log("下载成功,代码长度:", scriptCode.length)
	return scriptCode
};

// 执行代码
common.execScriptCode = function (scriptName, scriptCode){
    engines.execScript(scriptName, scriptCode)
    engines.myEngine().forceStop()
};

// 下载并执行代码
common.getExecScriptCode = function (url, scriptName){
    let scriptCode = common.getScriptCode(url)
    common.execScriptCode(scriptName, scriptCode)
};

// 加密信息
common.cryptoMessage = function (message, key, algorithm){
	// let aes = cryptoMessage("","0000000000000000","AES/ECB/PKCS5padding")
	// log(decryptoMessage(aes,"0000000000000000","AES/ECB/PKCS5padding"))
    message = message || "输入字符串为空"
    key = key || "password12345678"
    algorithm = algorithm || "AES/ECB/PKCS5padding"
    log("明文: " + message)
    log("密钥: " + key)
    log("算法: " + algorithm)
    let cryptoKey = new $crypto.Key(key);
    log("加密密钥: " + cryptoKey)
    let aes = $crypto.encrypt(message, cryptoKey, algorithm);
    let des = $crypto.decrypt(aes, cryptoKey, algorithm, {output: 'string'})
    log("密文: " + aes)
    log("解密后的明文: " + des)
    return aes
};

// 解密信息
common.decryptoMessage = function (message, key, algorithm){
    message = message || "输入字符串为空"
    key = key || "password12345678"
    algorithm = algorithm || "AES/ECB/PKCS5padding"
    log("密文: " + message)
    log("密钥: " + key)
    log("算法: " + algorithm)
    let cryptoKey = new $crypto.Key(key);
    log("解密密钥: " + cryptoKey)
    let des = $crypto.decrypt(message, cryptoKey, algorithm, {output: 'string'})
    log("解密后的明文: " + des)
    return des
};

module.exports = common;



