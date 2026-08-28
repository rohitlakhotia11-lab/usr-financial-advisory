/*
  USR Financial Advisory
  Replace the two placeholder URLs below before publishing.

  PAYMENT_LINK: your Razorpay Payment Link
  BOOKING_LINK: your Google Calendar appointment schedule
*/

const PAYMENT_LINK = "https://rzp.io/rzp/7EMgpko";
const BOOKING_LINK = "https://calendar.app.google/zAUHqCz8n5NpSpM67";

document.addEventListener("DOMContentLoaded", () => {
  const paymentButton = document.getElementById("paymentButton");
  const bookingButton = document.getElementById("bookingButton");
  const year = document.getElementById("year");

  if (paymentButton) paymentButton.href = PAYMENT_LINK;
  if (bookingButton) bookingButton.href = BOOKING_LINK;
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Smoothly return the visitor to the consultation card if a placeholder
  // link has not yet been replaced.
  [paymentButton, bookingButton].forEach(button => {
    if (!button) return;
    button.addEventListener("click", (event) => {
      const href = button.getAttribute("href") || "";
      if (href.includes("YOUR-PAYMENT-LINK") || href.includes("YOUR-BOOKING-LINK")) {
        event.preventDefault();
        alert("This button is ready for your Razorpay or Google Calendar link. Add the link in script.js before publishing.");
      }
    });
  });
});
