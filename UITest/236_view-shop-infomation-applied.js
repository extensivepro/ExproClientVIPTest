var target=UIATarget.localTarget();

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

//查看已申领会员卡的商户信息
var traverseCells = function(target,collectionView){
	for(var i=1,len=collectionView.cells().length;i<len;i+=2){
		if(collectionView.cells()[i].checkIsValid()==0)   break;
		collectionView.cells()[i].tap();
		target.delay(1);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].tap();
		target.delay(1);
		target.tap({x:302.50,y:404.50});
		target.delay(2);
		target.frontMostApp().mainWindow().buttons()["返回选中"].tap();
		target.delay(1);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()["背面返回按钮"].tap();
		target.delay(1);
		target.tap({x:280.50,y:462.50});
		target.delay(1);
	}
}

UIALogger.logStart("查看已申领会员卡的商户信息");
traverseCells(target,target.frontMostApp().mainWindow().collectionViews()[0]);
UIALogger.logPass("查看已申领会员卡的商户信息");
