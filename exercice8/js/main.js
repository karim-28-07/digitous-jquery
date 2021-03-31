$("button").click(function(){
    $("p").toggle(3000, function() {
      console.log("Animation terminée !"); // callback optionnelle appelée après 3 secondes
    });
  });
  

displaySecretText()