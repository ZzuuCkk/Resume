
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll(".slide");
let setIntervalId = null;
let activeIndex = 0;
function renderSlides() {
	slides.forEach((el, i) => {
		if (i === activeIndex) {
			el.classList.add("active");
		} else {
			el.classList.remove("active");
		}
	});   
}
function mainSlider(){

function nextFun() {
    if (activeIndex === slides.length - 1) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }

    renderSlides();
}


    function startInterval() {
        slideIntervalId = setInterval(nextFun, 5000);
    }

    function stopInterval() {
        clearInterval(slideIntervalId);
    }
startInterval();
    slider.addEventListener("mouseenter", stopInterval);
    slider.addEventListener("mouseleave", startInterval);


    renderSlides();
}

mainSlider();


