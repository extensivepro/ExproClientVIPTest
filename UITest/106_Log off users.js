UIALogger.logStart("CASE #106：：注销用户");
var target = UIATarget.localTarget();
//处理弹窗的函数
UIATarget.onAlert=function onAlert(alert){
  var title=alert.name();
	// test if your script should handle the alert, and if so, return true
	var info=alert.buttons()[0];
	UIALogger.logDebug(info.name());
	if(info.name()=="取消"){
		alert.defaultButton().tap();
		UIALogger.logDebug("是否注销");
		return true;
	}
	// add a warning to the log for each alert encountered
	UIALogger.logWarning("Alert with title'" + title + "'encountered!");
	// otherwise, return false to use the default handler
	return false;
}

target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()[2].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["注销"].tap();
target.delay(1);

UIALogger.logPass("CASE #106：：注销用户");