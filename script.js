
const studentData = {
    "202307030004": {
        name: "Dhir Shah",
        email: "202307030004@karnavatiuniversity.edu",
        program: "BS + MS",
        semester: "4th",
        batch: "2023-2028",
        dob: "2006-03-23",
        address: "Karnavati University, Uvarsad Village, Gandhinagar, Gujarat 382422",
        phone: "+91 94267 50060",
        photo: "C:\\Users\\shahd\\OneDrive\\Pictures\\mine.jpg",
        cgpa: "8.05",
        attendance: "70%"
    },
};

document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        showPortal(userData.id);
    }
});

function switchTab(tabName) {
    document.querySelectorAll('.login-form').forEach(form => {
        form.classList.remove('active-tab');
    });
    
    document.getElementById(tabName + '-login').classList.add('active-tab');
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleBtn = passwordInput.nextElementSibling;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = 'Show';
    }
}

function showForgotPassword() {
    document.querySelectorAll('.login-box').forEach(box => {
        box.classList.add('hidden');
    });
    document.getElementById('forgot-password').classList.remove('hidden');
}

function showFirstTimeLogin() {
    document.querySelectorAll('.login-box').forEach(box => {
        box.classList.add('hidden');
    });
    document.getElementById('first-time-login').classList.remove('hidden');
}

function backToLogin() {
    document.querySelectorAll('.login-box').forEach(box => {
        box.classList.add('hidden');
    });
    document.querySelector('.login-box:first-of-type').classList.remove('hidden');
}

function validateStudentLogin(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('studentPassword').value;
    
    if (studentData[studentId]) {
        showPortal(studentId);
        
        if (document.getElementById('rememberStudent').checked) {
            localStorage.setItem('loggedInUser', JSON.stringify({
                id: studentId,
                type: 'student'
            }));
        }
    } else {
        alert('Invalid enrollment number or password. Please try again.');
    }
    
    return false;
}

function validateFacultyLogin(event) {
    event.preventDefault();
    alert('Faculty login functionality is not implemented in this demo.');
    return false;
}

function validateAdminLogin(event) {
    event.preventDefault();
    alert('Administrator login functionality is not implemented in this demo.');
    return false;
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('resetEmail').value;
    alert(`Password reset link has been sent to ${email}`);
    backToLogin();
    return false;
}

function handleFirstTimeLogin(event) {
    event.preventDefault();
    const enrollment = document.getElementById('newEnrollment').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }
    
    alert('Account created successfully! You can now log in with your enrollment number and password.');
    backToLogin();
    return false;
}

function showPortal(studentId) {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('portal-container').classList.remove('hidden');
    
    const student = studentData[studentId];
    
    const userPhoto = document.getElementById('user-photo');
    userPhoto.src = student.photo;
    userPhoto.classList.add('img-fluid');
    
    const userName = document.getElementById('user-name');
    userName.textContent = student.name;
    
    const userId = document.getElementById('user-id');
    userId.textContent = studentId;
    
    const profilePhoto = document.getElementById('profile-photo');
    profilePhoto.src = student.photo;
    profilePhoto.classList.add('img-fluid');  
    
    const profileName = document.getElementById('profile-name');
    profileName.textContent = student.name;
    
    const profileProgram = document.getElementById('profile-program');
    profileProgram.textContent = student.program;
    
    const profileSemester = document.getElementById('profile-semester');
    profileSemester.textContent = student.semester;
    
    const profileCgpa = document.getElementById('profile-cgpa');
    profileCgpa.textContent = student.cgpa;
    
    const profileAttendance = document.getElementById('profile-attendance');
    profileAttendance.textContent = student.attendance;
    
    const profileId = document.getElementById('profile-id');
    profileId.textContent = studentId;
    
    const profileEmail = document.getElementById('profile-email');
    profileEmail.textContent = student.email;
    
    const profileDob = document.getElementById('profile-dob');
    profileDob.textContent = student.dob;
    
    const profilePhone = document.getElementById('profile-phone');
    profilePhone.textContent = student.phone;
    
    const profileAddress = document.getElementById('profile-address');
    profileAddress.textContent = student.address;
    
    const profileProgramDetail = document.getElementById('profile-program-detail');
    profileProgramDetail.textContent = student.program;
    
    const profileBatch = document.getElementById('profile-batch');
    profileBatch.textContent = student.batch;
    
    const profileSemesterDetail = document.getElementById('profile-semester-detail');
    profileSemesterDetail.textContent = student.semester;
    
    showSection('profile');
}

function showSection(sectionName) {
 
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    

    document.getElementById(sectionName + '-section').classList.add('active');
    

    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    const links = document.querySelectorAll('.sidebar nav a');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('onclick').includes(sectionName)) {
            links[i].classList.add('active');
            break;
        }
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    document.getElementById('portal-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
    
    document.getElementById('studentId').value = '';
    document.getElementById('studentPassword').value = '';
    document.getElementById('rememberStudent').checked = false;
}

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent. We will get back to you soon!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function () {
    const portalContainer = document.getElementById('portal-container');
    portalContainer.classList.add('container', 'mt-5');

    const profileSection = document.getElementById('profile-section');
    profileSection.classList.add('row');

    const profileInfo = document.querySelectorAll('#profile-section p');
    profileInfo.forEach(p => {
        p.classList.add('col-md-6', 'mb-3');
    });

    const sidebarNav = document.querySelector('.sidebar nav');
    sidebarNav.classList.add('list-group');
    
    const logoutBtn = document.querySelector('.sidebar nav a:last-child');
    logoutBtn.classList.add('btn', 'btn-danger');
});
