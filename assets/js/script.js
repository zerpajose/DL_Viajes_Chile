/* Parta que funcione el tooltip de bootstrap */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

/* Jquery */

$(document).ready(function(){

  /* Alerta para mostrar al enviar fomulario contacto*/
  $(".boton-formulario").click(function(){
    alert("Su petición de contacto fue enviada con éxito");
  });

  /* cambiar color del menu navbar al hacer scroll en la pagina */
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".navbar-custom").addClass("navbar-change");
    } else {
      $(".navbar-custom").removeClass("navbar-change");
    }
  });
});


