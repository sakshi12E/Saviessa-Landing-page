
document.querySelectorAll('.polygon').forEach(btn => {
  btn.addEventListener('click', function() {
    const videoURL = this.getAttribute('data-video');
    const wrapper2 = this.closest('.wrapper');
    wrapper2.innerHTML = `
      <iframe width="100%" height="351"
        src="https://www.youtube.com/embed/c_FjIggQjN8?si=KzIJiJ8V6y1HTgbO&autoplay=1" & autoplay=1 title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe> `;
  });
});
document.querySelectorAll('.polygon').forEach(btn => {
  btn.addEventListener('click', function() {
    const videoURL = this.getAttribute('data-video1');
    const wrapper3 = this.closest('.wrapper1');
    wrapper3.innerHTML = `
      <iframe width="100%" height="351"
        src="https://www.youtube.com/embed/K8l7EDXk_bk?si=xlsZzkSPZSX1XGHY&autoplay=1" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe> `;
  });
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,          // Show 3 slides at once
  spaceBetween: 0,          // Add spacing between slides (adjust as needed)
  loop: true,      
     pagination:{
      el:'.swiper-pagination',
      clickable:true,
    },          // Optional - enables infinite looping
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {             // Make it responsive
    320: { slidesPerView: 1, spaceBetween:0 },
    768: { slidesPerView: 2, spaceBetween:0 },
    1100: { slidesPerView: 3, spaceBetween:0 },
    1400: { slidesPerView: 3, spaceBetween:0 },
  },
});

