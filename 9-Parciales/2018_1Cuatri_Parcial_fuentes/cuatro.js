function mostrar()
{

    var numeroUno;
    var numeroDos;
    var resultado;

    // Números ingresados en formato String.
    numeroUno = prompt("Escribe un número");
    numeroDos = prompt("Escribe otro número");

    if (numeroUno == numeroDos)
    {
        resultado = numeroUno + numeroDos;

    } else 
    {

        if (numeroUno > numeroDos)
        {
            resultado = numeroUno - numeroDos;

        } else
        {
            numeroUno = parseInt(numeroUno);
            numeroDos = parseInt(numeroDos);

            resultado = numeroUno + numeroDos;

            if (resultado > 10)
            {
                resultado = "La suma es " + resultado + " y superó al 10.";

            }

        }

    }

    alert(resultado);
    
    /* 

    PRIMERA RESOLUCIÓN HECHA ANTES DE MEJORARLO:

    // Números ingresados en formato Number.
    parsedNumeroUno = parseInt(numeroUno);
    parsedNumeroDos = parseInt(numeroDos);

    if (parsedNumeroUno < parsedNumeroDos) { // Si el primer número es menor que el segundo, los sumo.

        suma = parsedNumeroUno + parsedNumeroDos;
        alert(suma);
        
        if (suma > 10) {
            
            alert("La suma es " + suma + " y superó al 10.");

        }
        
    } else if (parsedNumeroUno > parsedNumeroDos) { // Si el primero número es mayor que el segundo, resto el primero menos el segundo.
        
        resta = parsedNumeroUno - parsedNumeroDos;
        alert(resta);
        
    } else { // Si ambos son iguales concateno las variables que contien los números en formato string.
        
        alert(numeroUno + numeroDos);

    }

    */

}