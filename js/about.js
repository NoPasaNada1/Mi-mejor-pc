let btnMenu = document.getElementById("menuBtnContenedor");
let menu = document.querySelector(".menu");
let swMenu = false;

btnMenu.addEventListener("click", function(){
    btnMenu.style.zIndex = "100";
    if(swMenu){
        menu.style.display = "none";
        swMenu = false;
    }else{
        menu.style.display = "flex";
        swMenu = true;
    }
});

//Desplegar y ocultar menú de redes sociales
let redesSpan = document.getElementById("redesSpan");
let redesActive = document.getElementById("redesActive");
let swRedes = false;

redesSpan.addEventListener("click", function(){
    if(swRedes){
        redesActive.style.display = "none";
        swRedes = false;
    }else{
        redesActive.style.display = "flex";
        swRedes = true;
    }
});
