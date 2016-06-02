/*
 获取组件样式的函数
 参数：
 vItem:目标组件
 vSty:样式的名称
 * */
function mfGetstyle(vItem,vSty){
	if(vItem){
	}else{
		alert('参数1有误');
		return 'error';
	}
	if(vItem.currentStyle){
		return vItem.currentStyle[vSty];
	}
	else if(getComputedStyle(vItem,false)){
		return getComputedStyle(vItem,false)[vSty];
	}
	else{
		alert('多半是都不兼容');
		return 'error';
	}
}
/*
 用于将带有px的字符串转成数字
比如'100px'~100;
str:要转的字符串
 * */
function mfOffThePx(str){
	var x = str.split('p');
	return parseInt(x[0]);
}
/*
以上为库函数然而并没有用到多少次
以下为具体代码
*/

window.onload=function(){
	/*speed用来调节移动速度*/
	var speed=1;
	var speedx=speed;
	var speedy=speed;
	setInterval(function(){
	var ad = document.getElementById('ad');
	if(Math.abs(document.documentElement.clientWidth-ad.offsetLeft-ad.offsetWidth-1)<speed){
		speedx=0-speed;
	}else if(mfOffThePx(mfGetstyle(ad,'left'))<0){
		speedx=speed;
	}
	if(mfOffThePx(mfGetstyle(ad,'top'))<0){
		speedy=speed;
	}else if(Math.abs(document.documentElement.clientHeight-ad.offsetTop-ad.offsetHeight-1)<speed){
		speedy=0-speed;
	}
	ad.style.left=ad.offsetLeft+speedx+'px';
	ad.style.top=ad.offsetTop+speedy+'px';
	},30);
	vChangeColor();
}
/*字体闪烁颜色*/
function vChangeColor(){
var i=0;
var color = ["one","two","three","four","five","six","seven"];
function changeColor(){
	var n = document.getElementById("one");
	n.className = color[i];
	if(i<color.length-1){
		i++;
	}else{
		i=0;
	}
}
setInterval(changeColor,500);
}