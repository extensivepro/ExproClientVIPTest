
var target = UIATarget.localTarget();

//用户登录
UIALogger.logStart("用户登录输入");
target.delay(1);
target.frontMostApp().mainWindow().buttons()[0].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()["通知"].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().textFields()[0].tap();
target.frontMostApp().keyboard().typeString("13770940015");
target.frontMostApp().mainWindow().buttons()["获取"].tap();
target.frontMostApp().keyboard().typeString("918918");
target.frontMostApp().mainWindow().buttons()[0].tap();
target.frontMostApp().mainWindow().buttons()["登录"].tap();
UIALogger.logPass("用户登录成功");

//返回设置页面
target.frontMostApp().mainWindow().buttons()[0].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["卡包"].tap();
target.delay(1);

//填写申请单
UIALogger.logStart("填写申请单");
target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[1].visibleCells()[0].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["电子邮箱"].textFields()[0].tap();
target.frontMostApp().keyboard().typeString("dgkde@163.com");
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["性别"].buttons()["女"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["邀请人"].textFields()[0].tap();
target.frontMostApp().keyboard().typeString("ghf");
target.frontMostApp().mainWindow().tableViews()[1].visibleCells()[0].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].buttons()["Button"].tap();
target.frontMostApp().statusBar().elements()["30% battery power, Charging"].tapWithOptions({tapOffset:{x:0.84, y:0.70}});
UIALogger.logPass("填写申请单");
