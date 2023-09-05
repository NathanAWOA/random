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