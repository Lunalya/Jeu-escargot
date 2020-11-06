window.onload = function(){

	initDices();
	initNavi();
	
};

function song(){
	var heylisten = new Audio();
	heylisten.src= "assets/song/heylisten.mp3" ;
	heylisten.play();
	
}


function getDicesConfig(){
	
	var diceImgPink = "assets/img/rubispink.png";
	var diceImgGreen = "assets/img/rubisgreen.png";
	var diceImgYellow = "assets/img/rubisyellow.png";
	var diceImgRed = "assets/img/rubisred.png";
	var diceImgBlue = "assets/img/rubisblue.png";
	
	var dicesConfig = [
			[ 'pink', diceImgPink ],
			[ 'green', diceImgGreen ],
			[ 'yellow', diceImgYellow ],
			[ 'red', diceImgRed ],
			[ 'blue', diceImgBlue ]
		]
		
	return dicesConfig;
	
}


function repositionNavi(){
	
	document.getElementById("navi-yellow").style.left = '215px';
	document.getElementById("navi-pink").style.left = '215px';
	document.getElementById("navi-blue").style.left = '215px';
	document.getElementById("navi-green").style.left = '215px';
	document.getElementById("navi-red").style.left = '215px';
	
}

// on affiche les dés pour le départ
function initDices(){
	
	  document.getElementById("dice-one").src = "assets/img/rubis.png";
	  document.getElementById("dice-two").src = "assets/img/rubis.png";
	  
	  document.getElementById("dice-one").style.display = 'block';
	  document.getElementById("dice-two").style.display = 'block';
	  
}

// récupération de la position des anges
function getNaviPosition(){
	
	var NaviPositionPink = document.getElementById("navi-pink").offsetLeft;
	var NaviPositionBlue = document.getElementById("navi-blue").offsetLeft;
	var NaviPositionGreen = document.getElementById("navi-green").offsetLeft;
	var NaviPositionYellow = document.getElementById("navi-yellow").offsetLeft;
	var NaviPositionRed = document.getElementById("navi-red").offsetLeft;
	
	var positions = [
			[ 'pink', NaviPositionPink ],
			[ 'green', NaviPositionGreen ],
			[ 'yellow', NaviPositionYellow ],
			[ 'red', NaviPositionRed ],
			[ 'blue', NaviPositionBlue ]
		]
		
	return positions;
	
}

// on affiche navi sur la ligne de départ
function initNavi(){
	
	document.getElementById("navi-yellow").src = "assets/img/naviyellow.png";
	document.getElementById("navi-pink").src = "assets/img/navipink.png";
	document.getElementById("navi-blue").src = "assets/img/naviblue.png";
	document.getElementById("navi-green").src = "assets/img/navigreen.png";
	document.getElementById("navi-red").src = "assets/img/navired.png";
	
	document.getElementById("navi-yellow").style.display =  'block';
	document.getElementById("navi-pink").style.display =  'block';
	document.getElementById("navi-blue").style.display =  'block';
	document.getElementById("navi-green").style.display =  'block';
	document.getElementById("navi-red").style.display =  'block';

	document.getElementById("navi-yellow").style.left = '215px';
	document.getElementById("navi-pink").style.left = '215px';
	document.getElementById("navi-blue").style.left = '215px';
	document.getElementById("navi-green").style.left = '215px';
	document.getElementById("navi-red").style.left = '215px';

	
	
}

// Lancement des dés //
function roll() {
	
	// on récupère les images et les couleurs qui vont avec
    var dices = getDicesConfig();
	
	// -------- Lancer du dé N°1
	var launchOne = Math.floor(Math.random() * dices.length);
	//on récupère la couleur du nouveau dé
	var colorOne = dices[launchOne][0];
	// on affiche l'image du nouveau dé
	document.getElementById("dice-one").src = dices[launchOne][1];


	//on récupere les img et couleurs du 2eme Dés
	var dices = getDicesConfig();

	// -------- Lancer du dé N°2
	var launchTwo = Math.floor(Math.random() * dices.length);
	var colorTwo = dices[launchTwo][0];
	document.getElementById("dice-two").src = dices[launchTwo][1];
	
	// on va appeler la fonction pour faire avancer navi
	moveNavi(colorOne, colorTwo);

}



function moveNavi(firstColor, secondColor){
	
	var maxMovement = 1300;
	
	// déplacement du premier lancer
	var naviPositions = getNaviPosition();
	for ( let i = 0; i < naviPositions.length; i++ ){
		
		if ( naviPositions[i][0] == firstColor ){
			
			var NewPositionLeft = naviPositions[i][1] + 130;
			document.getElementById("navi-"+naviPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft > maxMovement ) { gameWin(naviPositions[i][0]); exit; }
			
		}
	}
	
		// déplacement du deuxieme lancer
	var naviPositions = getNaviPosition();
	for ( let i = 0; i < naviPositions.length; i++ ){
		
		if ( naviPositions[i][0] == secondColor ){
			
			var NewPositionLeft = naviPositions[i][1] + 130;
			document.getElementById("navi-"+naviPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft > maxMovement ) gameWin(naviPositions[i][0]);
			
		}
	}

}



function gameWin(winner){

	song();
	alert( 'Navi '+ winner + ' à rejoint Link!');
	resetGame();
	
}


function resetGame(){
	
	initDices();
	initNavi();
	repositionNavi();
	
}

