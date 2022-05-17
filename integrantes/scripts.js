var activePetianosSlideIndex = 1;
var exPetianosSlideIndex = 1;
activePetianosShowSlides(activePetianosSlideIndex);
exPetianosShowSlides(exPetianosSlideIndex);

// Next/previous controls
function activePetianosPlusSlides(n) {
    activePetianosShowSlides(activePetianosSlideIndex += n);
}

function exPetianosPlusSlides(n){
    exPetianosShowSlides(exPetianosSlideIndex += n)
}

// Thumbnail image controls
function activePetianosCurrentSlide(n) {
    activePetianosShowSlides(activePetianosSlideIndex = n);
}

function exPetianosCurrentSlide(n) {
    exPetianosShowSlides(exPetianosSlideIndex = n);
}

function activePetianosShowSlides(n) {
    var i;
    var container = document.getElementById('active-petianos');
    var slides = container.getElementsByClassName('mySlides');
    var dots = container.getElementsByClassName("dot");
    if (n > slides.length) { activePetianosSlideIndex = 1 }
    if (n < 1) { activePetianosSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[activePetianosSlideIndex - 1].style.display = "flex";
    dots[activePetianosSlideIndex - 1].className += " active";
}

function exPetianosShowSlides(n) {
    var i;
    var container = document.getElementById('ex-petianos');
    var slides = container.getElementsByClassName('mySlides');
    var dots = container.getElementsByClassName("dot");
    if (n > slides.length) { exPetianosSlideIndex = 1 }
    if (n < 1) { exPetianosSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[exPetianosSlideIndex - 1].style.display = "flex";
    dots[exPetianosSlideIndex - 1].className += " active";
}