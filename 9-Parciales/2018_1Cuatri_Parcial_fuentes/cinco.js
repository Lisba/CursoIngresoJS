function mostrar()
{

    var planetaIngresado;

    planetaIngresado = prompt("Escribe un planeta en minúsculas");

    switch (planetaIngresado)
    {
        case "tierra":
            alert("Acá vivimos.");
            break;
        case "mercurio":
        case "venus":
            alert("Acá hace mas calor.");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "uranio":
        case "neptuno":
        case "pluton":
            alert("Acá hace mas frío.");
            break;
        default:
            alert("Este no es un planeta válido!!")
            break;
    }

}
