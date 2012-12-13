//用户已登录，且已申请过若干会员卡
//用户处于离线状态（飞行模式）

var target = UIATarget.localTarget();

//查看已申领会员卡的商户信息
var traverseCells = function(target,collectionView){
	for(var i=1,len=collectionView.cells().length;i<len;i+=1){
		if(collectionView.cells()[i].checkIsValid()==0)   break;
		collectionView.cells()[i].tap();
		target.delay(1);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].tap();
		target.delay(1);
		target.tap({x:302.50,y:404.50});
		target.delay(2);
		target.frontMostApp().mainWindow().buttons()["返回选中"].tap();
		target.delay(1);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()[1].tap();
		target.delay(1);
		target.tap({x:280.50,y:462.50});
		target.delay(1);
	}
}

UIALogger.logStart("离线状态下查看已申领会员卡的商户信息");
traverseCells(target,target.frontMostApp().mainWindow().collectionViews()[0]);
UIALogger.logPass("离线状态下查看已申领会员卡的商户信息");