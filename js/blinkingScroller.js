$(document).ready(function()
{
    var t = 0;
    $("#blinking-scroller").children().each(function() {
        var element = $(this);
        setTimeout(
            setInterval(function() {
                var defaultOpacity = element.css("opacity");
                element
                .animate({
                    opacity: 1
                }, 1000)
                .animate({
                    opacity: .3
                }, 1000)
                .animate({
                    opacity: defaultOpacity
                });
        }, t), t);
        t += 500;
    });
});
