// // Toggle navbar menu on mobile
// const navbarToggle = document.getElementById('navbar-toggle');
// const navbarLinks = document.querySelector('.navbar-links');

// navbarToggle.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active');
// });

// // JavaScript for SIGN-UP validation
// function validateForm() {
//   const fullname = document.getElementById('fullname').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirm-password').value;

//   // Check if any fields are empty
//   if (fullname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
//     alert('Please fill in all fields!');
//     return false;
//   }

//   // Check if passwords match
//   if (password !== confirmPassword) {
//     alert('Passwords do not match!');
//     return false;
//   }

//   // Check if the password is at least 6 characters long
//   if (password.length < 6) {
//     alert('Password must be at least 6 characters long!');
//     return false;
//   }

//   // If everything is fine, show success message and allow form submission
//   alert('Sign Up Successful!');
//   return true;
// }

// // JavaScript for LOG-IN validation
// function validateLoginForm() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Check if username and password fields are empty
//   if (username.trim() === '' || password.trim() === '') {
//     alert('Please fill in both fields!');
//     return false; // Prevent form submission if validation fails
//   }

//   // You can implement more complex validation here (like checking if email is valid)

//   // For this demo, assume the login is successful
//   alert('Login Successful!');
//   return true;
// }

