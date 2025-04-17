document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const error = document.getElementById('error');
  
    if (username === 'admin' && password === '1234') {
      error.textContent = '';
      alert('Login successful!');
      
    } else {
      error.textContent = 'Invalid username or password';
    }
  });
  