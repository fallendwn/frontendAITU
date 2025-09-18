$("#first-card").on("mouseenter", function(){
    $("#first-card").animate({

        opacity:0.5,
        scale: 1.1

    },10)


})

$("#first-card").on("mouseleave", function(){

    $("#first-card").animate({

        opacity:1,
        scale: 1

    },10)


})

$("#second-card").on("mouseenter", function(){
    $("#second-card").animate({

        opacity:0.5,
        scale: 1.2

    },10)


})

$("#second-card").on("mouseleave", function(){

    $("#second-card").animate({

        opacity:1,
        scale: 1

    },10)


})

$("#third-card").on("mouseenter", function(){

    $("#third-card").animate({

        opacity:0.5,
        scale: 1.2

    },10)


})

$("#third-card").on("mouseleave", function(){

    $("#third-card").animate({

        opacity:1,
        scale: 1

    },10)


})


$("#third-card").on("click", function(){

    $("#third-card").animate({

        scale:1.5,
        opacity:0.3

    },10).animate({

        scale: 1,
        opacity:1

    })


})

$("#second-card").on("click", function(){

    $("#second-card").animate({

        scale:1.5,
        opacity:0.3

    },10).animate({

        scale: 1,
        opacity:1

    })


})

$("#first-card").on("click", function(){

    $("#first-card").animate({

        scale:1.5,
        opacity:0.3

    },10).animate({

        scale: 1,
        opacity:1

    })


})