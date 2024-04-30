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
