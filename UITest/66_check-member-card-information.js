var target=UIATarget.localTarget();

//用户登录
UIALogger.logStart("用户登录输入");
target.delay(1);
target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()[2].tap();
target.frontMostApp().mainWindow().textFields()[0].tap();
target.frontMostApp().keyboard().typeString("15850668296");
target.frontMostApp().mainWindow().buttons()["获取"].tap();
target.delay(30);  //获取并输入验证码
//target.frontMostApp().mainWindow().secureTextFields()[0].tap();
//target.frontMostApp().keyboard().typeString("918918");
target.frontMostApp().mainWindow().buttons()[0].tap();
target.frontMostApp().mainWindow().buttons()["登录"].tap();
target.delay(2);
UIALogger.logPass("用户登录");

target.frontMostApp().mainWindow().buttons()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["卡包"].tap();
target.delay(1);

//查看会员卡信息
UIALogger.logStart("查看会员卡信息")
var traverseCells = function(target,collectionView){
	for(var i=1,len=collectionView.cells().length;i<len;i+=2){
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
/*
target.frontMostApp().mainWindow().collectionViews()[0].cells()[1].tap();
target.delay(1);
target.tap({x:654.00,y:964.00});
target.delay(1);
target.frontMostApp().mainWindow().collectionViews()[0].cells()[3].tap();
target.delay(1);
target.tap({x:654.00,y:964.00});
target.delay(1);
target.frontMostApp().mainWindow().collectionViews()[0].cells()[5].tap();
target.delay(1);
target.tap({x:654.00,y:964.00});
target.delay(1);
target.frontMostApp().mainWindow().collectionViews()[0].cells()[7].tap();
target.delay(1);
target.tap({x:654.00,y:964.00});
target.delay(1);
target.frontMostApp().mainWindow().collectionViews()[0].cells()[9].tap();
target.delay(1);
target.tap({x:654.00,y:964.00});
*/
/*
target.frontMostApp().mainWindow().tableViews()["通知"].buttons()["设置"].tap();
target.tap({x:121.50, y:90.50});
target.frontMostApp().mainWindow().buttons()[2].tap();
target.frontMostApp().mainWindow().textFields()[1].tap();
target.frontMostApp().windows()[0].buttons()["注销"].tap();
target.frontMostApp().alert().defaultButton().tap();
*/