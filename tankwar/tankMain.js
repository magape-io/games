
	//得到画布
	var canvas1=document.getElementById("tankMap");
	//得到绘图上下文(你可以理解是画笔)
	var cxt=canvas1.getContext("2d");
	
	//我的坦克 hero
	//方向 
	var hero=new Hero(heroX,heroY,0,heroColor);
	//定义子弹数组
	var heroBullets=new Array();

	//定义敌人的坦克(敌人的坦克有多少? 思路 : 是单个单个的定义，还是放在数组中?)
	var enemyTanks=new Array();

	//使用数组存放敌人死亡的坦克
	var  hitedEnemyTanksNums=new Array();

	var enemyBullets=new Array();


	//定义一个炸弹数组(可以存放很多炸弹,)

	var bombs=new Array();
	//先死后活 ，定3个，后面我们把敌人坦克的数量，作出变量
	//0->上, 1->右, 2->下 3->左
	for(var i=0;i<3;i++){
		
		//创建一个坦克
		var enemyTank=new EnemyTank((i+1)*50,0,2,enmeyColor);
		//把这个坦克放入数组
		enemyTanks[i]=enemyTank;

		//启动这个敌人的坦克
		window.setInterval("enemyTanks["+i+"].run()",50);

		//当创建敌人坦克时就分配子弹
		var eb=new Bullet(enemyTanks[i].x+9,enemyTanks[i].y+30,2,2.2,"enemy",enemyTanks[i]);

		enemyBullets[i]=eb;
		//启动该子弹
		var ettimer=window.setInterval("enemyBullets["+i+"].run()",50);
		enemyBullets[i].timer=ettimer;
	}
		//先调用一次
		flashTankMap();

	//专门写一个函数，用于定时刷新我们的作战区，把要在作战区出现的元素(自己坦克，敌人坦克，子弹，炸弹，
	//障碍物...)->游戏思想
	function flashTankMap(){
		
		//把画布清理
		cxt.clearRect(0,0,canvasWidth,canvasHeight); 

		//我的坦克
		drawTank(hero);

		//画出自己的子弹
		//子弹飞效果是怎么出现的?[答 ： 首先我们应该每隔一定时间(setInterval)就去刷新作战区,如果在刷新的时候，子弹坐标变换了，给人的感觉就是子弹在飞!]
		drawHeroBullet();

		//敌人的坦克
		//判断一下敌人坦克是否击中
		isHitEnemyTank();
		isBeHitedHeroTank();
		drawEnemyBomb();
		drawEnemyBullet();
		
		//画出所有敌人坦克
		for(var i=0;i<3;i++){
			//console.info(enemyTanks[i].x+"----"+enemyTanks[i].y+"===>"+enemyTanks[i].isLive);
			drawTank(enemyTanks[i]);
		}
			
	}

	


	//这是一个接受用户按键函数
	function getCommand(){
		
		//我怎么知道，玩家按下的是什么键
		//说明当按下键后 事件--->event对象----->事件处理函数()
		var theEvent = window.event || e;
		var code=theEvent.keyCode;//对应字母的ascii码->我们看码表
		switch(code){
			case 87://上
				hero.moveUp();
				
			   break;
			case 68:
			
			  hero.moveRight();
			   break;
			 case 83:
				
				hero.moveDown();
				break;
			case 65:
				hero.moveLeft();
				break;
			case 74:
				hero.shotEnemy();
				break;
		}

		//触发这个函数 flashTankMap();
		flashTankMap();
		//重新绘制所有的敌人的坦克.你可以在这里写代码(思想,我们干脆些一个函数，专门用于定时刷新我们的画布[作战区])
	}
	
	//每隔100毫秒去刷新一次作战区
	window.setInterval("flashTankMap()",100);