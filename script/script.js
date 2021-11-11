// Jquery

// carrossel
$( document ).ready(function () {
    $("#carrossel img:eq(0)").addClass("banner-ativo").show()

setInterval(slide, 3000)

function slide() {
    if ( $(".banner-ativo").next().length ) {
         $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    } else {
         $(".banner-ativo").removeClass().hide()
         $("#carrossel img:eq(0)").addClass("banner-ativo").show()

    }
}

// menu barras
$( document ).ready(function () {
    $("#barras").click(function () {
        $("#menu").toggleClass("menu-ativo")

        // if($("#menu").hasClass("menu-ativo")){
        //     $("#menu").removeClass("menu-ativo")
        // }else{
        //     $("#menu").addClass("menu-ativo")
        // }
    })
})
})


// sub-menu categorias
$( document ).ready(function () {
    $("#menu_categoria").click(function () {
        $("#sub_categoria").toggleClass("menu_sub_categoria")
    })
})

// sub-menu jogos
$( document ).ready(function () {
    $("#jogo").click(function () {
        $("#jogos").toggleClass("menu_jogos")
    })
})


$( document ).ready(function () {    
    let menu = document.getElementById("menu");

    function mostrarMenu() {
        if (menu.style.display == "none") {
            menu.style.display = "flex"
        } else {
            menu.style.display = "none"
        }
    }
})

