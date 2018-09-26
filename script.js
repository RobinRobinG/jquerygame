// Your code here!
$(document).ready(function () {
    var backFunc = function(){
        $('#wrapper').css('background-image', "url("+$(this).attr('data-alt-src')+")")
    };
    // var playerTurn=[];
    var turn = true;

    $('button').hover(backFunc,function(){
        $('#wrapper').css('background-image', 'none');
        console.log("we are off the button");
         }
        );
    $('button').click(function(){
        $(this).parent().html("<img src='img/alex0.png' data-alt-src='img/alex.gif' /><img src='img/chunli0.png' data-alt-src='img/chunli.gif' /><img src='img/felicia0.png' data-alt-src='img/felicia.gif' />");
        backFunc;
        $('h2').text('Select Characters');
    })
    $(document).on('click', 'button', function() {
        //$('.player2').css("border","none");
        //$('.player1').html("<img class ='downarrow' src='img/triangle.png' />");
        $('img').click(function(){
            if(turn){
                $('.player1').html('<img src='+$(this).attr('data-alt-src')+' />');
               // $('.player1').css("border","none");
                $('.player2 img').before("<img class ='downarrow' src='img/triangle.png' />");
                turn = false;
            }else{
                $('.player2').html('<img src='+$(this).attr('data-alt-src')+' />');
                //$('.player2').css("border","none");
                $('.player1 img').before("<img class ='downarrow' src='img/triangle.png' />");
                turn = true;
            }
            
        })
        
    }
      );



    // $('.ninja').click(function(){
    //     $( this ).fadeOut("slow");
    // });
    // $('button').click(function(){
    //     $('.ninja').fadeIn("slow");

    // });


});