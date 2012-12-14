
var target = UIATarget.localTarget();

//手机处于终端水平时通过“add to passbook”申请会员卡
UIALogger.logStart("手机处于终端水平时通过“add to passbook”申请会员卡");
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
		target.delay(1);
target.frontMostApp().mainWindow().buttons()["会员卡Add"].tap();
		target.delay(1);
target.frontMostApp().mainWindow().buttons()["返回向上"].tap();
		target.delay(3);
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_FACEUP);
		target.delay(1);
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);	
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);	
UIALogger.logPass("手机处于终端水平时通过“add to passbook”申请会员卡");

