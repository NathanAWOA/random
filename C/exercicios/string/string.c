#include <stdio.h>

#include<stdlib.h>

int main (){
    char s[10];//só se usa 9. o ultimo é pra fechar o array
    printf("Digite algo (scanf convencional): \n");
    scanf("%s", s);
    //esse funfa no c. importante ter esse while
    while (getchar() != '\n');//Clearing the buffer.

    // parece que esse fflush() é do c++
    // fflush(stdin);


    printf("Resultado: %s\n\n", s);

    printf("Digite algo (scanf aprimorado): \n");
    scanf("%9[^\n]s", s);
    while (getchar() != '\n');
    // fflush(stdin);
    
    /*O que tava errado é o fflush(stadin), não sei pq mas ele não tava funfando. usei o while (getchar() != '\n') e foi.*/

    printf("Resultado: %s\n\n", s);
}