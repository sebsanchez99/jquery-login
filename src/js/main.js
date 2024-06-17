// Script para funcionalidad de mostrar/ocultar contenedor de inicio de sesión
$(document).ready(function() {
    // Esconde el contenedor de inicio de sesión
    $('.login-container').hide();

    $('.bxs-plus-circle').click(function () { 
        // Cambia las clases de los iconos
        $(this).toggleClass('bx bxs-plus-circle bx bxs-minus-circle');
        $('.login-container').slideToggle();  
    });
})
