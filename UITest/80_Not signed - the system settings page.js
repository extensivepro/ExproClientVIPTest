UIALogger.logStart("CASE #80：：未登录状态下进入系统设置页面");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()[1].tap();

UIALogger.logPass("CASE #80：：未登录状态下进入系统设置页面");