#include <stdio.h>

int main(){
    int v[5];

    float m;

    v[0] = 50;
    v[1] = 40;
    v[2] = 30;
    v[3] = 20;
    v[4] = 10;

    m = (v[0] + v[1] + v[2] + v[3] + v[4]) / 5;

    printf("Resultado: %.2f\n",m);
    printf("\n");

    //O array já ta ali em cima, então esse abaixo não importa
    //int v[5] = {10, 20, 30, 40, 50};

    float s = 0;

    for(int i = 0; i < 5; i++){
        s += v[i];
    }

    printf("Resultado: %.2f\n", s/5);
    printf("\n");

    int n[5];

    for(int i = 0; i < 5; i++) {
        printf("Insira um dado: \n");
        scanf("%d", &n[i]);
        printf("\n");
    }

    printf("Dados inseridos: \n");
    for(int i = 0; i < 5; i++){
        printf("%d", n[i]);
    }
    printf("\n");
    printf("\n");
}