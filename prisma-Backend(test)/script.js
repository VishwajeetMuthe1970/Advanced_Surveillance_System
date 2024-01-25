// Main code for connection 

async function registerUser() {
  const registrationForm = document.getElementById('registrationForm');
  const formData = new FormData(registrationForm);

  try {
    const response = await fetch('http://localhost:2000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) {
      const result = await response.json();
      alert(`User registered successfully!\n${result.message}`);
      // You may redirect the user to a login page or perform other actions here
    } else {
      const errorData = await response.json();
      alert(`Registration failed: ${errorData.error}`);
    }
  } catch (error) {
    console.error('Error during registration:', error);
    alert(`An error occurred during registration. Please try again.\n${error.message}`);
  }
  
}

// login.js

async function loginUser() {
  const loginForm = document.getElementById('loginForm');
  const formData = new FormData(loginForm);

  try {
    const response = await fetch('http://localhost:2000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) {
      const result = await response.json();
      alert(`Login successful!\n${result.message}`);
      // You may redirect the user to a dashboard or perform other actions here
    } else {
      const errorData = await response.json();
      alert(`Login failed: ${errorData.error}`);
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert(`An error occurred during login. Please try again.\n${error.message}`);
  }
}

// logout.js

async function logoutUser() {
  try {
    const response = await fetch('http://localhost:2000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // You may include additional headers or data as needed
    });

    if (response.ok) {
      const result = await response.json();
      alert(`Logout successful!\n${result.message}`);
      // You may redirect the user to a home page or perform other actions here
    } else {
      const errorData = await response.json();
      alert(`Logout failed: ${errorData.error}`);
    }
  } catch (error) {
    console.error('Error during logout:', error);
    alert(`An error occurred during logout. Please try again.\n${error.message}`);
  }
}


  