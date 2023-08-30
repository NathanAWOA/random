document.addEventListener("DOMContentLoaded", () => {

    //click on the button to play audio
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", function() {
        //console.log("clicou");
        
        const audio = new Audio();
        audio.src = "e-o-pix.mp3";
        audio.play();
    });
});




