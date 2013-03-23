var dz="#";
var Cvar;
function getSelectValue(selectId)
{
	/**On récupère l'élement html <select>*/
	var selectElmt = document.getElementById(selectId);
	/**
	selectElmt.options correspond au tableau des balises <option> du select
	selectElmt.selectedIndex correspond à l'index du tableau options qui est actuellement sélectionné
	*/
	return selectElmt.options[selectElmt.selectedIndex].value; 
}

function updateBGColor(){
	//l'affectation des valeurs du menu select au variables
	var red1 = getSelectValue('BR1');
	var red2 = getSelectValue('BR2');
	var green1 = getSelectValue('BG1');
	var green2 = getSelectValue('BG2');
	var blue1 = getSelectValue('BB1');
	var blue2 = getSelectValue('BB2');
	//concatination du résultat
	var BGcolor = dz+red1+red2+green1+green2+blue1+blue2;
	var UpBGcolor = BGcolor.toUpperCase();
	//document.getElementById('result').value =color1; affichage du résultat 
	//mise à jour de la valeur hexa de la couleur choisie
	document.getElementById("BGValue").innerHTML ="<p>Background : "+BGcolor+"</p> ";
	//le changement du background avec la nouvelle couleur
	document.getElementById("canvascolor").style.backgroundColor = BGcolor;
	//testerFG();
	//usecolor(BGcolor);
	testerBG();
	Cvar=BGcolor;
}
function updateFGColor(){
	//l'affectation des valeurs du menu select au variables
	var red1 = getSelectValue('FR1');
	var red2 = getSelectValue('FR2');
	var green1 = getSelectValue('FG1');
	var green2 = getSelectValue('FG2');
	var blue1 = getSelectValue('FB1');
	var blue2 = getSelectValue('FB2');
	//concatination du résultat
	var FGcolor = dz+red1+red2+green1+green2+blue1+blue2;
	var UpFGcolor = FGcolor.toUpperCase();
	//alert(UpFGcolor);
	//le changement du background avec la nouvelle couleur
	document.getElementById("FGValue").style.color = FGcolor;
	BGcolor = document.getElementById('canvascolor').style.backgroundColor;
	document.getElementById("BGValue").style.color = FGcolor;
	//mise à jour de la valeur hexa de la couleur choisie
	document.getElementById("FGValue").innerHTML="<p>Text Color : "+FGcolor+"</p>";

	//usecolor(FGcolor);
	//alert(color2);
	//testerBG();
	testerFG();
}
function testerBG(){
	var C1 = document.getElementById('canvascolor').style.backgroundColor;
	//tester si la couleur a un nom sinon afficher "Unknown color"
	if (C1 == "rgb(0, 0, 0)") document.getElementById('BGcolorname').value = 'Black'
	else if (C1 == "rgb(255, 255, 255)") document.getElementById('BGcolorname').value = 'White'
	else document.getElementById('BGcolorname').value = 'Unknown Color';
}
function testerFG(){
	var C2 = document.getElementById('FGValue').style.color;
	//tester si la couleur a un nom sinon afficher "Unknown color"
	if (C2 == "rgb(0, 0, 0)") document.getElementById('FGcolorname').value = 'Black'
	else if (C2 == "rgb(255, 255, 255)") document.getElementById('FGcolorname').value = 'White'
	else document.getElementById('FGcolorname').value = 'Unknown Color';
}
function showFG(){
document.getElementById('backgroundtable').style.display = 'none';
document.getElementById('foregroundtable').style.display = 'block';
//document.getElementById('foregroundB').style.display = 'none';
//document.getElementById('backgroundB').style.display = 'block';
document.getElementById('bgswitch').checked=false;
document.getElementById('fgswitch').checked=true;
//document.bgswitch[0].checked=false;
//document.fgswitch[0].checked=true;
}
function showBG(){
document.getElementById('foregroundtable').style.display = 'none';
document.getElementById('backgroundtable').style.display = 'block';
//document.getElementById('backgroundB').style.display = 'none';
//document.getElementById('foregroundB').style.display = 'block';
document.getElementById('bgswitch').checked=true;
document.getElementById('fgswitch').checked=false;
//document.bgswitch[0].checked=true;
//document.fgswitch[0].checked=false;
}

function reload(){
window.location.reload();
//reload bg values
document.getElementById("BR1").selectedIndex = 0;
document.getElementById("BR2").selectedIndex = 0;
document.getElementById("BG1").selectedIndex = 0;
document.getElementById("BG2").selectedIndex = 0;
document.getElementById("BB1").selectedIndex = 0;
document.getElementById("BB2").selectedIndex = 0;
//reload fg values
document.getElementById("FR1").selectedIndex = 15;
document.getElementById("FR2").selectedIndex = 15;
document.getElementById("FG1").selectedIndex = 15;
document.getElementById("FG2").selectedIndex = 15;
document.getElementById("FB1").selectedIndex = 15;
document.getElementById("FB2").selectedIndex = 15;
//configure the switcher
document.getElementById('bgswitch').checked=true;
document.getElementById('fgswitch').checked=false;
}

function showpalette(){
	document.getElementById('fgsection').className='fgsectionactive';
}

function hidepalette(){
	document.getElementById('fgsection').className='fgsection';
}