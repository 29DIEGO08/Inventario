const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username === 'admin' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});

