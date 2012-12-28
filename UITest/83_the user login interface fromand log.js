UIALogger.logStart("CASE #83：：从系统设置里进入用户登录界面并进行登录");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()[1].tap();
target.frontMostApp().mainWindow().tableViews()["通知"].buttons()["设置"].tap();
target.frontMostApp().mainWindow().buttons()[1].tap();
target.frontMostApp().mainWindow().textFields()[0].tap();
target.frontMostApp().keyboard().typeString("13770940015");
target.frontMostApp().mainWindow().buttons()["获取"].tap();
target.frontMostApp().keyboard().typeString("918918");
target.frontMostApp().mainWindow().buttons()[0].tap();
target.frontMostApp().mainWindow().buttons()["登录"].tap();

UIALogger.logPass("CASE #83：：从系统设置里进入用户登录界面并进行登录");