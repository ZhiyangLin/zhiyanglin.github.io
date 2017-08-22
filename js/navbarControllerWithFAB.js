$(document).ready(function()
{
    // Animate FAB onclick opening navbar
    $("#fab").on("click", openNavbar);

    // Animate navbar onclick closing and return fab
    $("#navbar-close-button").on("click", closeNavbar);

    // Scroll to page animation
    $("#navbar-pages li").on("click", navigatePage);

    // Keep track of scroll event to update current page
    $(window).scroll(scrollActivity);
});

function scrollActivity()
{
    var windowScrollPos = $(window).scrollTop() + 10;
    $("section").each(function(index) {
        if($(this).position().top < windowScrollPos && $("#fab").children().eq(index).hasClass("fab-current-page") === false)
        {
            // Move current indicator from navbar
            $(".navbar-pages-current").removeClass("navbar-pages-current");
            $("#navbar-pages li").eq(index).addClass("navbar-pages-current");

            // Move current indicator from fab
            $(".fab-current-page").removeClass("fab-current-page");
            $("#fab").children().eq(index).addClass("fab-current-page");
        }
    })
}

function navigatePage() {
    var target = $(this).find("a").attr("href");
    var currentPage = $(".navbar-pages-current");

    if($(currentPage).find("a").attr("href") != target)
    {
        // Scroll to page animation
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 500);
    }

    // Close navbar after click
    closeNavbar();
}

function closeNavbar() {
    var navMoveValue = parseFloat($("#navbar-wrapper").css("height"));
    // Appearing fab
    $("#fab").css({display: "flex"});
    $("#fab").animate({
        opacity: 1
    }, 500);

    // Closing nav bar
    $("#navbar-wrapper").animate({
        marginTop: -navMoveValue
    }, 1000, "easeOutExpo");
    $("body").animate({
        marginTop: 0
    }, 1000, "easeOutExpo");
}

function openNavbar()
{
    var navMoveValue = parseFloat($("#navbar-wrapper").css("height"));
    // Animate fab dissapearing
    $(this).animate({
        opacity: 0
    }, 500, function() {
        $(this).css({display: "none"});
    });

    // Animate nav bar dropping down
    $("#navbar-wrapper").animate({
        marginTop: 0
    }, 1000, "easeOutBounce");
    $("body").animate({
        marginTop: navMoveValue
    }, 1000, "easeOutBounce");

}
