window.addEventListener("load", function(){

  var button = document.getElementById('toggle_button');

  button.addEventListener("click", function() {

    var movies = document.querySelectorAll("ul.second_five li");

    for (var i = 0; i < movies.length; i++) {
      if (movies[i].style.display === "list-item") {
        movies[i].style.display = "none";
      }
      else {
        movies[i].style.display = "list-item";
      }
    }

  });

});