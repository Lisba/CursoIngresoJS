function mostrar()
{
		//declarar contadores y variables
		var contador = 0;
		var numero;
		var maximo;
		var minimo;
		var respuesta = "";
		
		while(respuesta != "no")
		{
			contador++
	
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
		}
	
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN