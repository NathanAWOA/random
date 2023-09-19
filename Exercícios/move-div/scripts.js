const move1 = document.querySelector("#move1")
const move2 = document.querySelector("#move2")
const move3 = document.querySelector("#move3")
const move4 = document.querySelector("#move4")

const piece1 = move1.querySelector("#piece-1")
const piece2 = move1.querySelector("#piece-2")
const piece3 = move1.querySelector("#piece-3")
const piece4 = move1.querySelector("#piece-4")

function onDrag({movementX, movementY}){
    let getStyle1 = window.getComputedStyle(move1)
    let getStyle2 = window.getComputedStyle(move2)
    let getStyle3 = window.getComputedStyle(move3)
    let getStyle4 = window.getComputedStyle(move4)

    let left1 = parseInt(getStyle1.left)
    let top1 = parseInt(getStyle1.top)

    let left2 = parseInt(getStyle2.left)
    let top2 = parseInt(getStyle2.top)

    let left3 = parseInt(getStyle3.left)
    let top3 = parseInt(getStyle3.top)

    let left4 = parseInt(getStyle4.left)
    let top4 = parseInt(getStyle4.top)

    move1.style.left = `${left1 + movementX}px`
    move1.style.top = `${top1 + movementY}px`
    
    move2.style.left = `${left2 + movementX}px`
    move2.style.top = `${top2 + movementY}px`
    
    move3.style.left = `${left3 + movementX}px`
    move3.style.top = `${top3 + movementY}px`

    move4.style.left = `${left4 + movementX}px`
    move4.style.top = `${top4 + movementY}px`

    console.log(left1)
    console.log(top1)

    console.log(left2)
    console.log(top2)

    console.log(left3)
    console.log(top3)

    console.log(left4)
    console.log(top4)
}


function movingElements() {

    piece1.addEventListener("mousedown", () => {
        piece1.addEventListener("mousemove", onDrag)
    
       
    })
    document.addEventListener("mouseup", () => {
        piece1.removeEventListener("mousemove", onDrag)
    })

    piece2.addEventListener("mousedown", () => {
        piece2.addEventListener("mousemove", onDrag)
    
       
    })
    document.addEventListener("mouseup", () => {
        piece2.removeEventListener("mousemove", onDrag)
    })

    piece3.addEventListener("mousedown", () => {
        piece3.addEventListener("mousemove", onDrag)
    
       
    })
    document.addEventListener("mouseup", () => {
        piece3.removeEventListener("mousemove", onDrag)
    })

    piece4.addEventListener("mousedown", () => {
        piece4.addEventListener("mousemove", onDrag)
    
       
    })
    document.addEventListener("mouseup", () => {
        piece4.removeEventListener("mousemove", onDrag)
    })
}

movingElements();