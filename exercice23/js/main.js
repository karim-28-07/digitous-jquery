$("button").click(function(){
    $("#square").animate({

        top: 200, left: 950
    }, 3000, function() { 
      console.log("animation terminée !");
    });
});