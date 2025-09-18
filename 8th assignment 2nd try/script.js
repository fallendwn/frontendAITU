let python = document.getElementById("first");
let pythontext = document.getElementById("pythontext")

let java = document.getElementById("second");
let javatext = document.getElementById("javatext")

let golang = document.getElementById("third");
let gotext = document.getElementById("gotext")

python.addEventListener("mouseenter", function() {


    python.style.scale= "1.2";
    pythontext.style.display = "block";


});

java.addEventListener("mouseenter", function() {

    java.style.scale= "1.2";
    javatext.style.display = "block";

});

golang.addEventListener("mouseenter", function() {

    golang.style.scale= "1.2";
    gotext.style.display = "block";

});


python.addEventListener("mouseleave", function() {


    python.style.scale= "1";
    pythontext.style.display = "none";


});

java.addEventListener("mouseleave", function() {

    java.style.scale= "1";
    javatext.style.display = "none";

});

golang.addEventListener("mouseleave", function() {

    golang.style.scale= "1";
    gotext.style.display = "none";
    
});

