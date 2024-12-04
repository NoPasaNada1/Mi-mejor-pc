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
