
var target = UIATarget.localTarget();

//拨打商户电话
UIALogger.logStart("拨打商户电话");
target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
target.delay(1);
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
target.delay(1);
target.frontMostApp().mainWindow().buttons()["会员卡Info"].tap();
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_FACEUP);
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[1].textViews()[11].scrollToVisible();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[2].scrollToVisible();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[2].textViews()[0].scrollToVisible();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["02589632587, 新街口店, 分店名称：, 电话号码：, 地       址："].buttons()["商户电话"].tap();
target.delay(3)
UIALogger.logPass("拨打商户电话");
//拨打商户电话
