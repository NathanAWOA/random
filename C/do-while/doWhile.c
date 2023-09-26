#include <stdio.h>

int main(){
    int i = 11;

    //assim roda pelo menos uma vez, mesmo se for false
    do {
        printf("%d", i);
        i++;
        printf("\n");
    }while(i <= 10);

}