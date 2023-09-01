const screen = document.querySelector("body");

let x = 1;
let y = 1;

let box = document.querySelector("#box");

function movement() { 
    screen.onkeyup = (event) => {
    if (event.key === 'w') {
        console.log("cima");

        box.style.top = `${y}px`;
    }

    if (event.key === 'a') {
        console.log("esquerda");

        box.style.left = `${x}px`;
    }

    if (event.key === 's') {
        console.log("baixo");

        box.style.bottom = `${y}px`;
    }

    if (event.key === 'd') {
        console.log("direita");

        box.style.right = `${x}px`;
    }
};
}
movement();

/*

E SE EU TENTASSE FAZER O FOR E AI EU DETERMINARIA QUE O X E Y TERIAM VALOR 0 E ENQUANTO OS BOTÕES FOREM SENDO APERTADOS ELES VÃO FAZENDO O X++ E Y++.

PROVELMENTE PRA ISSO EU VOU TER QUE FAZER UM FOR PRA CADA UM DELES.
*/