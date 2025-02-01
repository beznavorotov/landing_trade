// language-selector
document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.querySelector(".language-selector");
  const languageDropdown = document.getElementById("language-dropdown");

  languageSelector.addEventListener("click", function (event) {
    event.stopPropagation();
    languageDropdown.classList.toggle("show");
  });

  function setLanguage(lang) {
    document.getElementById("selected-lang").innerText = lang;
    languageDropdown.classList.remove("show");
  }

  document.querySelectorAll("#language-dropdown button").forEach((button) => {
    button.addEventListener("click", function () {
      setLanguage(this.innerText);
    });
  });

  document.addEventListener("click", function (event) {
    if (!languageSelector.contains(event.target)) {
      languageDropdown.classList.remove("show");
    }
  });
});

// Burger-menu
function toggleMobileMenu(event) {
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon = document.querySelector(".menu-icon");
  const isMenuOpen = window.getComputedStyle(mobileNav).display === "block";

  if (isMenuOpen) {
    mobileNav.style.display = "none";
    menuIcon.classList.remove("active");
  } else {
    mobileNav.style.display = "block";
    menuIcon.classList.add("active");

    document.addEventListener("click", function closeMenu(event) {
      if (
        !mobileNav.contains(event.target) &&
        !menuIcon.contains(event.target)
      ) {
        mobileNav.style.display = "none";
        menuIcon.classList.remove("active");
        document.removeEventListener("click", closeMenu);
      }
    });
  }
}

//Slider  
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const totalSlides = testimonials.length;
  let currentIndex = 0;

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtnmobile = document.getElementById("prevBtn-mobile");
  const nextBtnmobile = document.getElementById("nextBtn-mobile");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  const testimonialContent = document.querySelector(".testimonial-content");
  const currentIndexText = document.getElementById("currentIndex");

  function updateSlider() {
    const translateValue = -currentIndex * 100 + "%";
    testimonialContent.style.transform = "translateX(" + translateValue + ")";
    currentIndexText.innerText = (currentIndex + 1).toString().padStart(2, "0");
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSlider();
  });

  setInterval(function () {
    nextBtnmobile.click();
  }, 5000);
  nextBtnmobile.addEventListener("click", function () {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  prevBtnmobile.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSlider();
  });

  setInterval(function () {
    rightBtn.click();
  }, 5000);
  rightBtn.addEventListener("click", function () {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  leftBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSlider();
  });

  setInterval(function () {
    rightBtn.click();
  }, 5000);
});

/* faq-section */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", function () {
      const faq = this.parentElement;
      const answer = faq.querySelector(".faq-answer");

      if (faq.classList.contains("open")) {
        answer.style.maxHeight = "0px";
        answer.style.opacity = "0";
        faq.classList.remove("open");
      } else {
        document.querySelectorAll(".faq").forEach((item) => {
          if (item !== faq) {
            item.classList.remove("open");
            item.querySelector(".faq-answer").style.maxHeight = "0px";
            item.querySelector(".faq-answer").style.opacity = "0";
          }
        });

        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
        faq.classList.add("open");
      }
    });
  });
});

/* Contact form */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("submitBtn");
  const emailError = document.getElementById("emailError");

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function checkFormValidity() {
    const isNameValid = nameInput.value.trim() !== "";
    const isEmailValid = validateEmail(emailInput.value.trim());
    const isMessageValid = messageInput.value.trim() !== "";

    nameInput.classList.toggle("valid", isNameValid);
    nameInput.classList.toggle("error", !isNameValid);

    emailInput.classList.toggle("valid", isEmailValid);
    emailInput.classList.toggle("error", !isEmailValid);
    emailError.style.display = isEmailValid ? "none" : "block";
    emailError.textContent = isEmailValid ? "" : "Incorrect email type";

    messageInput.classList.toggle("valid", isMessageValid);
    messageInput.classList.toggle("error", !isMessageValid);

    submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
  }

  nameInput.addEventListener("input", checkFormValidity);
  emailInput.addEventListener("input", checkFormValidity);
  messageInput.addEventListener("input", checkFormValidity);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkFormValidity();

    if (!submitBtn.disabled) {
      alert("Повідомлення відправлено!");
      form.reset();
      submitBtn.disabled = true;

      nameInput.classList.remove("valid", "error");
      emailInput.classList.remove("valid", "error");
      messageInput.classList.remove("valid", "error");
    }
  });
});
