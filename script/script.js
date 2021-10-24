// Jquery

$( document ).ready( function() {

    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")

        // if($("#menu").hasClass("menu-ativo")){
        //     $("#menu").removeClass("menu-ativo")
        // }else{
        //     $("#menu").addClass("menu-ativo")
        // }
    })

})



let recebe = document.getElementById("entrada");

function pesquisa() {
    let digitado = recebe.value;

    console.log(digitado)
}

let menu=document.getElementById("menu");

function mostrarMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "flex"       
    } else{
        menu.style.display = "none"
    }
}

let recebe1 = document.getElementById("entrada768");

function pesquisa1() {
    let digitado1 = recebe1.value;

    console.log(digitado1)
}
