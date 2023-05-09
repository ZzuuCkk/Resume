const slider = document.querySelector('.slider');
const slides = document.querySelectorAll(".slide");
let setIntervalId = null;
let activeIndex = 0;
const sectionSelect = document.querySelector("#service-section");
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



//   function renderService() {
//     const serviceFromJs = services.map((serv)=>{
//         return `
            
//                 <div class="card">
//                     <div class="imgContainer>
//                         <img src="${serv.icon}">
//                     </div>
//                     <h3>${serv.title}</h3>
//                     <p>${serv.description}</p>
//                 </div>
            
//         `

//     });
//     return serviceFromJs.join("");
//   }
//   sectionSelect.innerHTML = renderService();


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});
function quoteSlider() {
    const qSlide = document.querySelectorAll('.quote');
    const qSlider = document.querySelector('.quotes');
    const bullets = document.querySelectorAll('.bullet');
    let activeIndex = 0;
  
    function nextQuote(direction) {
      if (direction === "right") {
        if (activeIndex === qSlide.length - 1) {
          activeIndex = 0;
        } else {
          activeIndex++;
        }
      } else if (direction === "left") {
        if (activeIndex === 0) {
          activeIndex = qSlide.length - 1;
        } else {
          activeIndex--;
        }
      }
      renderSlides();
    }
  
    bullets.forEach((bullet, i) => {
      bullet.addEventListener("click", () => {
        activeIndex = i;
        renderSlides();
        bullets.forEach((bullet) => {
          bullet.classList.remove("bullet-active");
        });
        bullet.classList.add("bullet-active");
      });
      if (i === activeIndex) {
        bullet.classList.add("bullet-active");
      } else {
        bullet.classList.remove("bullet-active");
      }
      if (i === activeIndex) {
        qSlide[i].classList.add("actives");
      } else {
        qSlide[i].classList.remove("actives");
      }
    });
  
    function renderSlides() {
      qSlide.forEach((slide, i) => {
        if (i === activeIndex) {
          slide.classList.add("actives");
        } else {
          slide.classList.remove("actives");
        }
      });
    }
  
    renderSlides();
  }
  
  quoteSlider();