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


// const scrollEvent = function () {
//     window.addEventListener("scroll", function(){
//         let scrollValue = window.pageYOffset;
//         let scrollEle = document.querySelectorAll('li');
//         let windowHeight = window.innerHeight;
//         let value = 200;

//         console.log(windowHeight);
        
//         for(let a = 0; a < scrollEle.length; a++) { 
//         let scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;
//             if(scrollValue > scrollTop - windowHeight + value) {
//                 scrollEle[a].classList.remove("fadeout");
//                 scrollEle[a].classList.add("effect-scroll");
//             }
//         }
//     });
// };

// scrollEvent();

    ScrollReveal().reveal(".fadeout1" ,{
      delay: 200,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout2" ,{
      delay: 400,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout3" ,{
      delay: 600,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout4" ,{
      delay: 800,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout5" ,{
      delay: 1000,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout6" ,{
      delay: 1200,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout7" ,{
      delay: 1400,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout8" ,{
      delay: 1600,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout9" ,{
      delay: 1800,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout10" ,{
      delay: 2000,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout11" ,{
      delay: 2200,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout12" ,{
      delay: 2400,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout13" ,{
      delay: 2600,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout14" ,{
      delay: 2800,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout15" ,{
      delay: 3000,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout16" ,{
      delay: 3200,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout17" ,{
      delay: 3400,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout18" ,{
      delay: 3600,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout19" ,{
      delay: 3800,
      duration: 800, 
      viewFactor: 1,
    });
    ScrollReveal().reveal(".fadeout20" ,{
      delay: 4000,
      duration: 800, 
      viewFactor: 1,
    });

