/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaUser;
    var aCelcius;

    temperaturaUser = document.getElementById('Temperatura').value;
    temperaturaUser = parseInt(temperaturaUser);

    aCelcius = (temperaturaUser - 32) / 1.8;

    alert(aCelcius);
}

function CentigradosFahrenheit () 
{
    var temperaturaUser;
    var aFarenheit;
    
    temperaturaUser = document.getElementById('Temperatura').value;
    temperaturaUser = parseInt(temperaturaUser);

    aFarenheit = (temperaturaUser * 1.8) + 32;

    alert(aFarenheit);
}
