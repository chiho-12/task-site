const fadein = () => {
    const target = document.querySelector("#js-fadein");
    if (target.classList.contains("scrollin")) {
        target.classList.remove("fadein");
        target.classList.add("scrollin");
    } else {
        target.classList.add("scrollin")
    }
};

document.addEventListener("scroll", fadein);

const fadeItems = document.querySelectorAll("li")
fadeItems.forEach((item, index) => {
 ScrollReveal().reveal(`.fadeout${index + 1}` ,{
      delay: 100 * index,
      duration: 800,
      viewFactor: 1,
    });
})

    var mySwiper = new Swiper('.case-study', {
        loop: true,
    });

    const sideinItems = document.querySelectorAll("li")
    sideinItems.forEach((item, index) => {
     ScrollReveal().reveal(`.ml${index + 1}` ,{
      delay: 200 * index,
      duration: 800,
      viewFactor: 1,
      origin: 'left', 
      distance: '50px',
    });
})

ScrollReveal().reveal('.bf-box', {
 origin: 'bottom',
 distance: '50px',
 duration: 800,
});

const bottomf = document.querySelector(".bottom-form");
window.addEventListener('scroll', () => {
const currentY = window.pageYOffset;
if (currentY > 100) {
    setTimeout(function () {
        bottomf.style.opacity = 1;
    },1);
} else {
    setTimeout(function() {
        bottomf.style.opacity = 0;
    },1);
}
});
