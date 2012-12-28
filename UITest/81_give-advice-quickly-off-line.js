//用户已登录，且已申请过若干会员卡
//用户处于离线状态（飞行模式）

var target = UIATarget.localTarget();

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
	for(var i=1,len=collectionView.cells().length;i<len-1;i+=1){
		if(collectionView.cells()[i].isVisible()==0)  break;
		collectionView.cells()[i].tap();
		target.delay(1);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].tap();
		target.delay(1);
		traverseButtons(target,target.frontMostApp().mainWindow().collectionViews()[0].cells()[0]);
		target.frontMostApp().mainWindow().collectionViews()[0].cells()[0].buttons()[1].tap();
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