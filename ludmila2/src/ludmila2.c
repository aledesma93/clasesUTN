/*
 ============================================================================
 Name        : ludmila2.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */


#include <stdio.h>
#include <stdlib.h>


#define ALUMNOS 5

int printArrays(int*pArray, int limite);
int ordenarArrayLudmila(int* pArray,int limite);


int main(void) {
	setbuf(stdout,NULL);

	int respuesta;
	int edades[ALUMNOS]={9,18,15,5,21};


	respuesta= ordenarArrayLudmila(edades,ALUMNOS);
		if(respuesta>0){
			printf("\n\n Iteracion:%d \n\n ", respuesta);
		}

	return EXIT_SUCCESS;
}

int printArrays(int*pArray, int limite){
	int retorno=-1;
	int i;
	if(pArray!=NULL && limite>=0){
		retorno=0;
		for(i=0;i<limite;i++){
			printf("\n indice %d - Valor: %d", i,pArray[i]);
		}
	}
	return retorno;
}

int ordenarArrayLudmila(int* pArray,int limite){
	int flagSwap;
	int i;
	int buffer;
	int retorno=-1;
	int nuevoLimite;
	if(pArray!=NULL && limite>=0)
	{
		nuevoLimite=limite-1;
	do{
		flagSwap=0;
		for(i=0;i<nuevoLimite;i++){

			if(pArray[i]> pArray[i+1]){
				flagSwap=1;
				buffer=pArray[i];
				pArray[i]=pArray[i+1];
				pArray[i+1]=buffer;
			}

		}
		nuevoLimite--;
	}while(flagSwap);


}
	return retorno;
}

