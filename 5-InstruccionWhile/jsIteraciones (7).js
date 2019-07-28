function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	var respuesta = "si";

	while(respuesta != "no")
	{
		contador++;
		numero = prompt("Ingrese números?");
		numero = parseInt(numero);
		acumulador += numero;
		respuesta = prompt("Quiere seguir sumando números, si/no?");
	}

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN