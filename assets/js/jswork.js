
  // Get the button
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


//popupjs

  const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');
showPopup.onclick = () => {
    popupContainer.classList.add('active');
}
closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
}

/*autopopup
window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      2000
  )
});

const closeBtn2 = document.querySelector('.close');
closeBtn2.onclick = () => {
    popup.classList.remove('active');
}
*/



let slideIndex = 0;
showSlides(); // call showslide method

function showSlides() {
	let i;

	// get the array of divs' with classname image-sliderfade
	let slides = document.getElementsByClassName("imagewwww");

	// get the array of divs' with classname dot
	let dots = document.getElementsByClassName("dot00");

	for (i = 0; i < slides.length; i++) {
		// initially set the display to
		// none for every image.
		slides[i].style.display = "none";
	}

	// increase by 1, Global variable
	slideIndex++;

	// check for boundary
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";

	// Change image every 2 seconds
	setTimeout(showSlides, 1000);
}

//active navbar link code

