var target=UIATarget.localTarget();

UIATarget.onAlert=function onAlert(alert){
  var title=alert.name();
	// test if your script should handle the alert, and if so, return true
	var info=alert.buttons()[0];
	UIALogger.logDebug(info.name());
	if(info.name()=="取消"){
		alert.defaultButton().tap();
		UIALogger.logDebug("拨打商户电话验证");
		return true;
	}
	// add a warning to the log for each alert encountered
	UIALogger.logWarning("Alert with title'" + title + "'encountered!");
	// otherwise, return false to use the default handler
	return false;
}


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

//var traverseCells = function(target,collectionView){
//	for(var i=1,len=collectionView.cells().length;i<len;i+=2){
//		if(collectionView.cells()[i].checkIsValid()==0)  break;
//		collectionView.cells()[i].tap();
//		target.delay(1);
//		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].tap();
//		target.delay(1);
//		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()["商户"].tap();

//		/*
//		target.delay(1);
//		target.tap({x:280.50,y:462.50});
//		*/
//		}
//}

