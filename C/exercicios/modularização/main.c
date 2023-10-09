#include <stdio.h>
#include "poligonos.c"

int main(){
    // pro meu funcionar eu tive que  importar o poligonos.c
    // comigo não funcionou importando o poligonos.h
    printf("Perimetro Triangulo: %.2f.\n", calcPerimetroTriangulo(2,3,5));

    printf("Perimetro Retangulo: %.2f.\n", calcPerimetroRetangulo(5,10));

    printf("Perimetro Circulo: %.2f.\n", calcPerimetroCirculo(5));

    printf("Area Triangulo: %.2f.\n", calcAreaTriangulo(10,10));

    printf("Area Retangulo: %.2f.\n", calcAreaRetangulo(2,5));

    printf("Area Circulo: %.2f.\n\n", calcAreaCirculo(5));

}