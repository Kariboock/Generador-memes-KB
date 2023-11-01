const $ = (selector) => document.querySelector(selector)

$("#Top-Text").addEventListener("input", (e) => {
    $(".paragraph-top").innerText = e.target.value
})

$("#Bottom-text").addEventListener("input", (e) => {
    $(".paragraph-bottom").innerText = e.target.value
})


$("#color").addEventListener("input", (e) => {
    $(".Top-text").style.color = e.target.value
    $(".Bottom-text").style.color = e.target.value
})

$("#fondo").addEventListener("input", (e) => {
    $(".Top-text").style.backgroundColor = e.target.value
    $(".Bottom-text").style.backgroundColor = e.target.value
})

$("#font").addEventListener("input", (e) => {
    $(".paragraph-top").style.fontFamily = e.target.value
    $(".paragraph-bottom").style.fontFamily = e.target.value
})

$("#number").addEventListener("input", (e) => {
    $(".paragraph-top").style.fontSize = `${e.target.value}px`
    $(".paragraph-bottom").style.fontSize = `${e.target.value}px`
})

$("#displayTopText").addEventListener("input", (e) => {
    if (e.target.checked) {
        $(".paragraph-top").style.display = "none"
    } else{
        $(".paragraph-top").style.display = "block"
    }
})

$("#displayBottomText").addEventListener("input", (e) => {
    if (e.target.checked) {
        $(".paragraph-bottom").style.display = "none"
    } else{
        $(".paragraph-bottom").style.display = "block"
    }
})

$("#button-left").addEventListener("click", (e) => {
    $(".paragraph-top").style.textAlign = "left" 
    $(".paragraph-bottom").style.textAlign = "left"
})

$("#button-center").addEventListener("click", (e) => {
    $(".paragraph-top").style.textAlign = "center" 
    $(".paragraph-bottom").style.textAlign = "center"
})

$("#button-right").addEventListener("click", (e) => {
    $(".paragraph-top").style.textAlign = "right" 
    $(".paragraph-bottom").style.textAlign = "right"
})

$("#Transparent-background").addEventListener("input", (e) => {
    if (e.target.checked) {
        $(".Top-text").style.display = "none"
        $(".Bottom-text").style.display = "none"
    } else{
        $(".Top-text").style.display = "block"
        $(".Bottom-text").style.display = "block"
    }
})

$("#button-ninguno").addEventListener("click", (e) => {
    $(".paragraph-top").style.webkitTextStroke = "0px" 
    $(".paragraph-bottom").style.webkitTextStroke = "0px"
})

$("#button-claro").addEventListener("click", (e) => {
    $(".paragraph-top").style.webkitTextStroke = "2px" 
    $(".paragraph-bottom").style.webkitTextStroke = "2px"
})

$("#button-oscuro").addEventListener("click", (e) => {
    $(".paragraph-top").style.webkitTextStroke = "4px" 
    $(".paragraph-bottom").style.webkitTextStroke = "4px"
})

$("#spacing").addEventListener("input", (e) => {
    $(".paragraph-top").style.height = "height++"
    $(".paragraph-bottom").style.height = "height++"
})

$(".button-image").addEventListener("click", (e) => {
    $(".Text-editor").style.display = "none"
    $(".Image-editor").style.display = "block"
})

$(".button-text").addEventListener("click", (e) => {
    $(".Image-editor").style.display = "none"
    $(".Text-editor").style.display = "block"
})


$("#url").addEventListener("input", (e) => {
    $(".Img-meme").style.backgroundImage = `url(${e.target.value})`
})

$("#fondo-meme").addEventListener("input", (e) => {
    $(".Img-meme").style.backgroundColor = e.target.value
})

const FiltersMeme = () => {
    $(".Img-meme").style.filter = `Brightness(${$("#Brightness").value}) Opacity(${$("#Opacity").value}) Contrast(${$("#Contrast").value}%) Blur(${$("#Blur").value}px) Grayscale(${$("#Grayscale").value}%) Sepia(${$("#Sepia").value}%) Invert(${$("#Invert").value})`
}

$("#Brightness").addEventListener("input", FiltersMeme)
$("#Opacity").addEventListener("input", FiltersMeme)
$("#Contrast").addEventListener("input", FiltersMeme)
$("#Blur").addEventListener("input", FiltersMeme)
$("#Grayscale").addEventListener("input", FiltersMeme)
$("#Sepia").addEventListener("input", FiltersMeme)
// $("#hue-rotation").addEventListener("input", FiltersMeme)
// $("#Saturation").addEventListener("input", FiltersMeme)
$("#Invert").addEventListener("input", FiltersMeme)

$(".btn-ResetFilters").addEventListener("click",() => {
    $("#Brightness").value ="1"
    $("#Opacity").value ="1"    
    $("#Contrast").value ="100"
    $("#Blur").value ="0"
    $("#Grayscale").value ="0"
    $("#Sepia").value ="0"
    $("#Hue").value ="0"
    $("#Saturation").value ="100"
    $("#Invert").value = "0"
    $(".Img-meme").style.filter ="none"
})

$("#Levels").addEventListener("input", (e) => {
    $(".Img-meme").style.backgroundBlendMode = e.target.value    
})


const downloadMeme = () => {
    domtoimage.toBlob($(".Container-meme")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}

$(".download").addEventListener("click",downloadMeme)

$(".Mode-Switching").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute ("data-theme")
    if (currentTheme) {
        $("body").removeAttribute("data-theme" , "light-theme")
    } else { 
        $("body").setAttribute("data-theme" , "light-theme")
    }  

    $("#button-DarkMode").classList.toggle("hidden") 
    $("#button-ClearMode").classList.toggle("hidden") 
  
})


