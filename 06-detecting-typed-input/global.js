window.addEventListener("load", function(){

  var namebox = document.getElementById("full_name");

  namebox.addEventListener("keyup", function() {

    var salutation = document.getElementById("greeting");

    salutation.innerHTML = ("Hello there, " + namebox.value + "!");

  });

});