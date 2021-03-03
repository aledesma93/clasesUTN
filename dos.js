function mostrar()
{
  //asigno nombres a distintas variables que luego voy a utilizar
  var nombre;
	var cursada;
	var cantMaterias;
	var genero;
	var notaPromedio;
	var edad;
	var mejorPromedioNoHombre;
	var mejorPromedioNoHombreNoBinario;	
	var nombreJoven;
	var edadJoven;
	var acumMasculino=0;
	var acumFemenino=0;
	var acumNoBinario=0;
  //recurro a estas variables contadores para inicializar los calculos
	var contadorMasculino=0;
	var contadorFemenino=0;
	var contadorNoBinario=0;
	var promedio;
  var contador=0;	
	var contador2=0;
  var contador3=0;	
	var mayorCantMaterias;
	var edadMayorCantMaterias;
	var nombreMayorCantMaterias;
//ingreso de datos mediante prompt verificando y parseando de ser necesario
	do {
		do {
			nombre=prompt("Ingrese nombre");      
		} while (isNaN(nombre)==false);		
		do {
			cantMaterias = parseInt(prompt("Ingrese cantidad de materias"));
		} while (isNaN(cantMaterias)|| cantMaterias > 8 || cantMaterias < 0 );
    do {
			cursada=prompt("Ingrese cursada (libre-presencial-remota)");
		} while (cursada != "libre" && cursada != "presencial" && cursada != "remota");
		do {
			genero=prompt("Ingrese genero (femenino-masculino-no binario)");
		} while (genero != "femenino" && genero != "masculino" && genero != "no binario");		
		do {
			notaPromedio = parseInt(prompt("Ingrese nota de 0 a 10"));
		} while (isNaN(notaPromedio)|| notaPromedio > 10 || notaPromedio < 0 );
		do {
			edad = parseInt(prompt("Ingrese edad"));
		} while (isNaN(edad) || edad >50 || edad < 18 );
    
    //utilizo un switch y segun el case voy sumando a cada variable
		switch (genero) {
			case "masculino":
				contadorMasculino++;
				acumMasculino = acumMasculino + notaPromedio;
				break;
      case "femenino":
        contadorFemenino++;
        acumFemenino = acumFemenino + notaPromedio;
        break;	
			case "no binario":
				contadorNoBinario++;
				acumNoBinario = acumNoBinario + notaPromedio;
				break;
				
		}
//calculo el mejor promedio de los no masculinos y guardo su nombre
		if(contador == 0 && genero != "masculino" && genero != "no binario"){
			contador++;
			mejorPromedioNoHombreNoBinario = notaPromedio;
			mejorPromedioNoHombre = nombre;
		}
		
//busco al mas joven de los que la cursan libre
		if(contador2 == 0 && cursada == "libre"){
			contador2++;
			nombreJoven=nombre;
			edadJoven = edad;
		}
		else if(edad < edadJoven && cursada == "libre"){
			nombreJoven=nombre;
			edadJoven = edad;
		}
//busco al que cursa mas materias de forma remota, guaro edad y nombre
		if(contador3 == 0 && cursada != "remota"){
			contador3++;
			edadMayorCantMaterias = edad;
			nombreMayorCantMaterias = nombre;
			mayorCantMaterias = cantMaterias;
		}
		else if (cantMaterias > mayorCantMaterias && cursada != "remota"){
			edadMayorCantMaterias = edad;
			nombreMayorCantMaterias = nombre;
			mayorCantMaterias = cantMaterias;
		}
	} while (continuar=confirm("Desea ingresar otro dato?"));

	if(contadorMasculino != 0){
		promedio = acumMasculino / contadorMasculino;
		document.write("promedio por nota masculino :"+promedio+"<br>");
	}
	else if(contadorFemenino!= 0){
		promedio = acumFemenino/ contadorFemenino;
		document.write("promedio por nota femenino :"+promedio+"<br>");
	}
	else if(contadorNoBinario != 0){
		promedio = acumNoBinario / contadorNoBinario;
		document.write("promedio por nota no binario :"+promedio+"<br>");
	}
  if(contador != 0){
		document.write("El nombre mejor promedio no masculino :"+mejorPromedioNoHombre+"<br>");
	}
  if(contador2 != 0){
		document.write("nombre del mas joven de los que la dan libre :"+nombreJoven+"<br>");
	}
	if (contador3 != 0){
		document.write("edad y nombre del que cursa mas materias de forma no remota :"+edadMayorCantMaterias+" "+nombreMayorCantMaterias);
	}
}
