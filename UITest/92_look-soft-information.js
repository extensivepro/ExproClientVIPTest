UIALogger.logStart("CASE #92：：查看本应用软件信息");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()[6].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()[0].tap();


UIALogger.logPass("CASE #92：：查看本应用软件信息");