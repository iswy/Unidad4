/**
 * Created by pi on 16.10.10.
 */

var main = function ()
{
    "use strict!";

    $(".comment-input").on("click", function ( event )
    {
        $(".comments").append("<p>Este es un nuevo comentario</p>")
    });

};
$(document).ready(main);