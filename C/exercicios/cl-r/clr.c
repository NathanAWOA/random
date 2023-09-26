#include <stdio.h>

int main(){
    printf("Conjunção && = e \n");
    printf("\n");
    printf("Disjunção || = ou \n");
    printf("\n");
    printf("Negação ! = não lógico \n");
    printf("\n");
    printf("Só lembrando, que IF continua o código que vem depois dele, ou seja, se o valor colocado puder dar true para todas as opções ele vai rodar todos os IFs e enviar todas as mensagens deles. Então fica ligeiro \n");
    printf("\n");

    float m;

    printf("Digite sua nota: \n");
    printf("\n");
    scanf("%f", &m);
    printf("\n");

    //claramente não vai funfar
    if(m >= 7.0 && m < 10.0){
        printf("God, meu mano! \n");
        printf("\n");
    } else {
        printf("Tu tá ramelando, parceiro \n");
        printf("\n");
    }
}