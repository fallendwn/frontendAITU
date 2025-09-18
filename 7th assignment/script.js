$(document).ready(function(){


    console.log("jQuery is ready!");
        
    $("#hide").click(function(){

        $(".CANTHIDE").hide();

    });
    $("#show").click(function(){

        $(".CANTHIDE").show();

    });
    $("#toggle").click(function(){

        $(".CANTHIDE").toggle("slow");

    });

    $("#animating3").animate({
    
    right:"+=150px",
    top: "+=150px",
    height:"50px",
    width: "50px",
    height: "50px",
    opacity: 0.25


    },"slow")

    $("#animating2")
    .animate({right:"+=100px"},1000)
    .animate({top: "+=100px"},1000)
    .animate({height:"50px"},1000)
    .animate({width: "50px"},1000)
    .animate({height:"100px"},1000)
    .animate({width:"100px"},1000)
})

        

$(".hallo").css("color", "green");

$(".hallo").text("privetprivet2007");

$("h2").html("HELLO WORLD!!!!!");

$("#cinatoggle").click(function(){

    $("#cinamonroll").fadeToggle();

});
$("#cinain").click(function(){

    $("#cinamonroll").fadeIn();

});
$("#cinaout").click(function(){

    $("#cinamonroll").fadeOut();

});

$("#gotop").click(function(){

    $("#pong").slideUp()

})

$("#gobot").click(function(){

    $("#pong").slideDown()

})

$("#gotoggle").click(function(){

    $("#pong").slideToggle()

})


$("#adding").click(function(){

    $("#what").append("<span> something</span>");

});

$("#deleting").click(function(){

    $("#what").remove();

});

$("#prepending").click(function(){

    $("#what").prepend("HELLO WORLD");

});

$("#changePhoto").click(function(){

    $("#badimage").attr("src", "images/2.webp")

})

$("#changeHref").click(function(){

    $("#youtube").attr("href", "https://www.youtube.com")

})


$("#textinput").on("keyup", function(){

    $("#spaninput").text($("#textinput").val())


})


$("#animating").animate({
    
    opacity: 0.25,
    top: "+=100",
    height:"+150"

},"slow")


