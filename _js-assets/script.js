// ===== Wait for the page to load =====
document.addEventListener("DOMContentLoaded", function() {

  // ===== Enquiry Form Validation =====
  const form = document.getElementById("enquiryForm");
  const messageBox = document.getElementById("messageBox");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop normal form submission

      const name = form.fullname.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Reset message box
      messageBox.textContent = "";
      messageBox.className = "";

      // Validation checks
      if (!name || !email || !message) {
        showMessage("Please fill in all the fields before submitting your enquiry.", "error");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
      if (!email.match(emailPattern)) {
        showMessage("Please enter a valid email address.", "error");
        return;
      }

      // Success message
      showMessage("Thank you! Your enquiry has been sent successfully.", "success");
      form.reset();
    });

    function showMessage(text, type) {
      messageBox.textContent = text;
      messageBox.classList.add(type);
    }
  }

  // ===== Mobile Menu Toggle (for navbar) =====
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-items");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // ===== Filter/Search for Menu Page =====
  const filterInput = document.getElementById("menuFilter");

  if (filterInput) {
    filterInput.addEventListener("keyup", filterMenu);
  }

  function filterMenu() {
    const filter = filterInput.value.toLowerCase();
    const cards = document.querySelectorAll(".menu-card");

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(filter) ? "" : "none";
    });
  }

});

// Code Attribution
// Author: W3Schools
// Title: JavaScript Form Validation Tutorial
// Date Published: n.d.
// Link/URL: https://www.w3schools.com/js/js_validation.asp
// Date Accessed: 24/09/2025


// Code Attribution
// Author: W3Schools
// Title: JavaScript HTML DOM Tutorial
// Date Published: n.d.
// Link/URL: https://www.w3schools.com/js/js_htmldom.asp
// Date Accessed: 24/09/2025

