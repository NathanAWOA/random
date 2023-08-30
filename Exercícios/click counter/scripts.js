document.addEventListener("DOMContentLoaded", () => {

    //click counter 
    const btnCounter = document.querySelector("#counter");
    var clickNum = document.querySelector("#click-number");
    var value = clickNum.innerHTML;

    btnCounter.addEventListener("click", () => {
        ++value;

        document.querySelector("#click-number").innerHTML = value;
        
    
        var clicks = [`${value}`];
        console.log(clicks);

    });

});
