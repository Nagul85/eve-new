document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("professorRegistrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission by default
        resetErrorMessages(); // Reset error messages

        // Get form input elements
        const firstNameInput = document.getElementById('professorFirstName');
        const lastNameInput = document.getElementById('professorLastName');
        const emailInput = document.getElementById('professorEmail');
        const phoneNumberInput = document.getElementById('professorPhoneNumber');
        const passwordInput = document.getElementById('professorPassword');
        const institutionNameInput = document.getElementById("professorInstitutionName");
        const institutionIDInput = document.getElementById("professorInstitutionID");
        const professorCategory = document.getElementById("professorCategory");
        const professordeptInput = document.getElementById("professorDepartment");
        const professorexpInput = document.getElementById("professorExperience");
        const agreeCheckbox = document.getElementById('professorAgree');

        let isValid = true;

        // Validation rules
        if (firstNameInput.value.length < 6) {
            displayError('professorFirstNameError', 'First name must be at least 6 characters long.');
            isValid = false;
        }

        // Add validation rules for other input fields

        if (!isValid) {
            return; // Exit early if validation fails
        }

        // Submit the form if valid
        if (isValid) {
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