UIALogger.logStart("CASE #74：：离线状态进入设置页面");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(3);
target.frontMostApp().mainWindow().tableViews()[0].buttons()[0].tap();

UIALogger.logPass("CASE #74：：离线状态进入设置页面");