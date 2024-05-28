document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("speakerRegistrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission by default
        resetErrorMessages(); // Reset error messages

        const firstNameInput = document.getElementById('speakerFirstName');
        const lastNameInput = document.getElementById('speakerLastName');
        const emailInput = document.getElementById('speakerEmail');
        const phoneNumberInput = document.getElementById('speakerPhoneNumber');
        const passwordInput = document.getElementById('speakerPassword');
        const affiliationInput = document.getElementById('speakerAffiliation');
        const dobInput = document.getElementById('speakerDob');
        const agreeCheckbox = document.getElementById('speakerAgree');

        let isValid = true;

        // Validation rules
        if (firstNameInput.value.length < 6 || lastNameInput.value.trim() === '') {
            displayError('speakerNameError', 'First name must be at least 6 characters long and Last name cannot be empty.');
            isValid = false;
        }

        if (!isValidEmail(emailInput.value)) {
            displayError('speakerEmailError', 'Please enter a valid email address.');
            isValid = false;
        }

        if (!isValidPhoneNumber(phoneNumberInput.value)) {
            displayError('speakerPhoneNumberError', 'Please enter a valid phone number.');
            isValid = false;
        }

        if (passwordInput.value.length < 8) {
            displayError('speakerPasswordError', 'Password must be at least 8 characters long.');
            isValid = false;
        }

        if (affiliationInput.value.length < 6) {
            displayError('speakerAffiliationError', 'Affiliation/Company/Organization must be at least 6 characters long.');
            isValid = false;
        }

        // You can add additional validation rules for the date of birth (dobInput) if needed.

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