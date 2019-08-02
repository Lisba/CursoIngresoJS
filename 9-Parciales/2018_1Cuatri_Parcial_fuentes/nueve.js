function mostrar()
{

    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var contador = 0;
    var contadorTempPar = 0;
    var contadorTempBajoCero = 0;
    var marcaProductoMasPesado;
    var acumuladorPeso = 0;

    do
    {
        //Pide marca:
        marca = prompt("Ingrese la marca del producto:");
        
        //Pide, valida y acumula Pesos:
        do
        {
            peso = prompt("Ingrese el peso entre 1 y 100 kgs:");
            peso = parseInt(peso);
            
        } while(isNaN(peso) || peso < 1 || peso > 100)
        
        //Acumula la cantidad de pesos para luego calcular el promedio:
        acumuladorPeso = acumuladorPeso += peso;

        //Pide y valida temperatura:
        do
        {
            temperatura = prompt("Ingrese la temperatura de almacenamiento del producto entre -30 y 30 en ºC:");
            temperatura = parseInt(temperatura);
            
        } while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        
        //Calculo de cantidad de temperaturas pares:
        if(temperatura % 2 == 0)
        {
            contadorTempPar++;
        }
        
        //Calculo de cantidad de temperaturas bajo cero:
        if(temperatura < 0)
        {
            contadorTempBajoCero++;
        }

        //Cuenta iteraciones luego de haber introducido los datos:
        contador++;

        //Calculo de peso máximo, mínimo y marca producto mas pesado:
        if(contador == 1)
        {
            maximo = peso;
            minimo = peso;
        
        }else
        {
            if(peso < minimo)
            {
                minimo = peso;
            }

            if(peso > maximo)
            {
                maximo = peso;
                marcaProductoMasPesado = marca;
            }
        }
        
        //Pregunta para continuar o culminar el proceso de introduccion de datos:
        respuesta = confirm("Desea seguir agregando productos?");
        
    } while(respuesta)

    //Muestra información:
    document.write("La cantidad de temperaturas pares es " + contadorTempPar + "." + "<br>"); //a
    document.write("La marca del producto mas pesado es " + marcaProductoMasPesado + "." + "<br>"); //b
    document.write("La cantidad de productos que se conservan a menos de 0 grados es " + contadorTempBajoCero + "." + "<br>"); //c
    document.write("El promedio de la cantidad de pesos ingresados es " + acumuladorPeso/contador + "." + "<br>"); //d
    document.write("El peso mínimo es " + minimo + "kgs y el peso máximo es " + maximo + "kgs." + "<br>"); //e
    
}
