var slideIdx = 0;
showExperience(slideIdx);

function changeSlides(n){
    showExperience(slideIdx += n)
}

function showExperience(n){
    //getting all the slides
    var slides = document.getElementsByClassName("Slides");
    //loop slides
    if (n > slides.length){
        slideIdx = 1
    }
    else if (n < 1){
        slideIdx = slides.length
    }

    //all elements are removed
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    //displaying the slides in n 
    slides[slideIdx-1].style.display =  "block";
}

function showMenu(n) {
    var menus = document.getElementsByClassName("section-profile");

    //all elements are removed
    for (i = 0; i < menus.length; i++) {
        menus[i].style.display = "none";  
    }

    //displaying the slides in n 
    menus[n].style.display =  "block";

    var active = document.querySelector("ul > li.active")
    active.className = active.id

    if (n==0) {
        var activate = document.querySelector("ul > li.home");
        activate.className = "active";
    }
    else if (n==1) {
        var activate = document.querySelector("ul > li.experiences");
        activate.className = "active";
        showExperience(0);
    }
    else if (n==2) {
        var activate = document.querySelector("ul > li.projects");
        activate.className = "active";
    }
    else if (n==3) {
        var activate = document.querySelector("ul > li.contact");
        activate.className = "active";
    }
}