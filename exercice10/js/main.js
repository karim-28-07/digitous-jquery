$("button").show(function(){
  $("p").toggle(3000, function() {
    console.log("Animation terminée !"); 
  });
});
  

displaySecretText()