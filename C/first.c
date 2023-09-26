#include<stdio.h>
#define texto "Entrada e saida de dados"

int main() {
    printf("Hello World!\n");
    int x = 2;
    int y = 6;
    int sum = x + y;

    printf("%d \n",sum);
    printf("%s \n", texto);

    int idade = 0;
    float altura = 0.0;
    char nome[50] = "";

    printf("Digite o seu nome: \n");
    scanf("%s", &nome);

    printf("Digite a sua idade: \n");
    scanf("%d", &idade);

    printf("Digite a sua altura: \n");
    scanf("%f", &altura);

    printf("Dados informados: \n");
    printf("Nome: %s. \n", nome);
    printf("Idade: %d. \n", idade);
    printf("Altura: %.2f. \n", altura);
}