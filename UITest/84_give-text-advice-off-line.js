//用户已登录，且已申请过若干会员卡
//用户处于离线状态（飞行模式）

var target = UIATarget.localTarget();

//发送文本建议
var traverseCells = function(target,collectionView){
	for(var i=1,len=collectionView.cells().length;i<len-1;i+=1){
		if(collectionView.cells()[i].checkIsValid()==0)  break;
		collectionView.cells()[i].tap();
		target.delay(1);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].tap();
		target.delay(1);
		//发送文本建议
		UIALogger.logDebug("发送文本建议");
		target.delay(1);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()["文字"].tap();
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].textFields()[0].tap();
		//等待编辑文本
		target.delay(5);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()[1].tap();
		target.delay(1);
		target.tap({x:280.50,y:462.50});
		/* 适用于iPad 2X
		target.tap({x:654.00,y:964.00});
		*/
		target.delay(1);
	}
}

UIALogger.logStart("离线状态下发送文本建议");
traverseCells(target,target.frontMostApp().mainWindow().collectionViews()[0]);
UIALogger.logPass("离线状态下发送文本建议");