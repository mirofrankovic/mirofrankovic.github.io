

$(document).ready(function() {
    $("#my-button").click(function(){
        //Get search myinput input in buttons HTML
        var myinput= $("#myinput").val();
    });

    $("div").animate({fontSize: '50px'}, "slow");
    //Buttons?
    $("p").click(function() { 
        $(this).slideToggle("slow");
    });

    document.getElementById("my-button").onclick = function() {
        alert(document.getElementById("myinput").value);
    };

    $("button").click(function(){
        $("h1").addClass("page-header");
    });
});


