//USING AJAX GOOGLE API

$(document).keypress(function(event) {

    //test = event.target;

    //TEST
        
        const amongas = document.querySelector("#amongas");
        const top = document.querySelector("#top");
        const bottom = document.querySelector("#bottom");
        const left = document.querySelector("#left");
        const right = document.querySelector("#right");

        const test = event.key;

        if(test === "w" || test === "W") {
            top.style.opacity = 1;
            bottom.style.opacity = 0;
            left.style.opacity = 0;
            right.style.opacity = 0;
            
            $(amongas).animate({ "top": "-=50px"}, "fast");
            console.log("CIMA");
            console.log("FUNFOU COM IF");
   
        }

        if(test === "a" || test === "A") {
            top.style.opacity = 0;
            bottom.style.opacity = 0;
            left.style.opacity = 1;
            right.style.opacity = 0;

            $(amongas).animate({ "left": "-=50px"}, "fast");
            console.log("DIREITA");
            console.log("FUNFOU COM IF");

        }

        if(test === "d" || test === "D") {
            top.style.opacity = 0;
            bottom.style.opacity = 0;
            left.style.opacity = 0;
            right.style.opacity = 1;

            $(amongas).animate({ "left": "+=50px"}, "fast");
            console.log("ESQUERDA");
            console.log("FUNFOU COM IF");

        }
        
        if(test === "s" || test === "S") {
            top.style.opacity = 0;
            bottom.style.opacity = 1;
            left.style.opacity = 0;
            right.style.opacity = 0;

            $(amongas).animate({ "top": "+=50px"}, "fast");
            console.log("BAIXO");
            console.log("FUNFOU COM IF");

        }
        
        console.log(test);

});
