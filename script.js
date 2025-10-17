// -------------------
// Form Submission (Formspree) with custom message
// -------------------
document.getElementById("shareForm").addEventListener("submit", async e => {
  e.preventDefault();

  const form = e.target;
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const responseMsg = document.getElementById("responseMsg");

  // Prepare FormData to send to Formspree
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      responseMsg.textContent = `✅ Thanks ${name}! We'll reach out to ${contact} soon 💌`;
      responseMsg.style.color = "#bbf7d0";
      form.reset();
    } else {
      responseMsg.textContent = "❌ Oops! Something went wrong. Please try again.";
      responseMsg.style.color = "#f87171";
    }
  } catch (error) {
    responseMsg.textContent = "❌ Error! Please check your internet connection.";
    responseMsg.style.color = "#f87171";
  }
});


// -------------------
// Auto Slider
// -------------------
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
