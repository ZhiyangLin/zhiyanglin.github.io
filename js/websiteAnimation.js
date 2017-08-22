$(document).ready(function() {
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var progressBarAnimated = false;

    // Scroll event based animation
    $(window).scroll(function() {
        var windowScrollPos = $(window).scrollTop();

        // Dropdown footer will kick in when scroll reached to the bottom
        if(windowScrollPos + windowHeight > documentHeight - 50) {
            // Animate dropdown footer with bouncy effect
            $("#dropdown-footer").animate({
                height: 500
            }, 1000, "easeOutBounce", function() {
                // CSS each child node with animation
                $("#dropdown-footer").children().each(function() {
                    $(this).css({
                        display: "flex"
                    })
                    $(this).animate({
                        opacity: 0.7
                    }, 500);
                });
            });
        }

        // Tracking page position to update fab and navbar
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
        });

       if($("#about-top-greeting").position().top < windowScrollPos && progressBarAnimated === false)
        {
            var gradientValue = [["rgba(51,204,153, 0.4)", .76], ["rgba(51,204,153, 0.8)", .45], ["rgba(51,204,153, 1)", .35]];
            $(".high-skill-rating").circleProgress({ value: .9, size: 170, startAngle: 4.7, lineCap: "round",
                fill: { gradient: gradientValue}
            });

            $(".mid-skill-rating").circleProgress({ value: .65, size: 170, startAngle: 4.7, lineCap: "round",
                fill: { gradient: gradientValue }
            });

            $(".low-skill-rating").circleProgress({ value: .4, size: 170, startAngle: 4.7, lineCap: "round",
                fill: { gradient: gradientValue }
            });
            progressBarAnimated = true;
        }
    });

    // Time based animation
    // Cursor blinking
    setInterval('cursor()', 1000);

    // Center display
    setTimeout(displayCenterMsg, 700);

    // Blinking scroller
    blinkScroller();

    // Click event animation
    // Animate FAB onclick opening navbar
    $("#fab").on("click", openNavbar);

    // Animate navbar onclick closing and return fab
    $("#navbar-close-button").on("click", closeNavbar);

    // Scroll to page animation
    $("#navbar-pages li").on("click", navigatePage);
});

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

// Cursor blinking effect
function cursor()
{
    $('#homepage-cursor')
    .animate({ opacity: 0 })
    .animate({ opacity: 1 });
}

// Display message on the center of screen
function displayCenterMsg()
{
    var ele = document.getElementById("homepage-typing-display");

    // All delays are relative to the first animation in the function
    setTimeout(typing, 0, "I am a", ele);
    setTimeout(erase, 1200, ele);
    setTimeout(typing, 2500, "Software Engineer.", ele);
}

// Support function to mimic typing effect
function typing(value, element)
{
    var arr = value.split("");

    var loopTimer = setInterval(function()
    {
        if(arr.length > 0)
        {
            element.insertAdjacentHTML('beforeend', arr.shift());
        }
        else
        {
            clearInterval(loopTimer);
        }
    }, 80);
}

// Support function to mimic erasing effect
function erase(element)
{
    var value = element.innerHTML;
    var length = value.length;

    var loopTimer = setInterval(function()
    {
        if(length >= 0)
        {
            element.innerHTML = value.substr(0, length--);
        }
        else
        {
            clearInterval(loopTimer);
        }
    }, 80);
}

function blinkScroller()
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
}
