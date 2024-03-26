const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Navbar

function navbar(){
    const toggleBtn = document.querySelector(".menu");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelector(".nav-links");
    
    toggleBtn.addEventListener("click",() => {
        nav.classList.toggle("active");
        navLinks.addEventListener("click",() =>{
            if(nav.classList.contains("active")){
                nav.classList.remove("active");
            }
        })
    })
}

function fixedImageAnimation(){
    // fixed image animation
    let elemC = document.querySelector("#elems-container");
    let fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter",()=>{
        fixed.style.display = 'block';
    })
    elemC.addEventListener("mouseleave",()=>{
        fixed.style.display = 'none';
    })
    
    let elems = document.querySelectorAll(".elem");
    elems.forEach((e)=>{
        e.addEventListener('mouseenter',()=>{
            let image = e.getAttribute("data-image")
            fixed.style.background = `url(${image})`
        })
    })
}

function swipper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      });

}

fixedImageAnimation()
swipper()
navbar()


setTimeout(() => {
    let loader = document.querySelector("#loader");
    loader.style.top = "-150%";
}, 3000);

var h1Element = document.querySelector('#loader h1');
var contentArray = ["Environment", "Experiances", "Content"];
var currentIndex = 0;
function updateContent() {
    h1Element.textContent = contentArray[currentIndex];
    currentIndex = (currentIndex + 1) % contentArray.length;
}

setInterval(updateContent, 500);