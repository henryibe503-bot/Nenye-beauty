// Hamburger Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Testimonial Slider
let currentTestimonial = 0;
let testimonialCards = [];
let testimonialDots = [];

function initTestimonialSlider() {
  const track = document.getElementById("testimonialTrack");
  const dotsContainer = document.getElementById("testimonialDots");
  
  if (!track) return;
  
  testimonialCards = track.querySelectorAll(".testimonial-card");
  const totalTestimonials = testimonialCards.length;

  // Create dots
  for (let i = 0; i < totalTestimonials; i++) {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.onclick = () => goToTestimonial(i);
    dotsContainer.appendChild(dot);
    testimonialDots.push(dot);
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    if (!document.hidden) {
      slideTestimonial(1);
    }
  }, 5000);
}

function slideTestimonial(direction) {
  const track = document.getElementById("testimonialTrack");
  if (!track) return;

  currentTestimonial += direction;

  if (currentTestimonial >= testimonialCards.length) {
    currentTestimonial = 0;
  } else if (currentTestimonial < 0) {
    currentTestimonial = testimonialCards.length - 1;
  }

  updateSlider();
}

function goToTestimonial(index) {
  currentTestimonial = index;
  updateSlider();
}

function updateSlider() {
  const track = document.getElementById("testimonialTrack");
  if (!track) return;

  track.style.transform = `translateX(-${currentTestimonial * 100}%)`;

  // Update dots
  testimonialDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentTestimonial);
  });
}

// Initialize testimonial slider when DOM is loaded
document.addEventListener("DOMContentLoaded", initTestimonialSlider);
