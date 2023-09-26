#include <stdio.h>

int main(){
    int i;
    int f;
    printf("Basta digitar o valor inicial: \n");
    printf("\n");
    scanf("%d", &i);
    printf("\n");

    printf("Valor onde o incrementador deve parar \n");
    printf("\n");
    scanf("%d", &f);
    printf("\n");

    while(i <= f){
        printf("%d \n",i);
        printf("\n");
        i++;
    }
    printf("Okay, até uma próxima");
    printf("\n");
    
    
}