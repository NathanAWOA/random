#include <stdio.h>

int main() {
    float dado = 10;
    printf("Dado antes do incremento: %.2f. \n",dado);

    dado++;
    printf("Dado depois do incremento: %.2f. \n",dado);

    dado--;
    printf("Dado depois do decremento: %.2f. \n",dado);

    dado += 3;
    printf("Dado depois do incremento em 3 unidades: %.2f. \n",dado);

    dado -= 2;
    printf("Dado depois do decremento em 2 unidades: %.2f. \n",dado);

    dado *= 10;
    printf("Dado depois de multiplicar por 10: %.2f. \n",dado);

    dado /= 4;
    printf("Dado depois da divisão por 4: %.2f. \n",dado);
}