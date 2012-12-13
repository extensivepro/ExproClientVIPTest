ExproClientTest
==============

#[泛卡惠](https://github.com/MengWei/exproiphone)测试工程

##安装及使用
```bash
//clone gold stone client test project
git clone git@github.com:extensivepro/ExproClientTest.git
cd ExproClientTest/Mother-May-UI
//enter info for config
./setup.sh
//run test
./run.sh
```

##目录说明
* `UITest/`	-界面测试的自动化脚本放在这里，运行setup.sh后会自动加入main.js中
* `UITest/main.js`	-测试的入口文件，自动包含目录下面的测试脚本，由setup自动生成
* `UITest/uitest.conf`	-UI测试配置文件由setup.sh自动生成
