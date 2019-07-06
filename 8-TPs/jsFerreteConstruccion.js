/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var cantidadAlambre;

    largo = document.getElementById('Largo').value;
    ancho = document.getElementById('Ancho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo + ancho) * 2;
    cantidadAlambre = perimetro * 3;

    alert(cantidadAlambre);
}

function Circulo () 
{
    var radio;
    var diametro;
    var pi;
    var perimetro;
    var cantidadDeAlamabre;

    radio = document.getElementById('Radio').value;
    diametro = radio * 2;
    pi = 3.14;
    perimetro = diametro * pi; // pi es una constante con valor de 3,14.

    cantidadDeAlamabre = perimetro * 3; // Se multiplica por 3 ya que se solicitan 3 hilos de alambre.

    alert(cantidadDeAlamabre);
}

function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var bolsaDeCemento;
    var bolsaDeCal;
    var cantidadDeCemento;
    var cantidadDeCal;

    largo = document.getElementById('Largo').value;
    ancho = document.getElementById('Ancho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    bolsaDeCemento = 2; // Cantidad de bolsas de Cemento para un piso con un area de 1 metro.
    bolsaDeCal = 3; // Cantidad de bolsas de Cal para un piso con un area de 1 metro.

    cantidadDeCemento = area / 1 * bolsaDeCemento;
    cantidadDeCal = area / 1 * bolsaDeCal;

    alert('La cantidad de cemento es de ' + cantidadDeCemento + " bolsas y la cantidad de cal es de " + cantidadDeCal + " bolsas.");
}