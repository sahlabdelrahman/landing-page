$(document).ready(function () {

    
    // Start popup main video

    $(window).on('load',function(){
        $('#popup_main_video').modal('show');
    });

    $('.follow_up').click(function (){
        $('#popup_main_video').modal('hide');
    });


});
