
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


window.addEventListener('scroll', function() {
    var skillBar = document.querySelector('.skill-bar');
    var skillBarFill = document.querySelectorAll('.skill-bar-fill');
    var skillBarPosition = skillBar.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    for (var i = 0; i < skillBarFill.length; i++) {
      var skillBarFillPercentage = skillBarFill[i].getAttribute('data-percentage');
      var skillBarFillWidth = (skillBarFillPercentage / 100) * skillBar.offsetWidth;
  
      if (skillBarPosition < windowHeight) {
        skillBarFill[i].style.width = skillBarFillWidth + 'px';
      }
    }
  });