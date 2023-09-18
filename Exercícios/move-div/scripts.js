const container = document.querySelector("#container")
teste = container.querySelector("header")

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(container)
    let left = parseInt(getStyle.left)
    let top = parseInt(getStyle.top)

    container.style.left = `${left + movementX}px`
    container.style.top = `${top + movementY}px`

    console.log(left)
    console.log(top)
}

teste.addEventListener("mousedown", () => {
    teste.addEventListener("mousemove", onDrag)

   
})

document.addEventListener("mouseup", () => {
    teste.removeEventListener("mousemove", onDrag)
})
