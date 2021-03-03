
function mostrar() {
	var nombre;
	var tipo;
	var precio;
	var cantUnidades;
	var marcaProducto;
	var tipoInflama;
	var contAlcohol = 0;
	var contIAC = 0;
	var contQUAT = 0;
	var acumAlcohol = 0;
	var acumIAC = 0;
	var acumQUAT = 0;
	var promAlcohol;
	var promIAC;
	var promQUAT;
	var acumIgnifugo = 0;
	var acumCombustible = 0;
	var acumExplosivo = 0;
	var contIACEconomico = 0;
	var contador = 0;
	var marcaCaro;
	var tipoCaro;
	var precioDelMasCaro;


	for (var i = 0; i < 5; i++) {

		do {
			nombre = prompt("Ingrese un nombre");
			alert ("solo letras , proba de nuevo")
		} while (isNaN(nombre) == false);
		

		do {
			precio = prompt("Ingrese precio del producto (entre 100 y 300)");
			precio=parseInt(precio)
			alert ("solo numeros , proba de nuevo")
		} while (isNaN(precio) || precio < 100 || precio > 300);

		do {
			tipo = prompt("Ingrese tipo (alcohol-iac-quat)")
			alert ("solo letras , proba de nuevo")
		} while (tipo != "alcohol" && tipo != "iac" && tipo != "quat");

		do {
			cantUnidades = prompt("Ingrese cantidad de unidades (entre 1 y 1000)");
			cantUnidades=parseInt(cantUnidades)
			alert ("solo numeros , proba de nuevo")
		} while (isNaN(cantUnidades) || cantUnidades < 1 || cantUnidades > 1000);

		do {
			tipoInflama = prompt("Ingrese tipo producto (ignifugo-combustible-explosivo)")
			alert ("solo letras , proba de nuevo")
		} while (tipoInflama != "ignifugo" && tipoInflama != "combustible" && tipoInflama != "explosivo");

		do {
			marcaProducto = prompt("Ingrese marca del producto");
			alert ("solo letras , proba de nuevo")
		} while (isNaN(marcaProducto) == false);

		

		switch (tipoInflama) {
			case "combustible":
				acumCombustible = acumCombustible + cantUnidades;
				break;
			case "explosivo":
				acumExplosivo = acumExplosivo + cantUnidades;
				break;
			case "ignifugo":
				acumIgnifugo = acumIgnifugo + cantUnidades;
				break;
		}
		switch (tipo) {
			case "alcohol":
				contAlcohol++;
				acumAlcohol = acumAlcohol + cantUnidades;
				break;
			case "iac":
				contIAC++;
				acumIAC = acumIAC + cantUnidades;
				if (precio >= 200) {
					contIACEconomico++;
				}
				break;
			case "quat":
				contQUAT++;
				acumQUAT = acumQUAT + cantUnidades;
				break;
		}

		if (contador == 0) {
			tipoCaro = tipo;
			marcaCaro = marcaProducto;
			precioDelMasCaro = precio;
			contador++;
		}
		else if (precio > precioDelMasCaro) {
			tipoCaro = tipo;
			marcaCaro = marcaProducto;
			precioDelMasCaro = precio;
		}
	}

	if (acumIgnifugo > acumCombustible && acumIgnifugo > acumExplosivo) {
		document.write("inflamable con mas unidades : Ignifugo <br>");
	}
	else if (acumCombustible > acumIgnifugo && acumCombustible > acumExplosivo) {
		document.write(" inflamable con mas unidades : Combustible <br>");
	}
	else if (acumExplosivo > acumCombustible && acumExplosivo > acumIgnifugo) {
		document.write("inflamable con mas unidades  : Explosivo <br>");
	}

	if (contAlcohol != 0) {
		promAlcohol = acumAlcohol / contAlcohol;
		document.write("promedio de cantidad de productos de tipo alcohol  :" + promAlcohol + "<br>");
	}
	else if (contIAC != 0) {
		promIAC = acumIAC / contIAC;
		document.write("promedio de cantidad de productos de tipo IAC es :" + promIAC + "<br>");
	}
	else if (contQUAT != 0) {
		promQUAT = acumQUAT / contQUAT;
		document.write("promedio de cantidad de productos de tipo QUAT es :" + promQUAT + "<br>");
	}	

	if (contIACEconomico != 0) {
		document.write("unidades de IAC con precio menor a 201  :" + contIACEconomico + "<br>");
	}

	if (contador != 0) {
		document.write("el producto mas caro es :" + marcaCaro + " y el tipo es :" + tipoCaro);
	}
}