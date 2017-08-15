window.addEventListener("load", function(){

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var div_to_show = document.getElementsByClassName('show_me');

    for (var i = 0; i < div_to_show.length; i++) {
      div_to_show[i].style.display = "block";
    }
  });

});