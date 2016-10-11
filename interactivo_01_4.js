/**
 * Created by pi on 16.10.10.
 */

var main = function ()
{
    "use strict!";

    var add2 = function (  )
    {
        var $tteexxttoo=(".comment-input input").val();

        if( $tteexxttoo.length>=1)
        {
            var $nuevo_comentario = $("<p>").text($tteexxttoo);
            $(".comments").append($nuevo_comentario);
            $(".comment-input input").val("");
        }
    }

    var agregarComentarioDesdeInputBox = function (  )
    {
        var $texto=$(".comment-input input").val();

        if($texto !== "" )
        {
            var $new_comment = $("<p>").text($texto);
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
        }
    }

    $(".comment-input").on("click", function ( event )
    {
        agregarComentarioDesdeInputBox();
    });

    $(".comment-input input").on("keypress", function ( event )
    {
        console.log(event.keyCode);
        if(event.keyCode == 13)
        {
            agregarComentarioDesdeInputBox();
        }
    })

};
$(document).ready(main);