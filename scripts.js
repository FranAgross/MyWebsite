$(document).ready(function(){
    $('#boton').click(function (){
        $('html,body').animate({scrollTop:$('section').height()}, 1000);
        return false;
    })
    });