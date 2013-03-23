/*function changeOpac(opacity, id) {
var object = document.getElementById(id).style;
object.MozOpacity = Math.sin(opacity / 100); 
}*/

function start(){
	document.getElementById('startscreen').style.display = 'none';
	document.getElementById('bg').style.display = 'block';
}

function init(){
	setTimeout('fadeout()',1000);
	setTimeout('disapear()',2000);
}

function fadeout(){
	
	document.getElementById('startscreen').style.opacity = 0;
	//alert("test");
	//document.getElementById('bg').style.MozOpacity = 0;
}

function disapear(){
	document.getElementById('startscreen').style.display='none';
	document.getElementById('bg').style.display = 'block';
}