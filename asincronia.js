/**
 * Created by pi on 16.10.11.
 */
var main = function()
{
    "use strict";

    var $contenido = $("<div>Hola mundo</div>").hide();

    $("body").append($contenido);

    $contenido.slideDown(299);
}