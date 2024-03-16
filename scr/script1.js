let options = document.getElementById("cardapio")
let btnMenu = document.querySelector(".buttonMenu a")

btnMenu.addEventListener("click", () => {
    if(options.style.display === "none"){
        options.style.display = "block"
    }else{
        options.style.display = "none"
    }
})
