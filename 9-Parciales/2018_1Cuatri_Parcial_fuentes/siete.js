function mostrar()
{
    var nota;
    var sexo;
    var contador = 0;
    var acumuladorNotas = 0;
    var minimo;
    var sexoNotaMinima;
    var contadorSexoVaronNotaMasSeis = 0;
    var promedioNotas;
   
    do
    {
        //Pide nota y valida:
        do
        {
            nota = prompt("Ingresa la nota:");
            nota = parseInt(nota);

        } while(nota < 0 || nota > 10)

        //Pide sexo y valida:
        do
        {
            sexo = prompt("Ingresa el sexo: f/m");

        } while(sexo != "f" && sexo != "m")

        //Calcula la cantidad de iteraciones:
        contador++;

        //Calcula el promedio de las notas:
        acumuladorNotas += nota;

        //Calcula la nota mínima:
        if(contador == 1)
        {
            minimo = nota;
            sexoNotaMinima = sexo;

        } else if (nota < minimo)
        {   
                minimo = nota;
                sexoNotaMinima = sexo;
        }

        //Calcula la cantidad de varones con notas mayores a seis (6):
        if(sexo == "m" && nota >= 6)
        {
            contadorSexoVaronNotaMasSeis ++;
        }

        //Calcula promedio de notas:
        promedioNotas = acumuladorNotas/contador;

    } while(contador < 5)

    alert("El promedio de las notas totales es: " + promedioNotas + "."); //a
    alert("La nota mínima es: " + minimo + " y el sexo de esa persona es: " + sexoNotaMinima + "."); //b
    alert("La cantidad de varones con notas superiores ó iguales a seis (6) es: " + contadorSexoVaronNotaMasSeis + "."); //c

}
