var canvas = document.getElementById('canvas');
var lienzo = canvas.getContext("2d");
pantalla = 1;
fase = 0;
faseAnterior = 0;

document.getElementById("canvas-container").addEventListener("mousedown", presionarMouse);

//JSONS
var fondoJuego = {
	URL : "../img/juego-mitosis/fondo-juego.png", 
	posx: 0
};

var fondoInicio = {
	URL: "../img/juego-mitosis/pantalla-inicio.png"
};

var fondoFinal = {
	URL: "../img/juego-mitosis/pantalla-final.png"
};

var faseInterfase = {
	URL: "../img/juego-mitosis/fase-interfase.png", 
	posx: 150,
	posy : 170
};

var faseProfase = {
	URL: "../img/juego-mitosis/fase-profase.png", 
	posx: 150,
	posy : 170
};

var faseMetafase = {
	URL: "../img/juego-mitosis/fase-metafase.png", 
	posx: 150,
	posy : 170
};

var faseAnafase = {
	URL: "../img/juego-mitosis/fase-anafase.png", 
	posx: 150,
	posy : 170
};

var faseTelofase = {
	URL: "../img/juego-mitosis/fase-telofase.png", 
	posx: 150,
	posy : 170
};

var faseHijas = {
	URL: "../img/juego-mitosis/fase-hijas.png", 
	posx: 150,
	posy : 170
};

function main() {
	inicializacionDibujos();
	dibujar();
}

function inicializacionDibujos() {
	inicializacionFondos();
}

function inicializacionFondos() {
	fondoJuego.imagen = new Image();
	fondoJuego.imagen.src = fondoJuego.URL;

	fondoInicio.imagen = new Image();
	fondoInicio.imagen.src = fondoInicio.URL;

	faseInterfase.imagen = new Image;
	faseInterfase.imagen.src = faseInterfase.URL;

	faseProfase.imagen = new Image;
	faseProfase.imagen.src = faseProfase.URL;

	faseMetafase.imagen = new Image;
	faseMetafase.imagen.src = faseMetafase.URL;

	faseAnafase.imagen = new Image;
	faseAnafase.imagen.src = faseAnafase.URL;

	faseTelofase.imagen = new Image;
	faseTelofase.imagen.src = faseTelofase.URL;

	faseHijas.imagen = new Image;
	faseHijas.imagen.src = faseHijas.URL;

	fondoFinal.imagen = new Image();
	fondoFinal.imagen.src = fondoFinal.URL;
}

function dibujar() {
	lienzo.clearRect(0,0,900,500);
	switch(pantalla) {
	    case 1:
		    lienzo.drawImage(fondoInicio.imagen, 0 ,0 );
	        break;
	    case 2:
	        dibujarJuego();
			break;
	 	case 3:
	        lienzo.drawImage(fondoFinal.imagen, 0, 0);
	        break;
	}

	setTimeout(dibujar, 20);
}

function dibujarJuego() {
	lienzo.drawImage(fondoJuego.imagen, 0, 0);
	
	if(fase == 0){
		do{
			fase = Math.floor(Math.random() * (7 - 1)) + 1;	
		}
		while( fase == faseAnterior);
		console.log(fase);
	}

	switch(fase) {
		    case 1:
			   lienzo.drawImage(faseInterfase.imagen, faseInterfase.posx, faseInterfase.posy);
			   break;
		    case 2:
		        lienzo.drawImage(faseProfase.imagen, faseProfase.posx, faseProfase.posy);
		        break;
		 	case 3:
		        lienzo.drawImage(faseMetafase.imagen, faseMetafase.posx, faseMetafase.posy);
		        break;
		    case 4:
		    	lienzo.drawImage(faseAnafase.imagen, faseAnafase.posx, faseAnafase.posy);
		    	break;
		    case 5:
		    	lienzo.drawImage(faseTelofase.imagen, faseTelofase.posx, faseTelofase.posy);
		    	break;
		    case 6:
		    	lienzo.drawImage(faseHijas.imagen, faseHijas.posx, faseHijas.posy);
		    	break;
		    
		}

		//addInput(50,50);
}


function presionarMouse(evento){
  x = evento.layerX;
  y = evento.layerY;

  switch(pantalla) {
    case 1:
    	if(x > 630 && x < 848 && y > 195 && y < 305){
    		pantalla = 2;
    	}
    	break;
    case 2:

    	if(y>30 && y<142){
			//inter
			faseAnterior = fase;
			if(x > 150 && x < 150+130 && y < 30+50 ){
				if(fase == 1){
					fase = 0;
				}else{
					pantalla = 3;
				}
			}
			if(x > 150 + 10 + 130 && x < 150+ 10 + 130 + 130 && y < 30+50 ){
				if(fase == 2){
					fase = 0;
				}else{
					pantalla = 3;
				}
			}
			if(x > 150 + 10 + 130 + 10 + 130 && x < 150+ 10 + 130 + 10 + 130 + 130 && y < 30+50 ){
				if(fase == 3){
					fase = 0;
				}else{
					pantalla = 3;
				}
			}
			if(x > 150+ 10 + 130 + 10 + 130 + 130 + 10 && x < 150+ 10 + 130 + 10 + 130 + 130 + 10 + 130 && y < 30+50 ){
				if(fase == 4){
					fase = 0;
				}else{
					pantalla = 3;
				}
			}
			if(x > 150 + 10 + 130 && x < 150+ 10 + 130 + 130 && y < 30+ 50 + 50 + 15 && y >30 + 50 + 15 ){
				if(fase == 5){
					fase = 0;
				}else{
					pantalla = 3;
				}
			}
			if(x > 150 + 10 + 130 + 10 + 130 && x < 150+ 10 + 130 + 10 + 130 + 130 && y < 30+ 50 + 50 + 15 && y >30 + 50 + 15 ){
				if(fase == 6){
					fase = 0;
				}else{
					pantalla = 3;
				}
			}

		}

    	break;
 	case 3:
 		pantalla = 1;
	}

  
}

