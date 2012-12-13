var target=UIATarget.localTarget();

UIATarget.onAlert=function onAlert(alert){
	var title=alert.name();
	// test if your script should handle the alert, and if so, return true
	var info=alert.buttons()[0];
	UIALogger.logDebug(info.name());
	if(info.name()=="取消"){
		alert.defaultButton().tap();
		UIALogger.logDebug("拨打客服电话验证");
		return true;
	}
	// add a warning to the log for each alert encountered
	UIALogger.logWarning("Alert with title'" + title + "'encountered!");
	// otherwise, return false to use the default handler
	return false;
}

//用户登录
UIALogger.logStart("用户登录输入");
target.delay(1);
target.frontMostApp().mainWindow().buttons()[0].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().textFields()[0].tap();
target.frontMostApp().keyboard().typeString("13770940015");
target.frontMostApp().mainWindow().buttons()["获取"].tap();
target.frontMostApp().mainWindow().secureTextFields()[0].tap();
target.frontMostApp().keyboard().typeString("918918");
target.frontMostApp().mainWindow().buttons()[0].tap();
target.frontMostApp().mainWindow().buttons()["登录"].tap();
UIALogger.logPass("用户登录成功");

//返回设置页面
target.frontMostApp().mainWindow().buttons()[0].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["卡包"].tap();
target.delay(1);

//查看会员卡信息并进入“建议与反馈”页面
UIALogger.logStart("查看会员卡信息并进入'建议与反馈'页面");
target.frontMostApp().mainWindow().collectionViews()[0].cells()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].tap();
UIALogger.logPass("查看会员卡信息并进入‘建议与反馈’页面");

//拨打客服电话
target.delay(1);
UIALogger.logStart("拨打客服电话");
target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()["客服"].tap();
target.delay(3);
UIALogger.logPass("拨打客服电话");

//var traverseCells = function(target,collectionView){
//	for(var i=1,len=collectionView.cells().length;i<len;i+=2){
//		if(collectionView.cells()[i].checkIsValid()==0)  break;
//		collectionView.cells()[i].tap();
//		target.delay(1);
//		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].tap();
//		target.delay(1);
//		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()["客服"].tap();
		
//		/*
//		target.delay(1);
//		target.tap({x:280.50,y:462.50});
//		*/
//		}
//}
