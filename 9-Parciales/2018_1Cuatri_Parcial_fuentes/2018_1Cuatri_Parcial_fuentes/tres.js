function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt('Introduce el precio de tu producto');
	descuento = prompt('Introduce el descuento de tu producto');

	precio = parseInt(precio);
	descuento = parseInt(descuento);

	precioFinal = precio - (precio / 100 * descuento);

	document.getElementById('elPrecioFinal').value = precioFinal;
}
