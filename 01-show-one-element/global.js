window.addEventListener("load", function(){
  var more_info = document.getElementById("more_text_link") ;
  more_info.addEventListener("click", function(){
  	var show_more = document.getElementById("more_text_content");

  	    show_more.style.display = "inline";

  	    more_info.style.display = "none";

  	});
});