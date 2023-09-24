const span = document.querySelector("span")
const btn = document.querySelector("#btn")
const txt = document.querySelector("#text")

btn.addEventListener("click", function(e) {
    e.preventDefault()
    msg = text.value
    x = document.createElement('td')
    x.append(msg)
    span.appendChild(x)
    console.log(msg)
})