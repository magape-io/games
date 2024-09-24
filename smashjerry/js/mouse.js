// JavaScript Document
/*
	初试化游戏的函数
*/
var gameTime;     //游戏时间
var intervalTime;//地鼠出现的间隔时间
var stayTime;    //地鼠停留时间
var beginTime;   //游戏开始时间
var remainTime;   //游戏倒计时时间
var remainTimerId;//倒计时计时器id
var showMouseTimerId;//显示地鼠的计时器id
var stayTimerId;
var totalMouse=0;     //出现的总的地鼠个数
var autoHiddenMouse=0;//自动消失的地鼠个数
var hitMouseNum=0;   //击中的地鼠个数
var score = 0;
function startGame(){
	document.getElementById('score').innerHTML="游戏进行中。。。。。。";
	totalMouse=0;//出现的总的地鼠个数
	hitMouseNum=0//击中的地鼠个数
	score = 0;

	
	initGame();
	checkTime();
	showMouse();
					 
}
//初始化游戏的操作
function initGame(){
	gameTime = document.form1.txt_gameTime.value;//游戏时间
	intervalTime = document.form1.txt_remainedTime.value;//地鼠出现间隔时间
	stayTime = document.form1.txt_stayTime.value;//地鼠出现后停留的时间
	//alert(document.form1.btn_start.disabled);
	//alert(document.form1.btn_end.disabled);
	document.form1.btn_start.disabled=true;
	document.form1.btn_end.disabled=false;
	document.form1.txt_gameTime.disabled=true;
	document.form1.txt_remainedTime.disabled=true;
	document.form1.txt_stayTime.disabled=true;
	beginTime = new Date();
	
}
//完成倒计时的检查工作
function checkTime(){
	var nowTime = new Date();
	remainTime = gameTime*60-parseInt((nowTime.getTime()-beginTime.getTime())/1000);//游戏倒计时时间
	document.getElementById('timeOut').innerHTML=remainTime+'秒';
	remainTimerId = window.setTimeout('checkTime()',1000);//倒计时计时器id
}

//显示地鼠
function showMouse(){//0-24
	var rd = parseInt(Math.random()*25)//产生0-24的随机数
	document.images[rd].src='images/01.jpg';//随机出现地鼠
	totalMouse++;//出现地鼠总个数加一
	showMouseTimerId = setTimeout('showMouse()',intervalTime*1000);//每隔指定的时间间隔出现地鼠
	stayMouseTimerId = setTimeout('autoHidden('+rd+')',stayTime*1000);
	if(remainTime==0){
		stopGame();	
	}
}
//打击地鼠
function hitMouse(mouse){
	//alert("mouse=="+mouse);
	var src = mouse.src;
	src = src.substr(src.length-6);
	
	if(src=='01.jpg'){
		hitMouseNum++;
		getScore();
		xx = mouse;
		mouse.src='images/02.jpg'
		setTimeout('hidden(xx)',500);
		
	}
	
}

function hidden(obj){
	
	obj.src='images/00.jpg';
}

//地鼠自动消失
function autoHidden(rd){
	document.images[rd].src='images/00.jpg'
	autoHiddenMouse++;//自动消失的地鼠个数加一
	getScore();
	//计算分数
}
//计算分数
function getScore(){
	var tatolScore = totalMouse*100;//计算总分数
	score = (2*hitMouseNum-totalMouse)*100;//计算得分
	document.getElementById('score').innerHTML='总地鼠个数:'+totalMouse+'只 击中地鼠个数'+hitMouseNum+'只<br/>'+'总分数:'+tatolScore+'分 '+'得分数:'+score+'分'
}
//停止游戏 让游戏回到游戏开始前状态
function stopGame(){
	//将所有的图片恢复到游戏开始前的状态
	for(var i=0; i<document.images.length;i++){
		document.images[i].src='images/00.jpg';	
	}
	clearTimeout(remainTimerId);
	clearTimeout(showMouseTimerId);
	clearTimeout(stayTimerId);
	document.getElementById('timeOut').innerHTML='0秒';
	document.form1.btn_start.disabled=false;
	document.form1.btn_end.disabled=true;
	document.form1.txt_gameTime.disabled=false;
	document.form1.txt_remainedTime.disabled=false;
	document.form1.txt_stayTime.disabled=false;
	
}