/**
 * Created by pi on 16.10.11.
 */
var main = function()
{
    "use strict";

    var $contenido = $("<div>Hola mundo</div>").hide();

    var $masContenido = $("<div>Adios mundo</div>").hide();

    $("body").append($contenido);

    $contenido.slideDown(2000, function(){
        $("body").append($masContenido);
        $masContenido.fadeIn();
    })

}

$(document).ready(main);