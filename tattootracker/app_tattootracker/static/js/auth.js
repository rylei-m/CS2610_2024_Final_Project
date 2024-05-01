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

function uploadFile(file) {
    let url = '{% url "upload_handler" %}'; // Correct URL for the upload handler
    let formData = new FormData();

    formData.append('file', file);

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

formData.append('csrfmiddlewaretoken', getCookie('csrftoken'));

document.addEventListener("DOMContentLoaded", function() {
    const uploadForm = document.getElementById('upload-form');
    const uploadUrl = uploadForm.getAttribute('data-upload-url');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);

        fetch(uploadUrl, {  // Use the URL from the data attribute
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
});

function getCsrfToken() {
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}

fetch(uploadUrl, {
    method: 'POST',
    body: formData,
    headers: {
        'X-CSRFToken': getCsrfToken()
    }
})
