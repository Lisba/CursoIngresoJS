function mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if (edad >= 13 && edad < 18) {

        alert("Es un adolescente.");

    }

}//FIN DE LA FUNCIÓN