/**
 * Created by pi on 16.10.10.
 */

var main = function ()
{
    "use strict!";

    $(".comment-input").on("click", function ( event )
    {
        var $new_comment = $("<p>");

        $new_comment.text("This is a new Comment");

        /*
        $(".comments").append("<p>Este es un nuevo comentario</p>")
        */

        $(".comments").append($new_comment);

    });

};
$(document).ready(main);