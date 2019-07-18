function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
    switch (mesDelAño)
    {
        case "Febrero":
            mesDelAño = "Este mes no tiene mas de 29 días";
            break;
        default:
            mesDelAño = "Este mes tiene 30 días o mas.";
            break;
    }

    alert(mesDelAño);

}//FIN DE LA FUNCIÓN