$(document).ready(main);
var menuoculto=1;

function main(){
    $('.menu_bar').click(function(){
        if(menuoculto==1){
            $('nav').animate({
                left:'0'
            });
            menuoculto = 0;
        }
        else{
            $('nav').animate({
                left:'-100%'
            });
            menuoculto=1;
        }
    });

    $('.subMenu').click(function(){
        $(this).children('.children').slideToggle();
        
    });
}