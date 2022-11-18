$(window).scroll(function(){
        
    if($(document).scrollTop() >= 400){// se a rolagem passar de 200px esconde o elemento
        
        $('header').fadeOut();

    } else { // senão ele volta a ser visivel
    
        $('header').fadeIn(); // Mostra usando fadeIn
        
    }

});