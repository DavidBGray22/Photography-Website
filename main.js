//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//This is for popupImage gallery
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll('.picWrapper img');
  var locatorText = document.getElementsByClassName("numbertext")[0];
  var modalImg = document.querySelector('.modal-content img');
  n %= slides.length;

  modalImg.src = slides[n].src;
  locatorText.innerHTML = n + 1 + ' / ' + slides.length;

}

//this is to link and populate form Submission page

// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

//* Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

const userName= cleanAndCap(words.get('name'));
const userEmail = cleanAndCap(words.get('email'));
const subject = cleanAndCap(words.get('subject'));
const message = words.get('message');

// The string containing HTML and text which will populate the submission.html page

