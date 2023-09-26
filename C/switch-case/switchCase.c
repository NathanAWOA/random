#include <stdio.h>

int main(){

    int d;

    printf("Insira um valor de 1 a 7: \n");
    printf("\n");
    scanf("%d", &d);
    printf("\n");

    switch(d){
        case 1: 
            printf("Domingo. \n");
            printf("\n");
            break;
        case 2:
            printf("Segunda-feira. \n");
            printf("\n");
            break;
        case 3:
            printf("Terça-feira. \n");
            printf("\n");
            break;
        case 4:
            printf("Quarta-feira. \n");
            printf("\n");
            break;
        case 5:
            printf("Quinta-feira. \n");
            printf("\n");
            break;
        case 6:
            printf("Sexta-feira. \n");
            printf("\n");
            break;
        case 7:
            printf("Sábado. \n");
            printf("\n");
            break;
        default:
         printf("Valor inválido! \n");
         printf("\n");
         break;
    }
}