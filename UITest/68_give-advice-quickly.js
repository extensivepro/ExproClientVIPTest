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

//快速提建议
var traverseButtons = function(target,cell){
	for(var i=2,len=cell.buttons().length;i<len;i++){
		if(cell.buttons()[i].isVisible()==0)  break;
		cell.buttons()[i].tap();
		target.delay(4);
	}
}

//查看会员卡信息并进入“建议与反馈”页面
var traverseCells = function(target,collectionView){
	for(var i=1,len=collectionView.cells().length;i<len;i+=2){
		if(collectionView.cells()[i].isVisible()==0)  break;
		collectionView.cells()[i].tap();
		target.delay(1);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].tap();
		target.delay(1);
		traverseButtons(target,target.frontMostApp().mainWindow().collectionViews()[0].cells()[0]);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()["背面返回按钮"].tap();
		target.delay(1);
		target.tap({x:280.50,y:462.50});
		/* 适用于iPad 2X
		target.tap({x:654.00,y:964.00});
		*/
		target.delay(1);
	}
}

UIALogger.logStart("查看会员卡信息并进入'建议与反馈'页面");

traverseCells(target,target.frontMostApp().mainWindow().collectionViews()[0]);

UIALogger.logPass("查看会员卡信息并进入'建议与反馈'页面");