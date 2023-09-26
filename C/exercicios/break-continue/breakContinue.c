#include <stdio.h>

int main(){
    int i;
    for(i = 1; i <= 10; i++){
        //nesse caso o if precisa estar antes da msg no console
        //continue no loop pula o comando naquela linha
        if(i == 3){
            continue;
        }

        //break interrompe total
        if(i == 5){
            break;
        }
        printf("\n");
        printf("%d",i);
        printf("\n");
    }
}