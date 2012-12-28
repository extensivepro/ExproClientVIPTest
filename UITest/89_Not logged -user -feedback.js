UIALogger.logStart("CASE #89：：未登录状态下的用户反馈");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()["通知"].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()[3].tap();

UIALogger.logStart("CASE #89：：未登录状态下的用户反馈");