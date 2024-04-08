document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registration-form");
    var nameInput = document.getElementById("name");
    var yearOfBirthInput = document.getElementById("year-of-birth");
    var usResidentCheckbox = document.getElementById("us-resident");
    var zipcodeInput = document.getElementById("zipcode");
    var passwordInput = document.getElementById("password");
    var pizzaSelect = document.getElementById("pizza");
    var validationMessage = document.getElementById("validation-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var isValid = true;
        // Get the length of the input value
        var inputValueLength = nameInput.value.length;

        // Validate name
        if (inputValueLength < 3) {
            document.getElementById("name-error").textContent = "Name must be at least 3 characters long.";
            isValid = false;
        } else {
            document.getElementById("name-error").textContent = "";
        }

        // Validate year of birth
        if (!(yearOfBirthInput.value > 1900 && yearOfBirthInput.value < 2100)) {
            document.getElementById("year-of-birth-error").textContent = "Year of birth must be between 1900 and 2099.";
            isValid = false;
        } else {
            document.getElementById("year-of-birth-error").textContent = "";
        }

        if (usResidentCheckbox.checked) {
            // Validate zipcode if the user is a US resident
            if (!(isValidZipCode(zipcodeInput.value))) {
                document.getElementById("zipcode-error").textContent = "Zipcode must be a 5-digit number.";
                isValid = false;
            } else {
                document.getElementById("zipcode-error").textContent = "";
            }
        } else {
            document.getElementById("zipcode-error").textContent = "";

            if (zipcodeInput.value !== "") {
                if (!(isValidZipCode(zipcodeInput.value))) {
                    document.getElementById("zipcode-error").textContent = "Zipcode must be a 5-digit number.";
                    isValid = false;
                } else {
                    document.getElementById("zipcode-error").textContent = "";
                }
            }
        }

        // Validate password
        if (passwordInput.value.length < 8) {
            document.getElementById("password-error").textContent = "Password must be at least 8 characters long.";
            isValid = false;
        } else {
            document.getElementById("password-error").textContent = "";
        }

        // Validate pizza selection
        if (pizzaSelect.value === "") {
            document.getElementById("pizza-error").textContent = "Please select a preferred type of pizza.";
            isValid = false;
        } else {
            document.getElementById("pizza-error").textContent = "";
        }

        // Show validation message
        if (isValid) {
            validationMessage.textContent = "Accepted";
        } else {
            validationMessage.textContent = "";
        }
    });
});

function isValidZipCode(zip) {    
    // Regular expression to match 5-digit ZIP code
    var zipRegex = /^\d{5}$/;
    
    // Test if the string matches the regular expression pattern
    return zipRegex.test(zip);
}
