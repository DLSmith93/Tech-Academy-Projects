
// open modal
function openModal(){
    document.getElementById("myModal").style.display = "block";
}

// close modal
function closeModal(){
    document.getElementById("myModal").style.display = "none"
}

let slideIndex = 1;
showSlides(slideIndex);

// next/previous functions
function plusSlides(n){
    
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n){
    
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if(n > slides.length) { slideIndex = 1}
    if(n < 1) { slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className = " active";
    captionText.innerHTML = dots[slideIndex = 1].alt;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
