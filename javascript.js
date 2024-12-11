document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Dummy validation and success message
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'your_username' && password === 'your_password') {
        alert('Valid credentials. Logging in...');
        window.location.href = 'home.html'; // Redirect to home page after successful login
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Dummy registration success message
    alert('Registration successful. Redirecting to login page...');
    window.location.href = 'login.html'; // Redirect to login page after successful registration
});
