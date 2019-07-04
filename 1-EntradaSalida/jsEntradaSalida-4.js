/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombrePrompt;
	
	nombrePrompt = prompt("Escribe tu nombre", "Lisbaldy");

	document.getElementById('elNombre').value = nombrePrompt;

}