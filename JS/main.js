const $ = (selector) => document.querySelector(selector)

$("#Top-Text").addEventListener("input", (e) => {
    $(".paragraph-top").innerText = e.target.value
})

$("#Bottom-text").addEventListener("input", (e) => {
    $(".paragraph-bottom").innerText = e.target.value
})

$("#color").addEventListener("input", (e) => {
    $(".Top-text").style.color = e.target.value
})

$("#color").addEventListener("input", (e) => {
    $(".Bottom-text").style.color = e.target.value
})

$("#fondo").addEventListener("input", (e) => {
    $(".Top-text").style.backgroundColor = e.target.value
})

$("#fondo").addEventListener("input", (e) => {
    $(".Bottom-text").style.backgroundColor = e.target.value
})

$("#url").addEventListener("input", (e) => {
    $(".Img-meme").style.backgroundImage = `url(${e.target.value})`
})

$("#fondo-meme").addEventListener("input", (e) => {
    $(".Img-meme").style.backgroundColor = e.target.value
})




