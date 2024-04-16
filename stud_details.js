function validate_stud() {
    var name = document.getElementById('name').value;
    var matricNo = document.getElementById('matricNo').value;
    var currentAddress = document.getElementById('currentAddress').value;
    var homeAddress = document.getElementById('homeAddress').value;
    var email = document.getElementById('email').value;
    var mobilePhoneNo = document.getElementById('mobilePhoneNo').value;
    var homePhoneNo = document.getElementById('homePhoneNo').value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var matricNoRegex = /^\d{7}$/;
    var addressRegex = /^[a-zA-Z0-9\s\-,\/#]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneNoRegex = /^\d{10,11}$/;

    if (!nameRegex.test(name)) {
        alert('Please enter a valid name.');
        event.preventDefault();
        return false;
    }

    if (!matricNoRegex.test(matricNo)) {
        alert('Please enter a valid matriculation number (7 digits).');
        event.preventDefault();
        return false;
    }

    if (!addressRegex.test(currentAddress)) {
        alert('Please enter a valid current address.');
        event.preventDefault();
        return false;
    }

    if (!addressRegex.test(homeAddress)) {
        alert('Please enter a valid home address.');
        event.preventDefault();
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return false;
    }

    if (!phoneNoRegex.test(mobilePhoneNo)) {
        alert('Please enter a valid mobile phone number (10 or 11 digits).');
        event.preventDefault();
        return false;
    }

    if (!phoneNoRegex.test(homePhoneNo)) {
        alert('Please enter a valid home phone number (10 or 11 digits).');
        event.preventDefault();
        return false;
    }
    return true;
}


function validate_user() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^[a-zA-Z0-9]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid username.');
        event.preventDefault();
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('Please enter a valid password.');
        event.preventDefault();
        return false;
    }
    return true;
}


