#include <stdio.h>

int main(){
    int mat1[3][3];

    mat1[0][0] = 1;
    mat1[0][1] = 2;
    mat1[0][2] = 3;

    mat1[1][0] = 4;
    mat1[1][1] = 5;
    mat1[1][2] = 6;

    mat1[2][0] = 7;
    mat1[2][1] = 8;
    mat1[2][2] = 9;

    printf("Imprimindo a primeira linha (mat1): \n");
    printf("%d %d %d\n\n", mat1[0][0], mat1[0][1], mat1[0][2]);

    printf("Imprimindo a segunda linha (mat1): \n");
    printf("%d %d %d\n\n", mat1[1][0], mat1[1][1], mat1[1][2]);

    printf("Imprimindo a terceira linha (mat1): \n");
    printf("%d %d %d\n\n", mat1[2][0], mat1[2][1], mat1[2][2]);

    int mat2[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
    int i, j;

    printf("Imprimindo a primeira linha (mat2): \n");
    for(j = 0; j < 3; j++){
        printf("%d ", mat2[0][j]);
    }

    printf("\n\n");

    printf("Imprimindo a matriz toda (mat2): \n");
    for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            printf("%d ", mat2[i][j]);
    }
        printf("\n\n");
    }

}