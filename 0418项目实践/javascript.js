/*星球介绍*/
window.onload=function(){
	var vPlate = document.getElementsByTagName('img');
	var vD = document.getElementsByClassName('show');
	var t=null;
	for (var i=0;i<vPlate.length;i++) {
		vPlate[i].className=i;
		vPlate[i].onmouseover=function(){
			var x=vD[this.className];
			t=setTimeout(function(){x.style.display='block'},700);
		}
		vPlate[i].onmouseout=function(){
			clearTimeout(t);
			vD[this.className].style.display='none';
		}
	}	
	var vTeam1 = document.getElementById('team1');
	vTeam1.onmouseover=function(){
		iLeftMove(0);
		/*alert(screen.width);
		alert(vTeam1.offsetLeft);
		alert(getComputedStyle(vTeam1,false)['right']);*/

		/*alert(document.body.clientWidth);
		alert('q11111');*/
	}
	vTeam1.onmouseout=function(){
		iLeftMove(-130);
	}
}
/*1371
 1366*/
/*制作组
 1257
  125
 1132*/
var timer =null;
			function iLeftMove(iTage){
				var vTeam1 = document.getElementById('team1');
				var x =getComputedStyle(vTeam1,false)['right'];
				var t =x.split('p');
				var vDivmove = document.getElementById('team1');
				var speed=0;
				if(parseInt(t[0])>iTage){
					speed=-5;
				}
				else{
					speed=5;
				}
				clearInterval(timer);
				timer=setInterval(function(){
					var vTeam1 = document.getElementById('team1');
					var x =getComputedStyle(vTeam1,false)['right'];
					var t =x.split('p');
					if(parseInt(t[0])==iTage){
					clearInterval(timer);
						if(speed>0){
							document.getElementById('team').style.display='none';
						}else{
							document.getElementById('team').style.display='block';
						}
					}else{
					vDivmove.style.right = parseInt(t[0])+speed+'px';
					}
					
				},30);
			}

