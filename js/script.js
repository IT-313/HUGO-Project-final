document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill in all the fields.");
        return;
      }

      alert(
        "Thank you, " +
        name +
        "! Your message has been submitted."
      );

      contactForm.reset();

    });

  }

  const bookButtons = document.querySelectorAll(".book-btn");

  const bookingSection = document.getElementById("booking");
  const serviceChoice = document.getElementById("serviceChoice");

  bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const selectedService = this.getAttribute("data-service");

      if (serviceChoice) {
        serviceChoice.value = selectedService;
      }

      if (bookingSection) {

        bookingSection.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name =
        document.getElementById("bookingName").value.trim();

      const service =
        document.getElementById("serviceChoice").value;

      const date =
        document.getElementById("bookingDate").value;

      if (!name || !service || !date) {
        alert("Please complete all required fields.");
        return;
      }

      alert(
        "Thank you, " +
        name +
        "! Your booking request for " +
        service +
        " on " +
        date +
        " has been submitted."
      );

      bookingForm.reset();

    });

  }

  const shopButtons = document.querySelectorAll(".shop-btn");

  shopButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      alert(
        "Thank you for your interest in HUGO PETs! " +
        "Please contact us to order this product."
      );

    });

  });

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

});
