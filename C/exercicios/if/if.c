#include <stdio.h>

int main(){
    float m;
    printf("Insira a nota: \n");
    //scanf precisa do &
    scanf("%f", &m);

    if(m >= 7.0) {
        printf("Aprovado(a)! \n");
    }

    if(m < 7.0) {
        printf("Reprovado(a)! \n");
    }
}