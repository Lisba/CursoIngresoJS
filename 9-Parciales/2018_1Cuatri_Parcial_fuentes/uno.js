
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo = prompt('Introduce el largo del rectángulo en cms');
	ancho = prompt('Introduce el ancho del rectángulo en cms');
	
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	

	perimetro = largo * ancho;

	alert("El perímetro del rectángulo es de " + perimetro + " cms");
}
