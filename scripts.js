// Show and hide the modal for Sign In/Sign Up
const modal = document.getElementById('modal');
const signinBtn = document.getElementById('signinBtn');
const closeBtn = document.querySelector('.close');
const showSignupBtn = document.getElementById('showSignup');
const formTitle = document.getElementById('formTitle');
const authForm = document.getElementById('authForm');

// Contact Us Modal
const contactModal = document.getElementById('contactModal');
const contactLink = document.getElementById('contactLink');
const closeContactBtn = document.querySelector('.close-contact');

// Open the modal when "Sign In" is clicked
signinBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    formTitle.textContent = 'Login';
    authForm.reset();
    toggleSignupForm(false);
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Toggle to the Sign-Up form
showSignupBtn.addEventListener('click', () => {
    formTitle.textContent = 'Sign Up';
    toggleSignupForm(true);
});

// Function to toggle between login and signup forms
function toggleSignupForm(isSignup) {
    const signupFields = `
        <div class="form-control">
            <input type="text" required id="signupFullname">
            <label>Full Name</label>
        </div>
        <div class="form-control">
            <input type="text" required id="signupUsername">
            <label>Username</label>
        </div>
        <div class="form-control">
            <input type="text" required id="signupAadhar">
            <label>Aadhar/PAN Number</label>
        </div>
        <div class="form-control">
            <input type="email" required id="signupEmail">
            <label>Email</label>
        </div>
        <div class="form-control">
            <input type="password" required id="signupPassword">
            <label>Password</label>
            <span class="eye-icon" id="toggleSignupPassword">👁️</span>
        </div>
        <div class="form-control">
            <input type="password" required id="confirmPassword">
            <label>Confirm Password</label>
            <span class="eye-icon" id="toggleConfirmPassword">👁️</span>
        </div>
    `;
    
    if (isSignup) {
        authForm.innerHTML = signupFields + `<button type="button" onclick="signup()">Sign Up</button>`;
        showSignupBtn.style.display = 'none';
    } else {
        authForm.innerHTML = `
            <div class="form-control">
                <input type="text" required id="loginUsernameEmail">
                <label>Username or Email</label>
            </div>
            <div class="form-control">
                <input type="password" required id="loginPassword">
                <label>Password</label>
                <span class="eye-icon" id="toggleLoginPassword">👁️</span>
            </div>
            <button type="button" onclick="login()">Sign In</button>
        `;
        showSignupBtn.style.display = 'block';
    }
}

// Signup function
async function signup() {
    const Fullname = document.getElementById('signupFullname').value;
    const Username = document.getElementById('signupUsername').value;
    const Aadhar = document.getElementById('signupAadhar').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const data = { Fullname, Username, Aadhar, email, password, confirmPassword };

    try {
        const response = await fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
        if (response.status === 201) {
            window.location.href='Investment.html';
            toggleSignupForm(false);
        }
      
    } catch (error) {
        console.error(error);
        alert('Error creating account');
    }
}

// Login function
async function login() {
    const username = document.getElementById('loginUsernameEmail').value;
    const password = document.getElementById('loginPassword').value;

    const data = { username, password };

    try {
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
        window.location.href="investment.html";
    } catch (error) {
        console.error(error);
        alert('Error logging in');
    }
   
}


// Toggle password visibility
document.addEventListener('click', function(e) {
    if (e.target.id === 'toggleLoginPassword') {
        const passwordField = document.getElementById('loginPassword');
        passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    }
    
    if (e.target.id === 'toggleSignupPassword') {
        const signupPasswordField = document.getElementById('signupPassword');
        signupPasswordField.type = signupPasswordField.type === 'password' ? 'text' : 'password';
    }

    if (e.target.id === 'toggleConfirmPassword') {
        const confirmPasswordField = document.getElementById('confirmPassword');
        confirmPasswordField.type = confirmPasswordField.type === 'password' ? 'text' : 'password';
    }
});

// About Us Modal Functionality
const aboutModal = document.getElementById('aboutModal');
const aboutLink = document.getElementById('aboutLink');
const closeAboutBtn = document.querySelector('.close-about');

// Open the About Us modal when "About" is clicked
aboutLink.addEventListener('click', () => {
    aboutModal.style.display = 'flex';
});

// Close the About Us modal when the close button is clicked
closeAboutBtn.addEventListener('click', () => {
    aboutModal.style.display = 'none';
});

// Close the About Us modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
});

// Contact Us Modal Functionality

// Open the Contact Us modal when "Contact Us" is clicked
contactLink.addEventListener('click', () => {
    contactModal.style.display = 'flex';
});

// Close the Contact Us modal when the close button is clicked
closeContactBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// Close the Contact Us modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});
