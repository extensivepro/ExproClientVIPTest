UIALogger.logStart("CASE #102：：登录状态下用户反馈意见");
var target=UIATarget.localTarget();
//登录状态下用户反馈意见
 UIALogger.logStart("登录状态下用户反馈意见")
target.frontMostApp().mainWindow().buttons()["右按钮"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["设置 用户反馈"].tap();
target.delay(1);
target.frontMostApp().mainWindow().textViews()[0].tapWithOptions({tapOffset:{x:0.19, y:0.41}});
target.delay(1);
target.frontMostApp().keyboard().typeString("Ethghihbjibe");
target.delay(1);
target.frontMostApp().windows()[1].toolbar().buttons()["完成"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["提交"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["返回未选"].tap();

UIALogger.logPass("CASE #102：：登录状态下用户反馈意见");