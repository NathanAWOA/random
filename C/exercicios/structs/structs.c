#include <stdio.h>
#include <string.h>
#include <locale.h>

#define TAM 50


struct tipo_pessoa {
    int idade;
    float peso;
    char nome[TAM];
};

typedef struct tipo_pessoa tipo_pessoa;

int main(){
    setlocale(LC_ALL, "Portuguese");

    // Criando e inicializando
    tipo_pessoa pes = {24, 96.0, "Nathan"};

    printf("Início: \n");
    printf("pes.idade:%d\n", pes.idade);
    printf("pes.peso: %.2f\n", pes.peso);
    printf("pes.nome: %s\n", pes.nome);

    // atribuindo valores aos campos
    pes.idade = 10;
    pes.peso = 99.99;
    strcpy(pes.nome, "Nhonho");

    printf("\nAlterando os campos via código: \n");
    printf("pes.idade:%d\n", pes.idade);
    printf("pes.peso: %.2f\n", pes.peso);
    printf("pes.nome: %s\n", pes.nome);

    // solicitando inserções via teclado

    printf("\nInsira um número inteiro: \n");
    scanf("%d", &pes.idade);
    printf("Insira um número real: \n");
    scanf("%f", &pes.peso);
    while(getchar() != '\n');
    printf("Insira uma palavra: \n");
    scanf("%s", &pes.nome);

    printf("\nAlterando os campos com dados do usuário: \n");
    printf("pes.idade:%d\n", pes.idade);
    printf("pes.peso: %.2f\n", pes.peso);
    printf("pes.nome: %s\n\n", pes.nome);

}