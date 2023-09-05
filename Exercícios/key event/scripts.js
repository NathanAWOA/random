//USING AJAX GOOGLE API

$(document).keypress(function(event) {

    //test = event.target;

    //TEST
        
        const car = document.querySelector("#car");
        const top = document.querySelector("#top");
        const bottom = document.querySelector("#bottom");
        const left = document.querySelector("#left");
        const right = document.querySelector("#right");

        const direction = event.key;

        if(direction === "w" || direction === "W") {
            top.style.opacity = 1;
            bottom.style.opacity = 0;
            left.style.opacity = 0;
            right.style.opacity = 0;
            
            $(car).animate({ "top": "-=50px"}, "fast");
            console.log("CIMA");
        }

        if(direction === "a" || direction === "A") {
            top.style.opacity = 0;
            bottom.style.opacity = 0;
            left.style.opacity = 1;
            right.style.opacity = 0;

            $(car).animate({ "left": "-=50px"}, "fast");
            console.log("DIREITA");
        }

        if(direction === "d" || direction === "D") {
            top.style.opacity = 0;
            bottom.style.opacity = 0;
            left.style.opacity = 0;
            right.style.opacity = 1;

            $(car).animate({ "left": "+=50px"}, "fast");
            console.log("ESQUERDA");
        }
        
        if(direction === "s" || direction === "S") {
            top.style.opacity = 0;
            bottom.style.opacity = 1;
            left.style.opacity = 0;
            right.style.opacity = 0;

            $(car).animate({ "top": "+=50px"}, "fast");
            console.log("BAIXO");
        }
        
        console.log(direction);

});