function mostrar()
{
		//declarar contadores y variables
		//var contador = 0;
		var numero;
		var maximo;
		var minimo;
		var respuesta;

		var esPrimeraIteracion = true;

		do
		{
			numero = prompt("ingrese un número:");
			numero = parseInt(numero);

			while(isNaN(numero) || numero < -10 || numero > 10)
			{
				numero = prompt("ERROR, Ingrese número nuevamente:");
				numero = parseInt(numero);
			}
			
			if(esPrimeraIteracion)
			{
				maximo = numero;
				minimo = numero;
				esPrimeraIteracion = false;

			} else if (numero < minimo)
			{
				minimo = numero;

			} else if (numero > maximo)
			{
				maximo = numero;
			}

			respuesta = confirm("Quiere seguir agregando números?");

		} while(respuesta)
		
		// acá es otra forma
		/*while(respuesta != "no")
		{
			contador++;
	
			numero = prompt("ingrese un número");
	
			if(contador == 1)
			{
				maximo = numero;
				minimo = numero;
	
			} else
			{
				
				if(numero > maximo)
				{
					maximo = numero;
				}
		
				if(numero < minimo)
				{
					minimo = numero;
				}
	
			}
		
			respuesta = prompt("Quiere seguir agregando números?, si/no");
			while (respuesta != "si" && respuesta != "no")
			{
				respuesta = prompt("ERROR, Ingrese 'si/no' si desea seguir agregando números:", "si");
			}

		}*/
	
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN