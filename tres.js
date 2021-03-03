function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var continuar;
	var contadorPasajeros=0;
	var sinDescuento;
	var conDescuento;
	var descuento;
	var contadorViudos=0;
	var contador=0;
	var edadJovenSoltera;
	var nombreJovenSoltera;
	var contadorViejos=0;
	

	do {
		do {
			nombre = prompt("Ingrese su nombre");
		} while (isNaN(nombre) == false);

		do {
			estadoCivil = prompt("Ingrese estado civil (viudo/casado/solteroo)");
		} while (estadoCivil != "soltero"  && estadoCivil != "viudo" && estadoCivil != "casado");

		do {
			edad = parseInt(prompt("Ingrese su edad"));
		} while (isNaN(edad) || edad < 17 || edad > 90);

		do {
			sexo = prompt("Ingrese sexo (femenino/masculino)");
		} while (sexo != "masculino" && sexo != "femenino");

		do {
			temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal"));
		} while (isNaN(temperaturaCorporal) || temperaturaCorporal < 36 || temperaturaCorporal > 40);
		
		if(edad > 60 && estadoCivil == "viudo"){
			contadorViudos++;
		}
		else if(edad > 60){
			contadorViejos++;
		}

		if(contador == 0 && estadoCivil == "soltero" && sexo == "femenino"){
			nombreJovenSoltera=nombre;
			edadJovenSoltera=edad;
			contador++;
		}
		else if (estadoCivil == "soltero" && sexo == "femenino" && edad < edadJovenSoltera){
			nombreJovenSoltera=nombre;
			edadJovenSoltera=edad;
		}
		contadorPasajeros++;

	} while (continuar = confirm("Desea ingresar mas datos?"));
	
	sinDescuento = contadorPasajeros * 600;

	if(contadorViudos != 0){
		document.write("Cantidad de viudos mayores a 60 años:"+contadorViudos+"<br>");
	}

	if(contador != 0){
		document.write("el nombre y la edad de la mujer mas joven :"+nombreJovenSoltera+" "+edadJovenSoltera+"<br>");
	}

	document.write("importe final sin descuento :"+sinDescuento+"<br>");

	if(contadorViejos != 0){
		calculo1 = contadorViejos * 100 / contadorPasajeros;
		if(calculo1 > 50){
			descuento = 0.25;
			conDescuento = sinDescuento - (sinDescuento * 0.25);
			document.write("Precio final con descuento :"+conDescuento);
		}
	}


}