/**
 * Created by pi on 16.10.11.
 */

var main = function()
{
    "use strict";

    var $lim = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var $contenido = $("<div class='big'>"+$lim+"</div>").hide();

    $("body").append($contenido);

    var $fadeIn_fadeIn = function (  )
    {
        $contenido.fadeIn(300);

        $('#bin').removeClass('ena');
        $('#bin').addClass('disa');

        $('#bout').removeClass('disa');
        $('#bout').addClass('ena');
    };

    var $fadeOut_fadeOut = function (  )
    {
        $contenido.fadeOut(150);

        $('#bout').removeClass('ena');
        $('#bout').addClass('disa');

        $('#bin').removeClass('disa');
        $('#bin').addClass('ena');
    }


    $("#bin").on("click", function ( event )
    {
        $fadeIn_fadeIn();
    });

    $("#bout").on("click", function ( event )
    {
        $fadeOut_fadeOut();
    })

    $("body").on("keypress", function ( event )
    {
        console.log(event.keyCode);
        if(event.keyCode == 73)
        {
            $fadeIn_fadeIn();
        }
        if(event.keyCode === 79 )
        {
            $fadeOut_fadeOut();
        }
    })

}

$(document).ready(main);