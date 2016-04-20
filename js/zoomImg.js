(function ( $ ) 
{

    $.fn.imgZoom = function( options ) 
    {             
        var settings = $.extend({
            escalaX :               1.4,
            escalaY:                1.4,
            rotacion:               '25deg',
            velAnimacionEntrada:    '1.4s',
            velAnimacionSalida:     '.5s',
            linAnimacion:           'ease-in'
        }, options );   
        
        //this.css('border', '1px solid green');        yo: ésta forma a veces da problemas porque no afecta a todos los elementos  
        
        //Inicializar cada uno de los elementos 
        this.each(function () 
        {     
             $(this).css('border', '1px solid green');       

        });                         
            
        this.hover(function()
        {
            $(this).css({
                //'transition' : 'all 1s ease-in', forma normal, abajo concatenado con los var settings
                //'transition' : 'all ' + settings.velAnimacionEntrada + ' ease-in',
                'transition' : 'all ' + settings.velAnimacionEntrada + ' ' + settings.linAnimacion,
                //'transform'  : 'rotateY(45deg) scale(1.5, 1.5)',
                //'transform'  : 'rotateY(45deg) scale(' + settings['escalaX']+ ', 1.5)',
                'transform'  : 'rotateY(' + settings.rotacion + ') scale(' + settings['escalaX']+ ',' + settings.escalaY + ')'
                //'transform'  : 'rotateY(45deg)'
            });
        });
            
        this.mouseleave(function()
        {
            $(this).css({
                //'transition' : 'all .5s ease-out', 
                //'transition' : 'all ' + settings.velAnimacionSalida + ' ease-out',
                'transition' : 'all ' + settings.velAnimacionSalida + ' ' + settings.linAnimacion,
                'transform'  : 'rotateY(0deg) scale(1, 1)'
                //'transform'  : 'rotateY(-45deg)'
            });

        });                   
        
        return this;                                  
    }  
    
}( jQuery ));
