function mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if (edad >= 18) {

        alert("Es mayor de edad.");

    } else if (edad >= 13) {

        alert("Es un adolescente.");

    } else {

        alert("Es un niño.");

    }

}//FIN DE LA FUNCIÓN