UIALogger.logStart("CASE #90：：查看用户指南");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()["右按钮"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["设置 用户指南"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["我知道了"].tap();

UIALogger.logPass("CASE #90：：查看用户指南");