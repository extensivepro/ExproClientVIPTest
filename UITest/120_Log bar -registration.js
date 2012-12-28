UIALogger.logStart("CASE #120：：用户从系统设置的登陆栏进入后进行注册");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()["右按钮"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()["通知"].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["设置 登录"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["注册"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["*手机号"].textFields()[0].tap();
target.delay(1);
target.frontMostApp().keyboard().typeString("13605147548");
target.delay(1);
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["验证码"].buttons()[1].tap();
target.delay(1);
target.frontMostApp().keyboard().typeString("918918");
target.delay(1);
target.frontMostApp().mainWindow().tableViews()["Empty list"].buttons()["Button"].tap();

UIALogger.logPass("CASE #120：：用户从系统设置的登陆栏进入后进行注册");