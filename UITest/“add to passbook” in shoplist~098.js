
var target = UIATarget.localTarget();

//在商户列表页面点击“add to passbook”弹出会员卡申请单
UIALogger.logStart("弹出会员卡申请单");
  	target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);
target.frontMostApp().mainWindow().tableViews()[1].visibleCells()[0].tap();
		target.delay(1);
target.frontMostApp().mainWindow().buttons()["返回向上"].tap();
		target.delay(1);
target.frontMostApp().mainWindow().buttons()[8].tap();
		target.delay(1);		
UIALogger.logPass("弹出会员卡申请单");
