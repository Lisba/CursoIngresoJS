function mostrar()
{

    //tomo la edad  
    var mesDelAnio = document.getElementById('mes').value;

    //alert (mesDelAño);
    switch (mesDelAnio)
    {
        case "Febrero":
            mesDelAño = "Este mes tiene 28 días.";
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            mesDelAño = "Este mes tiene 30 días.";
            break;
        default:
            mesDelAño = "Este mes tiene 31 días";
            break;
    }

    /*switch (mesDelAnio)
    {
        case "Febrero":
            alert("Este mes tiene 28 días.");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Este mes tiene 30 días.");
            break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Este mes tiene 31 días");
            break;
    }*/

    alert(mesDelAño);

}//FIN DE LA FUNCIÓN