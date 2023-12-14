$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#wrapper').fadeOut();
     }
    else
     {
      $('#wrapper').fadeIn();
     }
    });