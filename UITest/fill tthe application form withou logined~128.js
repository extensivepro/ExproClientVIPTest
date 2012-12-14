
var target = UIATarget.localTarget();

//未登录状态填写申请单
UIALogger.logStart("未登录状态填写申请单");
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
target.frontMostApp().mainWindow().tableViews()[1].visibleCells()[0].tap();
		target.delay(1);
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["*手机号"].textFields()[0].tap();
target.frontMostApp().keyboard().typeString("13770940015");
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["电子邮箱"].textFields()[0].tap();
target.frontMostApp().keyboard().typeString("hfddi");
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["邀请码"].textFields()[0].tap();
target.frontMostApp().keyboard().typeString("ffhgda");
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["验证码"].buttons()[1].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["验证码"].textFields()[0].tap();
target.frontMostApp().keyboard().typeString("918918");
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[0].tap();
		target.delay(1);
target.frontMostApp().mainWindow().tableViews()["Empty list"].buttons()["Button"].tap();
		target.delay(1);
UIALogger.logPass("未登录状态填写申请单");