UIALogger.logStart("CASE #127：：删除全部我的消息");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()["右按钮"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["x"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["清除"].tap();

UIALogger.logPass("CASE #127：：删除全部我的消息");