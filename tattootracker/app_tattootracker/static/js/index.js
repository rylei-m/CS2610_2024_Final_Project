// index.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            console.log('Login successful:', data.token);
            // You can store the token in localStorage and redirect, or manage state as needed
            localStorage.setItem('token', data.token);
            window.location.href = '/some-secured-page';
        } else {
            alert('Login failed: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
});


// This script could be placed in a separate JS file or within a <script> tag in your HTML

// Check session on page load
// app_tattootracker/static/js/index.js

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in on page load
    if (localStorage.getItem('token')) {
        window.location.href = '/dashboard'; // Redirect to the dashboard if logged in
    }
});

// Login functionality - assumed to be called by submitting a form
function login(username, password) {
    fetch('/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);  // Store token
            window.location.href = '/dashboard'; // Redirect to dashboard on successful login
        } else {
            alert('Login failed: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
}

// Logout functionality
function logout() {
    fetch('/api/logout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
        }
    })
    .then(() => {
        localStorage.removeItem('token'); // Clear token from local storage
        window.location.href = '/login'; // Redirect to login page
    })
    .catch(error => console.error('Logout failed:', error));
}


// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = '/dashboard'; // Redirect to dashboard on successful login
        } else {
            alert('Login failed: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
});

// This could be part of the homepage JavaScript logic
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('token')) {
        window.location.href = '/login'; // Redirect to login if not logged in
    } else {
        // Display logged-in user content
    }
});

