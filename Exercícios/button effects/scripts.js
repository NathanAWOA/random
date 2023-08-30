document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("#btn");

    btn.addEventListener("click", function() {
        //console.log("clicou");
        
        const audio = new Audio();
        audio.src = "e-o-pix.mp3";
        audio.play();
    });
    
});




