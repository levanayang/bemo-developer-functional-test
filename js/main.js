//Get the button:
toTopButton = document.getElementById("to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
toTopButton.addEventListener("click", (e) => {
	document.body.scrollTop = 0; // For Safari
 	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  	$("#to-top-button").fadeIn();
  } else {
  	$("#to-top-button").fadeOut();
  }
}
  