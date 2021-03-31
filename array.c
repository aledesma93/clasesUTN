/*
 * array.c
 *
 *  Created on: 30 mar. 2021
 *      Author: ledes
 */
#include <stdio.h>
#include <stdlib.h>


int arr_calcularMaximoInt(int array[],int limite, int* resultado){

	int mayor;
	int retorno=-1;
	int i;

	for(i=0;i<limite;i++){
	     scanf("%d",array[i]);
	}
	mayor=array[0];

	for(i=1;i<limite;i++){
		if(array[i]>mayor){
			mayor=array[i];
		}
		retorno=0;
	}
	resultado=mayor;


}
int arr_calcularMinimoInt(int* array,int limite, int* resultado){
		int menor;
		int retorno=-1;
		int i;

		for(i=0;i<limite;i++){
		     scanf("%d",array[i]);
		}
		menor=array[0];

		for(i=1;i<limite;i++){
			if(array[i]<menor){
				menor=array[i];
			}
			retorno=0;
		}
		resultado=menor;

}
int arr_calcularPromedioInt(int* array,int limite, float* resultado){





}
int arr_calcularSumaInt(int* array,int limite, float* resultado){

				int suma;
				int retorno=-1;
				int i;

				for(i=0;i<limite;i++){
				     scanf("%d",array[i]);
				}


				for(i=1;i<limite;i++){
					if(array[i]<limite){
						suma=suma+array[i];
					}
					retorno=0;
				}
				resultado=suma;


}














