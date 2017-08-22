$(document).ready(function() {
    $(".high-skill-rating").circleProgress({
        value: .9,
        size: 170,
        startAngle: 4.7,
        lineCap: "round",
        fill: {
            gradient: [["rgba(178, 221, 236, 0.3)", .76], ["rgba(178, 221, 236, 0.6)", .45], ["rgba(178, 221, 236, 1)", .35]]
        }
    });

    $(".mid-skill-rating").circleProgress({
        value: .65,
        size: 170,
        startAngle: 4.7,
        lineCap: "round",
        fill: {
            gradient: [["rgba(178, 221, 236, 0.3)", .76], ["rgba(178, 221, 236, 0.6)", .45], ["rgba(178, 221, 236, 1)", .35]]
        }
    });

    $(".low-skill-rating").circleProgress({
        value: .4,
        size: 170,
        startAngle: 4.7,
        lineCap: "round",
        fill: {
            gradient: [["rgba(178, 221, 236, 0.3)", .76], ["rgba(178, 221, 236, 0.6)", .45], ["rgba(178, 221, 236, 1)", .35]]
        }
    });
});
