//用户已登录，且已申请过若干会员卡
//用户未登陆处于离线状态

var target = UIATarget.localTarget();

//商户列表
UIALogger.logStart("查看商户列表");
  	        target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
target.frontMostApp().mainWindow().buttons()["Button"].tap();
		target.delay(1);
target.frontMostApp().mainWindow().buttons()["最新未选"].tap();
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
UIALogger.logPass("查看商户列表");
