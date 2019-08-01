function mostrar()
{

    var marca;
    var peso;
    var temperatura;
    var respuesta;

    do
    {
        
        marca = prompt("Ingrese la marca del producto:");

        peso = prompt("Ingrese el peso del producto:");
        peso = parseInt(peso);

        while(isNaN(peso) || peso < 1 || peso > 100)
        {
            peso = prompt("ERROR, Ingrese el peso nuevamente entre 1 y 100 kgs:");
        }

        temperatura = prompt("Ingrese la temperatura de almacenamiento del producto en ºC:");
        temperatura = parseInt(temperatura);

        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Ingrese nuevamente la temperatura de almacenamiento del producto entre -30 y 30 en ºC:");
        }

        respuesta = confirm("Desea seguir agregando productos?");

    } while(respuesta)

}
