function mostrar()
{

    var numero;
    var letra;
    var contador = 0;
    var minimo;
    var maximo;
    var letraMaxima;
    var letraMinima;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPositivos = 0;
    var contadorPositivos = 0;
    var promedioPositivos;
    var acumuladorSumaNegativos = 0;
    var respuesta;

    do
    {
        
        do // Pide y valida la letra:
        {
            letra = prompt("Ingrese una letra:");
    
        } while (!isNaN(letra))
        
        do // pide y valida el número:
        {    
            numero = prompt("Ingrese un número entre -100 y 100:");
            numero = parseInt(numero);
    
        } while (isNaN(numero) || numero < -100 || numero > 100)
        
        // Verifica y acumula ceros:
        if (numero == 0)
        {
            contadorCeros++;
            
        } else if (numero % 2 == 0) // Verifica y acumula números pares:
        {
            contadorPares++;

        } else // Verifica y acumula numeros impares:
        {
            contadorImpares++;

        }
        
        // Verifica y acumula numeros positivos:
        if (numero > 0)
        {
            acumuladorPositivos += numero;
            contadorPositivos++;
            
        } else if (numero < 0) // Verifica y acumula números negativos:
        {
            acumuladorSumaNegativos += numero;
        }
        
        contador++; // Cuenta cantidad de iteraciones

        if (contador == 1) // Maximo y minimo en la primera iteracion:
        {
            maximo = numero;
            minimo = numero;
            letraMaxima = letra;
            letraMinima = letra;

        }else
        {
            if (numero < minimo) // Verifica y establece numero minimo y letra de esa iteracion:
            {
                minimo = numero;
                letraMinima = letra;
            
            }

            if (numero > maximo) // Verifica y establece numero maximo y letra de esa iteración:
            {
                maximo = numero;
                letraMaxima = letra;

            }

        }

        respuesta = confirm("Desea seguir ingresando datos?");

    } while(respuesta)

    // Calcula y asigna el promedio de todos los positivos ingresados para mostrarlo:
    promedioPositivos = acumuladorPositivos/contadorPositivos;

    // Muestro todos los datos:
    document.write("La cantidad de números pares es: " + contadorPares + ".<br>");
    document.write("La cantidad de números impares es " + contadorImpares + ".<br>");
    document.write("La cantidad de ceros ingresados es " + contadorCeros + ".<br>");
    document.write("El promedio de todos los números positivos ingresados es " + promedioPositivos + ".<br>");
    document.write("La suma de todos los números negativos ingresados es " + acumuladorSumaNegativos + ".<br>");
    document.write("El número mínimo es " + minimo + " y la letra del mínimo es " + letraMinima + ".<br>");
    document.write("El número máximo es " + maximo + " y la letra del número máximo es " + letraMaxima + ".<br>");

}
