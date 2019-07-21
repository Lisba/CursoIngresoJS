function mostrar()
{

    var planetaIngresado;
    var txt;

    planetaIngresado = prompt("Escribe un planeta en minúsculas");

    switch (planetaIngresado)
    {
        case "tierra":
            txt = "Acá vivimos.";
            break;
        case "mercurio":
        case "venus":
            txt = "Acá hace mas calor.";
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "uranio":
        case "neptuno":
        case "pluton":
            txt = "Acá hace mas frío.";
            break;
        default:
            txt = "Este no es un planeta válido!!";
            break;
    }

    alert(txt);
}
