var pass;
var i;
var TabPalette = new Array("", "", "", "", "");
if (fo.example[0].checked==true)
	{
		pass=document.getElementById('z1');
		i = 0;
	}
	else if (fo.example[1].checked==true)
	{
		pass=document.getElementById('z2');
		i = 1;
	}
	else if (fo.example[2].checked==true)
	{
		pass=document.getElementById('z3');
		i = 2;
	}
	else if (fo.example[3].checked==true)
	{
		pass=document.getElementById('z4');
		i = 3;
	}
	else if (fo.example[4].checked==true)
	{
		pass=document.getElementById('z5');	
		i = 4;	
	}
var ccode="x";
var f = document.getElementById('formulaire');
function init(){
	var pass=document.getElementById('z1');
}

function assign(){
	
	
	if (fo.example[0].checked==true)
	{
		pass=document.getElementById('z1');
		i = 0;
	}
	else if (fo.example[1].checked==true)
	{
		pass=document.getElementById('z2');
		i = 1;
	}
	else if (fo.example[2].checked==true)
	{
		pass=document.getElementById('z3');
		i = 2;
	}
	else if (fo.example[3].checked==true)
	{
		pass=document.getElementById('z4');
		i = 3;
	}
	else if (fo.example[4].checked==true)
	{
		pass=document.getElementById('z5');	
		i = 4;	
	}
}

function AddCol2Pal(fo){
	alert('index checked = '+i);
	ccode = document.fo.incolor.value;
	TabPalette[i] = '#'+ccode;
	//var te = document.getElementById('tes').style.backgroundColor = '#'+ccode;
	pass.style.backgroundColor = TabPalette[i];
	alert('TabPalette['+i+'] = : '+TabPalette[i]);
	TabPalette[4] = Cvar;
}

