document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("studentRegistrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission by default
        resetErrorMessages(); // Reset error messages

        const nameInput = document.getElementById('studentName');
        const lastNameInput = document.getElementById('studentLastName');
        const emailInput = document.getElementById('studentEmail');
        const phoneNumberInput = document.getElementById('studentPhoneNumber');
        const rejisternumber = document.getElementById('studentRejisterNumber');
        const passwordInput = document.getElementById('studentPassword');
        const passwordConfInput = document.getElementById('studentPasswordconf'); // Corrected ID spelling
        const agreeCheckbox = document.getElementById('studentAgree');

        let isValid = true;

        // Validation rules
        if (nameInput.value.length < 6) {
            displayError('studentNameError', 'Name must be at least 6 characters long.');
            isValid = false;
        }

        if (lastNameInput.value.length < 1) {
            displayError('studentLastNameError', 'Please enter a last name.');
            isValid = false;
        }

        if (!isValidEmail(emailInput.value)) {
            displayError('studentEmailError', 'Please enter a valid email address.');
            isValid = false;
        }

        if (!isValidPhoneNumber(phoneNumberInput.value)) {
            displayError('studentPhoneNumberError', 'Please enter a valid phone number.');
            isValid = false;
        }
        if (rejisternumber.value.length === 0) {
            displayError('studentRejisterNumberError', 'Register Number is required.'); // Corrected ID spelling
            isValid = false;
        }

        if (passwordInput.value.length < 8) {
            displayError('studentPasswordError', 'Password must be at least 8 characters long.');
            isValid = false;
        }

        if (passwordConfInput.value !== passwordInput.value) {
            displayError('studentPasswordconfError', 'Passwords do not match.'); // Corrected ID spelling
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