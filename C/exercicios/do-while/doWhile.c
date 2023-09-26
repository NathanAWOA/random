#include <stdio.h>

int main(){
    int i = 11;

    //não deveria rodar por causa do valor de i
    //porem o do-while faz rodar pelo menos uma vez
    do {
        printf("%d", i);
        i++;
        printf("\n");
    }while(i <= 10);

}