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
 用于将带有px的字符串转成数字
比如'100px'~100;
str:要转的字符串
 * */
function mfOffThePx(str){
	var x = str.split('p');
	return parseInt(x[0]);
}
/*
 	用于各种运动，来自智能社的完美运动框架
 	
 * 
 * */

function mfMove(vtO,vtA,vtT,vtF){
	clearInterval(vtO.timer);
	vtO.timer=setInterval(function(){
		if(vtA=='opacity'){
				var speed = (vtT-parseFloat(mfGetstyle(vtO,vtA)))*10;
				var cur=parseFloat(mfGetstyle(vtO,vtA));
	/*			document.getElementById('text1').value=mfGetstyle(vtO,vtA);*/
			}else{
				var speed = (vtT-parseInt(mfGetstyle(vtO,vtA)))/10;
				var cur=parseInt(mfGetstyle(vtO,vtA));
			}
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		/*0.1向上取整为1
		 * -0.1向下取整为-1
		 * JavaScript中传函数参数用function包起来
		 */
		if(cur==vtT){
			if(vtF){
				vtF();
			}
			clearInterval(vtO.timer);
		}
		else{
			if(vtA=='opacity'){
				vtO.style[vtA] = parseFloat(mfGetstyle(vtO,vtA))+speed/100;
			}else{
				vtO.style[vtA] = parseInt(mfGetstyle(vtO,vtA))+speed+'px';
			}
			
		}
		
	},30);
	
}