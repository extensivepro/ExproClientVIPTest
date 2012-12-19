
var target = UIATarget.localTarget();

//在商户介绍页面点击“add to passbook”
UIALogger.logStart("在商户介绍页面点击“add to passbook");
target.delay(1)
target.frontMostApp().mainWindow().buttons()[8].tap();
target.delay(1)
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
target.delay(1)
target.frontMostApp().mainWindow().buttons()["会员卡Info"].tap();
target.delay(1)
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Button"].buttons()["Button"].tap();
target.delay(1)
target.frontMostApp().mainWindow().buttons()["返回向上"].tap();
UIALogger.logPass("在商户介绍页面点击“add to passbook");
//在商户介绍页面点击“add to passbook”