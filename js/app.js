function flipback() {
    $(".flipcard").removeClass("flipactive");
    $(this).find(".backimg").css("transform", "rotateY(180deg)");
};

function delayout() {
    window.setTimeout(flipback, 2000);
}
$(".flipcard").click(function() {

    setTimeout(function() {
        if ($(".logo").css("transform") == 'none') {

        } else {
            $(".logo").css("transform", "");
            $(".flipcard").removeClass("flipactive");
            $(".backimg").css("transform", "rotateY(180deg)")
        }
    }, 5000);
    //alert($( this ).css( "transform" ));
    if ($(this).find(".logo").css("transform") == 'none') {

        $(this).find(".logo").css("transform", "rotateY(180deg)");
        $(this).find(".backimg").css("transform", "");



    } else {
        $(this).find(".logo").css("transform", "");
        $(".logo").css("transform", "");
        $(".flipcard").removeClass("flipactive");
        $(".backimg").css("transform", "rotateY(180deg)")
    }
});


$(".flipcard").hover(function() {

}, function() {
    if ($(this).find(".logo").css("transform") == 'none') {

    } else {
        $(this).find(".logo").css("transform", "");
        $(".flipcard").removeClass("flipactive");
        $(this).find(".backimg").css("transform", "rotateY(180deg)")
    }
});

$(window).resize(function() {

    $(".backimg").css("margin-top", "-" + $(".logo").height()+ "px")
    $(".backimg").width($(".logo").width());
    $(".backimg").height($(".logo").height());
    $(".backimg").css("margin-left", ($(".cardnav").width() - $(".backimg").width()) / 2 + "px");

});


$(window).ready(function() {
   $(".mobilecontact").height($(".mobilelogo").height);
   $("#Shop1").swiperight(function() {
      $(this).carousel('prev');
    });
    $("#Shop1").click(function() {
      $(this).carousel('cycle');
    });
   $("#Shop1").swipeleft(function() {
      $(this).carousel('next');
   });
   $("#Shop2").swiperight(function() {
      $(this).carousel('prev');
    });
    $("#Shop2").click( function() {
      $(this).carousel('cycle');
    });
   $("#Shop2").swipeleft(function() {
      $(this).carousel('next');
   });
    $(this).find(".loader").fadeOut("slow", function() {
        $(".loader").css("display", "none")
        $(".backimg").css("transform", "rotateY(180deg)");
        $(".contentmobile").fadeIn("slow")
        $(".content").fadeIn("slow", function() {
            $(".backimg").css("margin-top", "-" + $(".logo").height() + "px");
            $(".backimg").width($(".logo").width());
            $(".backimg").height($(".logo").height());
            $(".backimg").css("margin-left", ($(".cardnav").width() - $(".backimg").width()) / 2 + "px");
            $(this).find(".contact").fadeIn("slow", function() {

            })
        });
    })
});
