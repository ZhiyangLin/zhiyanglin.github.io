// Animation for displaying messages
$(document).ready(function()
{
    // Cursor blinking
    setInterval('cursor()', 1000);

    // Center display
    setTimeout(displayCenterMsg, 700);
});

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
    setTimeout(typing, 2500, "Software Engineer", ele);
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
