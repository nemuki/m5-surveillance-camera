$(document).ready(function() {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        //i.e. apply safari class via jquery
        $(".navbar").addClass("fancy");
    }

    if ($("#header-container").length > 0) {
        window.addEventListener("scroll", function() {
            if ($(window).scrollTop() > $("#hero-container").height()) {
                $("body").addClass("page-scrolled");
                $(".navbar").removeClass("clearbg");
            } else {
                $("body").removeClass("page-scrolled");
                $(".navbar").addClass("clearbg");
            }
        }, { passive: true });
    }
    console.log(window.location.pathname);
});
    