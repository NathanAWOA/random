#include <stdio.h>


int main(){
    float A, B, soma, subtr, mult;
    float divis;

    printf("Digite o primeiro valor: \n");
    scanf("%f", &A);
    printf("Digite o segundo valor: \n");
    scanf("%f", &B);

    soma = A + B;
    subtr = A - B;
    mult = A * B;
    divis = A / B;

    printf("Resultados: \n");
    printf("Soma: %.2f \n",soma);
    printf("Subtração: %.2f \n",subtr);
    printf("Multiplicação: %.2f \n",mult);
    printf("Divisão: %.2f \n",divis);
}