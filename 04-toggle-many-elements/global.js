window.addEventListener("load", function(){

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var div_to_toggle = document.getElementsByClassName('toggle_me');

    for (var i = 0; i < div_to_toggle.length; i++) {
      if (div_to_toggle[i].style.display === "none") {
        div_to_toggle[i].style.display = "block";
      }
      else {
        div_to_toggle[i].style.display = "none";}
    }
  });

});