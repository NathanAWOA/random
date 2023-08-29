document.addEventListener("DOMContentLoaded", () => {
    
    const btnYep = document.querySelector("#yep");
    const btnNot = document.querySelector("#btn-not");
    const btnCopy = document.querySelector("#copy");
    const pixKey = ["e76d0f33-4849-4014-b2ff-2ca8dc97d1a6",
    "Chama no pix filhão"];

    btnNot.addEventListener("mouseover", () => {
        
        const x = Math.floor(Math.random() * (window.innerWidth - btnNot.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - btnNot.clientHeight));


        btnNot.style.position = "absolute";
        btnNot.style.left = `${x}px`;
        btnNot.style.top = `${y}px`;
    });

    btnYep.addEventListener("click", function (eventoDeClick) {
        window.location.href = "qr.jpeg";
    });

    //eventoDeClick();
    
    //copy btn
    btnCopy.addEventListener("click", (e) => {
        e.preventDefault; 

        //console.log(pixKey[0]);
        navigator.clipboard.writeText(pixKey[0]);
    });
});