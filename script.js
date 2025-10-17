// -------------------
// Contact Form Submission (Formspree)
// -------------------
document.getElementById("shareForm").addEventListener("submit", async e => {
  e.preventDefault(); // Prevent default popup

  const form = e.target;
  const responseMsg = document.getElementById("responseMsg");

  // Create FormData from form
  const formData = new FormData(form);

  try {
    // Send form data to Formspree
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // Simplified success message
      const name = formData.get("name");
      responseMsg.textContent = `✅ Thanks ${name}! We'll reach out to you soon 💌`;
      responseMsg.style.color = "#bbf7d0";
      form.reset(); // Reset form after submission
    } else {
      responseMsg.textContent = "❌ Oops! Something went wrong. Please try again.";
      responseMsg.style.color = "#f87171";
    }

  } catch (error) {
    responseMsg.textContent = "❌ Error! Please check your internet connection.";
    responseMsg.style.color = "#f87171";
    console.error("Form submission error:", error);
  }
});


// -------------------
// Auto Image Slider
// -------------------
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

// Show specific slide
function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
}

// Go to next slide
function next() {
  index = (index + 1) % total;
  showSlide(index);
}

// Auto-slide every 6 seconds
let interval = setInterval(next, 6000);

// Manual navigation
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
