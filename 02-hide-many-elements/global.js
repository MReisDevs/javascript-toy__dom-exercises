window.addEventListener("load", function(){

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var hidden_div = document.getElementsByClassName('hide_me');

    for (var i = 0; i < hidden_div.length; i++) {
      hidden_div[i].style.display = "none";
    }
  });

});                                                                                                                                                                                                                                                   