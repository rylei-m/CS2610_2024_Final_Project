// static/js/auth.js
document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
});

// static/js/auth.js

// static/js/auth.js

function login(event) {
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
            window.location.href = '/'; // Redirect to the home page
        } else {
            alert('Login failed: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
}



// static/js/auth.js

function signup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (response.status === 201) {
            // Optionally, log in the user directly
            localStorage.setItem('token', data.token);
            window.location.href = '/'; // Redirect to home or a dashboard
        } else {
            alert('Signup failed: ' + data.error);
        }
    });
}



function checkLogin() {
    if (localStorage.getItem('token')) {
        document.getElementById('auth').innerHTML = 'You are logged in. <button onclick="logout()">Logout</button>';
    } else {
        document.getElementById('auth').innerHTML = 'Please <a href="/login">Log In</a> or <a href="/signup">Sign Up</a>.';
    }
}

function logout() {
    fetch('/api/logout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
        }
    }).then(() => {
        localStorage.removeItem('token');
        checkLogin();
    }).catch(error => console.error('Logout failed:', error));
}
