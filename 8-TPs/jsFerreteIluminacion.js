/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var cantidad;
    var marca;
    var precioLampara;
    var cuenta;
    var cuentaDescuento;
    var precioFinal;
    var impuesto;

    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    precioLampara = 35;

    cantidad = parseInt(cantidad);

    cuenta = precioLampara * cantidad;
    cuentaDescuento = cuenta / 100;

    if (cantidad > 5)
    {
        
        precioFinal = cuenta - (cuentaDescuento * 50);

    } else
    {

    	if (cantidad == 5)
        {

            if (marca == "ArgentinaLuz")
            {

                precioFinal = cuenta - (cuentaDescuento * 40);

            } else 
            {

                precioFinal = cuenta - (cuentaDescuento * 30);
            
            }

        } else 
        {

            if (cantidad == 4) 
            {

                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {

                    precioFinal = cuenta - (cuentaDescuento * 25);

                } else 
                {

                    precioFinal = cuenta - (cuentaDescuento * 20);

                }
                
            } else
            {

            	if (cantidad == 3) 
            	{

            		if (marca == "ArgentinaLuz")
            		{

            			precioFinal = cuenta - (cuentaDescuento * 15);

            		} else
            		{

            			if (marca == "FelipeLamparas") 
	            		{

	            			precioFinal = cuenta - (cuentaDescuento * 10);

	            		} else
	            		{

	            			precioFinal = cuenta - (cuentaDescuento * 5);

	            		}

            		}

            	} else
            	{

            		if(cantidad == 2)
            		{

            			precioFinal = cuenta;

            		} else 
            		{

            			precioFinal = precioLampara;

            		}

            	}

            }

        }

    }

    if (precioFinal >= 120)
    {

	    impuesto = precioFinal / 100 * 10;
    	precioFinal = precioFinal + impuesto;
    	alert("IIBB usted pagó " + impuesto);

    }

    document.getElementById("precioDescuento").value = precioFinal;
    
}