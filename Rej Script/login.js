document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission by default

        // Reset error messages
        resetErrorMessages();

        // Retrieve input values
        const emailInput = document.getElementById("loginEmail").value.trim();
        const passwordInput = document.getElementById("loginPassword").value;

        // Validate input values
        const emailValid = isValidEmail(emailInput);
        const passwordValid = isValidPassword(passwordInput);

        // Display error messages if validation fails
        displayErrorMessage("emailError", !emailValid, "Please enter a valid email address.");
        displayErrorMessage("passwordError", !passwordValid, "Password is required.");

        // If all validations pass, submit the form
        if (emailValid && passwordValid) {
            // Submit the form
            this.submit();
        }
    });

    // Function to reset error messages
    function resetErrorMessages() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }

    // Function to display error messages
    function displayErrorMessage(id, condition, message) {
        const errorElement = document.getElementById(id);
        if (condition) {
            errorElement.textContent = message;
        }
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to validate password presence
    function isValidPassword(password) {
        return password.trim() !== '';
    }
});
