//USING AJAX GOOGLE API

$(document).keypress(function(event) {
   
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

    //TEST
    
        const test = event.key;
        
        if(test === "w" || test === "W") {
            $("#among-us").animate({ "top": "-=50px"}, "fast");
            console.log("FUNFOU COM IF");
            console.log("FUNFOU COM CAPSLOCK");
        }

        if(test === "a" || test === "A") {
            $("#among-us").animate({ "left": "-=50px"}, "fast");
            console.log("FUNFOU COM IF");
            console.log("FUNFOU COM CAPSLOCK");
        }

        if(test === "d" || test === "D") {
            $("#among-us").animate({ "left": "+=50px"}, "fast");
            console.log("FUNFOU COM IF");
            console.log("FUNFOU COM CAPSLOCK");
        }
        
        if(test === "s" || test === "S") {
            $("#among-us").animate({ "top": "+=50px"}, "fast");
            console.log("FUNFOU COM IF");
            console.log("FUNFOU COM CAPSLOCK");
        }
        
        console.log(test);

});
