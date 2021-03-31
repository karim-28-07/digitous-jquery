$("button").click(function(){
    $("p").hide(3000, function() {
      console.log("Animation terminée !"); // callback optionnelle appelée après 3 secondes
    });
  });
  
