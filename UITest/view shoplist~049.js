
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
