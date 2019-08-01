function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	var respuesta = "si";

	while(respuesta != "no")
	{
		contador++;
		numero = prompt("Ingrese números:");
		
		while (isNaN(numero))
		{
			numero = prompt("ERROOR, Ingrese número nuevamente:");
		}

		numero = parseInt(numero);
		acumulador += numero;
		respuesta = prompt("Quiere seguir sumando números, si/no?");

		while (respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("ERROOR, Ingrese si/no si desea seguir sumando números:")
		}
	}

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN