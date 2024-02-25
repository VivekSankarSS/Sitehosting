        function validateForm() {
            var email = document.getElementById("email").value.trim();
            var phone = document.getElementById("phone").value.trim();
            var password = document.getElementById("password").value;

            var isValid = true;

            // Email validation
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").innerHTML = "Please enter a valid email address";
                isValid = false;
            } else {
                document.getElementById("emailError").innerHTML = "";
            }

            // Phone number validation
            var phonePattern = /^\d{10}$|^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;
            if (!phonePattern.test(phone)) {
                document.getElementById("phoneError").innerHTML = "Please enter a valid phone number";
                isValid = false;
            } else {
                document.getElementById("phoneError").innerHTML = "";
            }

            // Password validation
            var passwordStrength = document.getElementById("passwordStrength");
            var passwordStrengthMessage = "";
            var passwordStrengthClass = "";

            if (password.length < 8) {
                passwordStrengthMessage = "Password must be at least 8 characters long";
                passwordStrengthClass = "weak";
                isValid = false;
            } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
                passwordStrengthMessage = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
                passwordStrengthClass = "weak";
                isValid = false;
            } else {
                passwordStrengthMessage = "Password strength: ";
                if (password.length < 12) {
                    passwordStrengthMessage += "Medium";
                    passwordStrengthClass = "medium";
                } else {
                    passwordStrengthMessage += "Strong";
                    passwordStrengthClass = "strong";
                }
            }

            passwordStrength.innerHTML = passwordStrengthMessage;
            passwordStrength.className = "password-strength " + passwordStrengthClass;

            return isValid;
        }
