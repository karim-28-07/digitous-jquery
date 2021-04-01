$("button").click(function(){
    $("#bg").animate({

        
        marginLeft: 100
        
    }, 3000, function() { 
      console.log("animation terminée !");
    });
});