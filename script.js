document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.querySelector(".language-selector");
    const languageDropdown = document.getElementById("language-dropdown");

    // Відкриття/закриття меню при кліку на блок вибору мови
    languageSelector.addEventListener("click", function (event) {
        event.stopPropagation(); // Запобігає закриттю при кліку всередині
        languageDropdown.classList.toggle("show");
    });

    // Функція вибору мови
    function setLanguage(lang) {
        document.getElementById("selected-lang").innerText = lang;
        languageDropdown.classList.remove("show");
    }

    // Додаємо обробник подій для кнопок вибору мови
    document.querySelectorAll("#language-dropdown button").forEach(button => {
        button.addEventListener("click", function () {
            setLanguage(this.innerText);
        });
    });

    // Закриття меню при кліку поза ним
    document.addEventListener("click", function (event) {
        if (!languageSelector.contains(event.target)) {
            languageDropdown.classList.remove("show");
        }
    });
});




function toggleMobileMenu() {
    const mobileNav = document.getElementById("mobile-nav");
    const menuIcon = document.querySelector(".menu-icon");

    const isMenuOpen = mobileNav.style.display === "block";

    if (isMenuOpen) {
        mobileNav.style.display = "none";
        menuIcon.classList.remove("active");
    } else {
        mobileNav.style.display = "block";
        menuIcon.classList.add("active");

        document.addEventListener("click", function closeMenu(event) {
            if (!mobileNav.contains(event.target) && !menuIcon.contains(event.target)) {
                mobileNav.style.display = "none";
                menuIcon.classList.remove("active");
                document.removeEventListener("click", closeMenu);
            }
        });
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const totalSlides = testimonials.length;
    let currentIndex = 0;

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const testimonialContent = document.querySelector(".testimonial-content");
    const currentIndexText = document.getElementById("currentIndex");

    function updateSlider() {
        const translateValue = -currentIndex * 100 + "%";
        testimonialContent.style.transform = "translateX(" + translateValue + ")";
        currentIndexText.innerText = (currentIndex + 1).toString().padStart(2, '0');
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Повернення до першого слайда
        }
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Перехід до останнього слайда
        }
        updateSlider();
    });

    // Автоматичне перемикання кожні 5 секунд
    setInterval(function () {
        nextBtn.click();
    }, 5000);
});




function toggleFAQ(selectedQuestion) {
    const allFAQs = document.querySelectorAll(".faq");
    
    allFAQs.forEach(faq => {
        if (faq.querySelector(".faq-question") === selectedQuestion) {
            faq.classList.toggle("open"); // Відкриває/закриває поточне
        } else {
            faq.classList.remove("open"); // Закриває всі інші
        }
    });
}



document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("errorMessage");
    let successMessage = document.getElementById("successMessage");

    errorMessage.innerHTML = "";
    successMessage.innerHTML = "";

    // Валідація
    if (name === "" || email === "" || message === "") {
        errorMessage.innerHTML = "All fields are required!";
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.innerHTML = "Please enter a valid email address!";
        return;
    }

    successMessage.innerHTML = "Your message has been sent successfully!";
    document.getElementById("contactForm").reset();
});

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
