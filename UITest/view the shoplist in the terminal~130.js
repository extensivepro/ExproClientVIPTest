
var target = UIATarget.localTarget();

//商户列表
UIALogger.logStart("手机处于终端水平时查看商户列表");
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
		target.delay(1);
target.frontMostApp().mainWindow().scrollViews()[0].tapWithOptions({tapOffset:{x:0.62, y:0.33}});
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[0].tap();	
		target.delay(1);	
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
UIALogger.logPass("手机处于终端水平时查看商户列表");