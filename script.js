// Share form message
document.getElementById("shareForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  document.getElementById("responseMsg").innerText =
    `Thanks ${name}! We'll reach out to ${contact} soon 💌`;
  e.target.reset();
});

// Auto slider
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

function showSlide(i) {
  slides.style.transform = `translateX(-${i*100}%)`;
}

function next() {
  index = (index + 1) % total;
  showSlide(index);
}

// slower auto-slide: every 6 seconds
let interval = setInterval(next, 6000);

// Optional manual navigation
document.querySelector(".prev").onclick = () => {
  clearInterval(interval);
  index = (index - 1 + total) % total;
  showSlide(index);
  interval = setInterval(next, 6000);
}

document.querySelector(".next").onclick = () => {
  clearInterval(interval);
  next();
  interval = setInterval(next, 6000);
}
