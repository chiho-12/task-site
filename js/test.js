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


const scrollEvent = function () {
    window.addEventListener("scroll", function(){
        let scrollValue = window.pageYOffset;
        let scrollEle = document.querySelectorAll('li');
        let windowHeight = window.innerHeight;
        let value = 200;

        console.log(windowHeight);
        
        for(let a = 0; a < scrollEle.length; a++) { 
        let scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;
            if(scrollValue > scrollTop - windowHeight + value) {
                scrollEle[a].classList.remove("fadeout");
                scrollEle[a].classList.add("effect-scroll");
            }
        }
    });
};

scrollEvent();

