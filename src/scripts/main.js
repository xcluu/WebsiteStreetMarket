$(window).on("load", function(){
    console.log("test");

    $(".hamburger").on("click", function(){

        $(this).toggleClass("is-active");
        $(".mobile-nav").toggleClass("open");
        $("body").toggleClass("locked");        
        if($(".mobile-nav").hasClass("open")) {
            $(".mobile-nav").fadeIn(0);
            console.log("block-test");
            $(".mobile-nav-block:first-child").fadeIn(200);
            $(".mobile-nav-block:nth-child(2)").delay(150).fadeIn(200);
            $(".mobile-nav-block:nth-child(3)").delay(350).fadeIn(200);
            $(".mobile-nav-block:nth-child(4)").delay(550).fadeIn(200);
            $(".mobile-nav-info").delay(750).fadeIn(200);
        }
        else {
            $(".mobile-nav").fadeOut(500);
            $(".mobile-nav-block").fadeOut(500);
            $(".mobile-nav-info").fadeOut(500);
        }
    });
    $("#loading-container").delay(2000).fadeOut("slow");
});

$(".hamburger").on("click", function(){

});

$(document).ready(function() {
    $(".mobile-nav").fadeOut(0);
    $(".mobile-nav-block").fadeOut(0);
})