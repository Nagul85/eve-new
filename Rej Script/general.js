
// 06-05 update start 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("generalRegistrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission by default
        resetErrorMessages(); // Reset error messages

        const firstNameInput = document.getElementById('generalFirstName');
        const lastNameInput = document.getElementById('generalLastName');
        const emailInput = document.getElementById('generalEmail');
        const phoneNumberInput = document.getElementById('generalPhonenumber');
        const passwordInput = document.getElementById('generalPassword');
        const agreeCheckbox = document.getElementById('generalAgree');



        let isValid = true;

                // Validation rules
                if (firstNameInput.value.length < 6) {
                    displayError('generalFirstNameError', 'First name must be at least 6 characters long.');
                    isValid = false;
                }
        
                if (lastNameInput.value.length < 1) {
                    displayError('generalLastNameError', 'Please enter a last name.');
                    isValid = false;
                }

        if (!isValidEmail(emailInput.value)) {
            displayError('generalEmailError', 'Please enter a valid email address.');
            isValid = false;
        }

        if (!isValidPhoneNumber(phoneNumberInput.value)) {
            displayError('generalPhonenumberError', 'Please enter a valid phone number.');
            isValid = false;
        }

        if (passwordInput.value.length < 8) {
            displayError('generalPasswordError', 'Password must be at least 8 characters long.');
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


// 06-05 update end 
