const direction = document.querySelector("#direction");
const image = document.querySelector("#inicial");
        
direction.forEach((car) => {
    car.addEventlistner("keyup", (e) => {
        console.log(e);

        direction.forEach((car) => 
            car.querySelector(".car").classList.remove("selected")
        );

        const movement = e.target;

        const id = movement.getAttribute("id");

        movement.querySelector(".car").classList.add("selected");

        image.classList.toggle("changing");
        image.setAttribute("src", `img/car-${id}.png`);
    });
            
});

//USING AJAX GOOGLE API

$(document).keypress(function(event) {

    //TEST
        test = event.target;

        /*
        if(test === "w" || test === "W") {
            $("#right").animate({ "top": "-=50px"}, "fast");
            console.log("CIMA");
            console.log("FUNFOU COM IF");
   
        }

        if(test === "a" || test === "A") {
            $("#among-us").animate({ "left": "-=50px"}, "fast");
            console.log("DIREITA");
            console.log("FUNFOU COM IF");

        }

        if(test === "d" || test === "D") {
            $("#among-us").animate({ "left": "+=50px"}, "fast");
            console.log("ESQUERDA");
            console.log("FUNFOU COM IF");

        }
        
        if(test === "s" || test === "S") {
            $("#among-us").animate({ "top": "+=50px"}, "fast");
            console.log("BAIXO");
            console.log("FUNFOU COM IF");

        }
        */
        console.log(test);

           
    //NÃO PRECISO MAIS DO SWITCH
    /*
    switch(event.which) {
        case 119:
            $("#tecla").text("W"); //tecla W
            $("#among-us").animate({ "top": "-=50px"}, "fast");

            console.log("CIMA");
        break;

        case 97:
            $("#tecla").text("A"); //tecla A
            $("#among-us").animate({ "left": "-=50px"}, "fast");
            
            console.log("ESQUERDA");
        break;

        case 100:
            $("#tecla").text("D"); //tecla D
            //$("#among-us").animate({ "left": "+=50px"}, "fast");

            console.log("DIREITA");
        break;

        case 115:
            $("#tecla").text("S"); //tecla S
            $("#among-us").animate({ "top": "+=50px"}, "fast");

            console.log("BAIXO");
        break;
    }
    */

});
