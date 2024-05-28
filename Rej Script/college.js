document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("collegeRegistrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission by default
        resetErrorMessages(); // Reset error messages

        const chooseYourFieldInput = document.getElementById('chooseyourfield');
        const nameOfFieldInput = document.getElementById('nameoffield');
        const emailInput = document.getElementById('collegeEmail');
        const phoneNumberInput = document.getElementById('collegePhonenumber');
        const positionNameInput = document.getElementById('positionName');
        const websiteLinkInput = document.getElementById('websiteLink');
        const passwordInput = document.getElementById('collegePassword');
        const agreeCheckbox = document.getElementById('collegeAgree');

        let isValid = true;

        // Validation rules
        if (chooseYourFieldInput.value === "") {
            displayError('ProfessorcategoryError', 'Please choose your field.');
            isValid = false;
        }

        if (nameOfFieldInput.value.trim() === "") {
            displayError('nameoffieldError', 'Please enter the name of your field.');
            isValid = false;
        }

        if (!isValidEmail(emailInput.value)) {
            displayError('collegeEmailError', 'Please enter a valid email address.');
            isValid = false;
        }

        if (!isValidPhoneNumber(phoneNumberInput.value)) {
            displayError('collegePhonenumberError', 'Please enter a valid phone number.');
            isValid = false;
        }

        if (positionNameInput.value.trim() === "") {
            displayError('positionNameError', 'Please enter a position name.');
            isValid = false;
        }

        if (websiteLinkInput.value.trim() === "") {
            displayError('websiteLinkError', 'Please enter a website link.');
            isValid = false;
        }

        if (passwordInput.value.length < 8) {
            displayError('collegePasswordError', 'Password must be at least 8 characters long.');
            isValid = false;
        }

        if (!agreeCheckbox.checked) {
            alert('Please agree to the Terms & Conditions.');
            isValid = false;
        }

        // Submit the form if valid
        if (isValid) {
            // Uncomment the line below if you want to submit the form
            form.submit();
            console.log('Form submitted successfully');
        }
    });

    // Function to display error messages
    function displayError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.innerText = message;
    }

    // Function to reset error messages
    function resetErrorMessages() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.innerText = '';
        });
    }

    // Function to validate email address format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number format
    function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }
});