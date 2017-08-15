window.addEventListener("load", function(){

  var areacode = document.getElementById('first');
  var localcode = document.getElementById('second');
  var fournumbers = document.getElementById('third');

  areacode.addEventListener("keyup", function() {
    numsentered = areacode.value.length;
    maxchars = parseInt(areacode.getAttribute("maxlength"));

    if (numsentered === maxchars) {
      localcode.focus();
    }
  });

  localcode.addEventListener("keyup", function() {
    numsentered = localcode.value.length;
    maxchars = parseInt(localcode.getAttribute("maxlength"));

    if (numsentered === maxchars) {
      fournumbers.focus();
    }
  });

});