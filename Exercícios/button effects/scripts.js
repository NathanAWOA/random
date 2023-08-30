document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("#btn");

    btn.addEventListener("click", function() {
        //console.log("clicou");
        
        const audio = new Audio();
        audio.src = "e-o-pix.mp3";
        audio.play();
    });

    const btnCounter = document.querySelector("#counter");
    
    btnCounter.addEventListener("click", () => {
        var clickNum = document.querySelector("#click-number");
        var value = clickNum.innerHTML;

        ++value;

        document.querySelector("#click-number").innerHTML = value;
    })

    /*
    function clickCounter() {
        
    }
    */
});




