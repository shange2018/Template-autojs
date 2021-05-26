var view = {};
view.Title = "仅供测试"
view.TitleBG = "#009688"
view.DrawerBG = "#CCCCCC"
view.KeyBack = "@drawable/ic_chevron_left_black_48dp"  // 返回按钮
view.Items = ["支付宝", "微信"]    // tabs的栏目


view.show = function(){
    // importClass(android.widget.TextView)
    ui.layout(
        <drawer id="drawer" bg={view.DrawerBG} >
            <vertical>
                <appbar>
                    <toolbar id="toolbar" title="" subtitle="" >
                        <img id="back" src={view.KeyBack} h="40" paddingTop="5" 
                            bg="?selectableItemBackground" tint="#ffffffff" />
                        <TextView id="title" text={view.Title} textSize="30sp" 
                            textColor="white" layout_gravity="center" />
                    </toolbar>
                    <tabs id="tabs" />
                </appbar>
                <viewpager id="viewpager" >
                    <frame>
                        <card w="*" h="60" margin="10 5" cardCornerRadius="5dp" 
                            cardElevation="0dp" gravity="center_vertical">
                            <vertical h="auto">
                                    <Switch id="autoService" 
                                        text="无障碍服务" 
                                        checked="{{auto.service != null}}" 
                                        textStyle="bold" 
                                        textSize="15sp"
                                        padding="30 0" />
                            </vertical>
                            <View bg="#E51400" h="*" w="10" />
                        </card>
                        <card w="*" h="60" margin="10 70" cardCornerRadius="5dp" 
                            cardElevation="0dp" gravity="center_vertical">
                            <vertical h="auto">
                                    <Switch id="appDrawOverlay" 
                                        text="后台弹出界面" 
                                        checked="{{floaty.checkPermission()}}" 
                                        textStyle="bold" 
                                        textSize="15sp"
                                        padding="30 0" />
                            </vertical>
                            <View bg="#E51400" h="*" w="10" />
                        </card>
                    </frame>
                    <frame>
                        <vertical>
                            <text gravity="center" textStyle="bold" textSize="30sp">
                                脚本测试
                            </text>
                            <input id="代码内容" w="*"></input>
                            <button id="执行代码">执行代码</button>
                            <input id="脚本文件路径" w="*"></input>
                            <button id="执行脚本文件">执行脚本文件</button>
                            <input id="项目入口文件路径" w="*"></input>
                            <button id="执行项目">执行项目</button>
                            <button id="日志">日志</button>
                            <button id="停止脚本" text="停止脚本"></button>
                        </vertical>
                    </frame>
                </viewpager>
            </vertical>
            {/* <vertical layout_gravity="left" w="280">
                <img w="280" h="200" scaleType="fitXY" 
                    src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg" />
                <list id="menu">
                    <horizontal bg="?selectableItemBackground" w="*">
                        <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
                        <text textColor="white" textSize="20sp" text="{{this.title}}" layout_gravity="center" />
                    </horizontal>
                    
                </list>
            </vertical> */}
        </drawer>
    )
    
//======================================main页面内容=========================================================

    // 设置返回按钮监听事件
    ui.back.on("click", () => {
        toastLog("手动关闭脚本")
        exit()
    })
    
    // 设置滑动页面的标题
    ui.viewpager.setTitles(view.Items);

    // 让滑动页面和标签栏联动
    ui.tabs.setupWithViewPager(ui.viewpager);

    // 设置toolbar文本控件 脚本标题
    //ui.title.setText(view.title)

    // 添加右上角竖线，设置按钮
    // activity.setSupportActionBar(ui.toolbar);

    // 让工具栏左上角可以打开侧拉菜单
    // ui.toolbar.setupWithDrawer(ui.drawer);

    // 创建选项菜单(右上角)
    // ui.emitter.on("create_options_menu", menu => {
    //     menu.add("设置");
    //     menu.add("关于");
    // });
    // 监听选项菜单点击
    // ui.emitter.on("options_item_selected", (e, item) => {
    //     switch (item.getTitle()) {
    //         case "设置":
    //             toast("还没有设置");
    //             break;
    //         case "关于":
    //             alert("关于", view.title + "\n" + view.qq);
    //             break;
    //     }
    //     e.consumed = true;
    // });

    // 侧拉菜单选项
    // ui.menu.setDataSource([
    //     {   title: "选项一",    icon: "@drawable/ic_android_black_48dp" },
    //     {   title: "选项二",    icon: "@drawable/ic_settings_black_48dp" },
    //     {   title: "选项三",    icon: "@drawable/ic_favorite_black_48dp" },
    //     {   title: "退出",      icon: "@drawable/ic_exit_to_app_black_48dp" }
    // ]);

    // 添加侧拉菜单选中事件
    // ui.menu.on("item_click", item => {
    //     switch (item.title) {
    //         case "退出":
    //             ui.finish();
    //             break;
    //     }
    // })

//======================================第一页面内容=========================================================
    
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    ui.autoService.on("check", function(checked) {
        if(checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        };
        if(!checked && auto.service != null){
            auto.service.disableSelf();
        };
    });

    // 用户勾选后台弹出界面选项，跳转到系统页面去选择
    ui.appDrawOverlay.on("check", function(){
            floaty.requestPermission();
    });

    // 当用户回到本界面时，resume事件会被触发
    ui.emitter.on("resume", function() {
        // 此时根据无障碍服务的开启情况，同步开关的状态
        ui.autoService.checked = auto.service != null;
        ui.appDrawOverlay.checked = floaty.checkPermission();
    });

//======================================第二页面内容=========================================================

    ui.代码内容.setText('toastLog("hello");');
    ui.脚本文件路径.setText("/sdcard/脚本/main.js");
    ui.项目入口文件路径.setText("/sdcard/脚本/main.js");

    ui.执行代码.click(function () {
        eval(ui.代码内容.text());
      });
      ui.执行脚本文件.click(function () {
        engines.execScriptFile(ui.脚本文件路径.text().trim());
      });
      ui.执行项目.click(function () {
        let entryFilePath = ui.项目入口文件路径.text().trim();
        engines.execScriptFile(entryFilePath, { path: entryFilePath.replace(/\/[\w.]+?$/, "") });
      });
      ui.日志.click(function () {
        app.startActivity("console");
      });
      ui.停止脚本.click(function () {
        engines.all().map((ScriptEngine) => {
          if (engines.myEngine().toString() !== ScriptEngine.toString()) {
            ScriptEngine.forceStop();
          }
        });
      });

//======================================第三页面内容=========================================================



//======================================公共部分内容=========================================================

    console.show();

};

module.exports = view;
