UIALogger.logStart("CASE #91：：查看服务条款");
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().buttons()["右按钮"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].buttons()["设置"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["服务条款"].tap();
target.delay(1);
target.dragFromToForDuration({x:192.50, y:361.00}, {x:269.00, y:86.00}, 0.7);
target.dragFromToForDuration({x:166.50, y:401.00}, {x:257.00, y:90.50}, 0.7);
target.delay(1);
target.frontMostApp().mainWindow().buttons()["返回未选"].tap();

UIALogger.logPass("CASE #91：：查看服务条款");