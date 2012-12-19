
var target = UIATarget.localTarget();

//手机处于终端水平时查看商户信息
UIALogger.logStart("手机处于终端水平时查看商户信息");
      target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
		target.delay(1);
target.frontMostApp().mainWindow().buttons()["会员卡Info"].tap();
		target.delay(2);
target.frontMostApp().mainWindow().buttons()["返回选中"].tap();
		target.delay(1);
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
UIALogger.logPass("手机处于终端水平时查看商户信息");
