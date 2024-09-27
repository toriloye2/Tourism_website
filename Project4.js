document.addEventListener("DOMContentLoaded", function() {
    // Select the menu button and the mobile menu
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle the mobile menu visibility when the menu button is clicked
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });

    // Optional: Close the mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("show");
        });
    });
});


    // Contact Form Validation
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            isValid = false;
            setErrorFor(nameInput, "Name is required");
        } else {
            setSuccessFor(nameInput);
        }

        if (emailInput.value.trim() === "") {
            isValid = false;
            setErrorFor(emailInput, "Email is required");
        } else if (!isValidEmail(emailInput.value)) {
            isValid = false;
            setErrorFor(emailInput, "Invalid email format");
        } else {
            setSuccessFor(emailInput);
        }

        if (messageInput.value.trim() === "") {
            isValid = false;
            setErrorFor(messageInput, "Message is required");
        } else {
            setSuccessFor(messageInput);
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector("small");

        formControl.className = "form-control error";
        errorMsg.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Book Tour Form Validation
    const bookTourForm = document.querySelector(".book-tour-form form");
    const tourNameInput = document.getElementById("tour-name");
    const tourDateInput = document.getElementById("tour-date");
    const participantsInput = document.getElementById("participants");

    bookTourForm.addEventListener("submit", function(event) {
        let isValid = true;

        if (tourNameInput.value.trim() === "") {
            isValid = false;
            setErrorFor(tourNameInput, "Tour name is required");
        } else {
            setSuccessFor(tourNameInput);
        }

        if (tourDateInput.value === "") {
            isValid = false;
            setErrorFor(tourDateInput, "Tour date is required");
        } else {
            setSuccessFor(tourDateInput);
        }

        const participantsValue = parseInt(participantsInput.value);
        if (isNaN(participantsValue) || participantsValue <= 0) {
            isValid = false;
            setErrorFor(participantsInput, "Enter a valid number of participants");
        } else {
            setSuccessFor(participantsInput);
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector(".small");

        formControl.classList.add("error");
        errorMsg.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.classList.remove("error");
    }
;
