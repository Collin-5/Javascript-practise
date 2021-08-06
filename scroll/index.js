const center = document.querySelector(".center");
const topLink = document.querySelector(".totop");
const button = document.querySelector(".toggle");
const navcontainer = document.querySelector(".nav-list");


window.addEventListener('scroll', function(){
    const scrollheight = window.pageYOffset;
    const navheight = center.getBoundingClientRect().height;
    if (scrollheight > navheight){
        center.classList.add("fixed");
    }
    else {
        center.classList.remove("fixed");
    }
    if (scrollheight > 600){
        topLink.classList.remove("totop-hide");
    }
    else {
        topLink.classList.add("totop-hide");
    }
    navcontainer.classList.add("hidden");
})

button.addEventListener('click', function(){
    navcontainer.classList.toggle("hidden");
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = center.getBoundingClientRect().height;
    const containerHeight = navcontainer.getBoundingClientRect().height;
    const fixedNav = center.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    navcontainer.style.height = 0;
  });
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener('load', function(){
  preloader.classList.add("hide-preloader");
})