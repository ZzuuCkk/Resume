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

  
  const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.latest-projects-div');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    // Get filter value
    const filter = btn.getAttribute('data-filter');
    // Show projects that match filter
    projects.forEach(project => {
      if ( project.classList.contains(filter)) {
        project.style.display = 'flex';
        project.querySelector('.project-info').style.display = 'flex';
      } else if(filter === 'all'){
        project.style.display = 'flex';
        project.querySelector('.project-info').style.display = 'none';
      }else {
        project.style.display = 'none';
        project.querySelector('.project-info').style.display = 'none';
      }
      
    });
    
  });
});
const clientsDesc = document.querySelectorAll('.clients-desc');

clientsDesc.forEach((desc) => {
  desc.addEventListener('mouseover', () => {
    clientsDesc.classList.add('clients-active');
    desc.querySelector('.clients-desc-title').style.display = 'flex';
    desc.querySelector('.clients-desc-title').style.opacity = '1';
    
  });

  desc.addEventListener('mouseleave', () => {
    clientsDesc.classList.remove('clients-active');
    desc.querySelector('.clients-desc-title').style.display = 'none';
    desc.querySelector('.clients-desc-title').style.opacity = '0';
    
  });
});


const modal = document.querySelector("#success-modal");
const form = document.querySelector("form");
const openModal = document.querySelector(".submit-form");
const closeModal = document.querySelector(".close-btn");

function showModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    const closeBtn = modal.querySelector(".close-btn");

    modal.classList.add("active");
    closeBtn.addEventListener("click", (e) => {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        modal.classList.remove("active");
      }
    });
  }
}

openModal.addEventListener("click", (event) => {
  event.preventDefault();
  showModal("#success-modal");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showModal("#success-modal");
});