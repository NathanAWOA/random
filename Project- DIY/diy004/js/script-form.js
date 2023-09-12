function firstStage(periodo) {
    const prof = document.querySelector("#prof");
    const profExtra = document.querySelector("#prof-extra");
    const materias = document.querySelector("#materias");
    const confirmBtn = document.querySelector("#confirm");
    const manha = document.querySelector("#manha");
    const tarde = document.querySelector("#tarde");
    const noite = document.querySelector("#noite");
 
     periodo = false;

    confirmBtn.addEventListener("click", () => {
        
        if(manha.checked === true && tarde.checked === false && noite.checked === false) {
            periodo = `${manha.value}`;

            console.log(`Aula de ${materias.value} dos professores ${prof.value} e ${profExtra.value} no período da ${periodo}`);

        } else if(manha.checked === true && tarde.checked === true && noite.checked === false) {
            periodo = `${manha.value} e da ${tarde.value}`;

            console.log(`Aula de ${materias.value} dos professores ${prof.value} e ${profExtra.value} no período da ${periodo}`);

        }else if(manha.checked === true && tarde.checked === true && noite.checked === true) {
            periodo = `${manha.value}, ${tarde.value} e ${noite.value}`;

            console.log(`Aula de ${materias.value} dos professores ${prof.value} e ${profExtra.value} no período da ${periodo}`);

        }else if(manha.checked === true && tarde.checked === false && noite.checked === true) {
            periodo = `${manha.value} e da ${noite.value}`;

            console.log(`Aula de ${materias.value} dos professores ${prof.value} e ${profExtra.value} no período da ${periodo}`);

        }

        if(manha.checked === false && tarde.checked === true && noite.checked === false) {
            periodo = `${tarde.value}`;

            console.log(`Aula de ${materias.value} dos professores ${prof.value} e ${profExtra.value} no período da ${periodo}`);

        } else if(manha.checked === false && tarde.checked === true && noite.checked === true) {
            periodo = `${tarde.value} e da ${noite.value}`;

            console.log(`Aula de ${materias.value} dos professores ${prof.value} e ${profExtra.value} no período da ${periodo}`);

        }

        if(manha.checked === false && tarde.checked === false && noite.checked === true) {
            periodo = `${noite.value}`;

            console.log(`Aula de ${materias.value} dos professores ${prof.value} e ${profExtra.value} no período da ${periodo}`);

        }

});
};

firstStage();