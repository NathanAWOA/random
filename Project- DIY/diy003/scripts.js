document.addEventListener("DOMContentLoaded", () => {
    
    const btnNot = document.querySelector("#btn-not");

    btnNot.addEventListener("mouseover", () => {
        
        const x = Math.floor(Math.random() * (window.innerWidth - btnNot.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - btnNot.clientHeight));


        btnNot.style.position = "absolute";
        btnNot.style.left = `${x}px`;
        btnNot.style.top = `${y}px`;
    });

});