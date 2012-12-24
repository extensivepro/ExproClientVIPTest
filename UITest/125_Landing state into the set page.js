UIALogger.logStart("CASE #125：：登陆状态进入设置页面");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()["右按钮"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["卡包"].tap();

UIALogger.logPass("CASE #125：：登陆状态进入设置页面");