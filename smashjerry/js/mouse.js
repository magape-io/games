// JavaScript Document
/*
	���Ի���Ϸ�ĺ���
*/
var gameTime;     //��Ϸʱ��
var intervalTime;//������ֵļ��ʱ��
var stayTime;    //����ͣ��ʱ��
var beginTime;   //��Ϸ��ʼʱ��
var remainTime;   //��Ϸ����ʱʱ��
var remainTimerId;//����ʱ��ʱ��id
var showMouseTimerId;//��ʾ����ļ�ʱ��id
var stayTimerId;
var totalMouse=0;     //���ֵ��ܵĵ������
var autoHiddenMouse=0;//�Զ���ʧ�ĵ������
var hitMouseNum=0;   //���еĵ������
var score = 0;
function startGame(){
	document.getElementById('score').innerHTML="��Ϸ�����С�����������";
	totalMouse=0;//���ֵ��ܵĵ������
	hitMouseNum=0//���еĵ������
	score = 0;

	
	initGame();
	checkTime();
	showMouse();
					 
}
//��ʼ����Ϸ�Ĳ���
function initGame(){
	gameTime = document.form1.txt_gameTime.value;//��Ϸʱ��
	intervalTime = document.form1.txt_remainedTime.value;//������ּ��ʱ��
	stayTime = document.form1.txt_stayTime.value;//������ֺ�ͣ����ʱ��
	//alert(document.form1.btn_start.disabled);
	//alert(document.form1.btn_end.disabled);
	document.form1.btn_start.disabled=true;
	document.form1.btn_end.disabled=false;
	document.form1.txt_gameTime.disabled=true;
	document.form1.txt_remainedTime.disabled=true;
	document.form1.txt_stayTime.disabled=true;
	beginTime = new Date();
	
}
//��ɵ���ʱ�ļ�鹤��
function checkTime(){
	var nowTime = new Date();
	remainTime = gameTime*60-parseInt((nowTime.getTime()-beginTime.getTime())/1000);//��Ϸ����ʱʱ��
	document.getElementById('timeOut').innerHTML=remainTime+'��';
	remainTimerId = window.setTimeout('checkTime()',1000);//����ʱ��ʱ��id
}

//��ʾ����
function showMouse(){//0-24
	var rd = parseInt(Math.random()*25)//����0-24�������
	document.images[rd].src='images/01.jpg';//������ֵ���
	totalMouse++;//���ֵ����ܸ�����һ
	showMouseTimerId = setTimeout('showMouse()',intervalTime*1000);//ÿ��ָ����ʱ�������ֵ���
	stayMouseTimerId = setTimeout('autoHidden('+rd+')',stayTime*1000);
	if(remainTime==0){
		stopGame();	
	}
}
//�������
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

//�����Զ���ʧ
function autoHidden(rd){
	document.images[rd].src='images/00.jpg'
	autoHiddenMouse++;//�Զ���ʧ�ĵ��������һ
	getScore();
	//�������
}
//�������
function getScore(){
	var tatolScore = totalMouse*100;//�����ܷ���
	score = (2*hitMouseNum-totalMouse)*100;//����÷�
	document.getElementById('score').innerHTML='�ܵ������:'+totalMouse+'ֻ ���е������'+hitMouseNum+'ֻ<br/>'+'�ܷ���:'+tatolScore+'�� '+'�÷���:'+score+'��'
}
//ֹͣ��Ϸ ����Ϸ�ص���Ϸ��ʼǰ״̬
function stopGame(){
	//�����е�ͼƬ�ָ�����Ϸ��ʼǰ��״̬
	for(var i=0; i<document.images.length;i++){
		document.images[i].src='images/00.jpg';	
	}
	clearTimeout(remainTimerId);
	clearTimeout(showMouseTimerId);
	clearTimeout(stayTimerId);
	document.getElementById('timeOut').innerHTML='0��';
	document.form1.btn_start.disabled=false;
	document.form1.btn_end.disabled=true;
	document.form1.txt_gameTime.disabled=false;
	document.form1.txt_remainedTime.disabled=false;
	document.form1.txt_stayTime.disabled=false;
	
}