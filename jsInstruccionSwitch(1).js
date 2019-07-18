function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño)
    {
        case "Enero":
            mesDelAño = "Que comiences bien el año!!";
            break;
        case "Marzo":
            mesDelAño = "A clases!!!";
            break;
        case "Julio":
            mesDelAño = "Se vienen las vacaciones!!!";
            break;
        case "Diciembre":
            mesDelAño = "Felices Fiestas!!!";
            break;
    }

    alert(mesDelAño);

}//FIN DE LA FUNCIÓN