// 用户将手机设为离线状态（飞行模式），且用户已登录

var target = UIATarget.localTarget();

//查看会员卡信息
UIALogger.logStart("查看会员卡信息")
var traverseCells = function(target,collectionView){
	for(var i=1,len=collectionView.cells().length;i<len-1;i+=1){
		if(collectionView.cells()[i].checkIsValid()===0)  break;
		collectionView.cells()[i].tap();
		target.delay(1);
		target.tap({x:280.50,y:462.50});
		/* 适用于iPad 2X
		target.tap({x:654.00,y:964.00});
		*/
		target.delay(1);
	}
}

traverseCells(target,target.frontMostApp().mainWindow().collectionViews()[0]);

UIALogger.logPass("查看会员信息");