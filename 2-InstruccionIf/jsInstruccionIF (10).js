function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;

	notaRandom = Math.floor(Math.random() * (11 - 1) + 1);

	if (notaRandom >= 9) {

		alert(notaRandom);
		alert("EXCELENTE");

	} else if (notaRandom >= 4) {

		alert(notaRandom);
		alert("APROBÓ");

	} else {

		alert(notaRandom);
		alert("Vamos, la próxima se puede.")
		
	}

}//FIN DE LA FUNCIÓN