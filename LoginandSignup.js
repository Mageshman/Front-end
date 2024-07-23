document.addEventListener('DOMContentLoaded', function () {
    hideElement('signup');
});
function hideElement(elementIds) {
    document.getElementById(elementIds).style.display = 'none';
}

function showElement(elementId) {
    document.getElementById(elementId).style.display = 'block';
}

function showElements(elementId) {
    document.getElementById(elementId).style.display = 'flex';
}

function showsign() {
    hideElement('login');
    showElements('signup');
}

function showLogin() {
    showElements('login');
    hideElement('signup');
    hideElement('Pop');
    hideElement('Pop2');
}

// Validation for Login
function fun() {
    var c = document.getElementById('mail').value;
    var d = document.getElementById('lock').value;

    var error1 = document.getElementById('err6');
    var error2 = document.getElementById('err5');

    if (c.trim() === "") {
        error1.innerText = "Email-Id Required";
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)) {
        error1.innerText = "Enter a valid Email-Id";
        return false;
    } else {
        error1.innerText = "";
    }

    if (d.trim() === "") {
        error2.innerText = "Password Required";
        return false;
    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(d)) {
        error2.innerText = "Enter a valid Password";
        return false;
    } else {
        error2.innerText = "";
    }

    const Storage = localStorage.getItem('allinputs');
  
    allinputs = JSON.parse(Storage);

    if (allinputs === null) {
        var alert = document.getElementById('Pop');
        alert.style.display = "block";
        mail.value = "";
        lock.value = "";
    } else {
        const matchingUser = allinputs.find(user => user.Mail === c);

        if (!matchingUser || null) {
            var alert = document.getElementById('Pop');
            alert.style.display = "block";
            mail.value = "";
            lock.value = "";
        }
        else {
            const matchingpassword = allinputs.find(user => user.Mail === c && user.Password === d);
            if (!matchingpassword) {
                error2.innerText = "Invalid Password";
                lock.value = "";
            } else {
                error2.innerText = "";
                window.location.href = 'Flip.html';
            }

        }
    }
}

function exit() {
    var alert = document.getElementById('Pop');
    alert.style.display = "none";
}
function exit2() {
    var alert = document.getElementById('Pop2');
    alert.style.display = "none";
}

function sign() {
    showElements('signup');
    hideElement('Pop')
    hideElement('login')
}
function loginpage() {
    hideElement('Pop2');
    hideElement('signup');
    window.location.href = "Flip.html";
}
// Validation for Signup
function Signup() {
    var username = document.getElementById('Uname').value.trim();
    var gmail = document.getElementById('ssmail').value.trim();
    var Password = document.getElementById('Pass').value.trim();
    var Confirmpass = document.getElementById('Cpass').value.trim();

    var error1 = document.getElementById('err1');
    var error2 = document.getElementById('err2');
    var error3 = document.getElementById('err3');
    var error4 = document.getElementById('err4');

    if (username === "") {
        error1.innerText = "Username Required";
        return false;
    }
    else {
        error1.innerText = "";
    }
    if (gmail === "") {
        error2.innerText = "Email-Id Required";
        return false;

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail)) {
        error2.innerText = "Enter a valid Email-Id";
        error1.style.display = "none";
        return false;
    }
    else {
        error2.innerText = "";
    }


    if (Password === "") {
        error3.innerText = "Password Required";
        return false;
    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(Password)) {
        error3.innerText = "Enter a valid Password";
        return false;
    }
    else {
        error3.innerText = "";
    }

    if (Confirmpass === "") {
        error4.innerText = "Confirm Password Required";
        return false;
    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(Confirmpass)) {
        error4.innerText = "Enter a valid Confirm Password";
        return false;
    } else if (Password !== Confirmpass) {
        error4.innerHTML = "Password Doesn't Match";
        return false;
    }
    else {
        error4.innerText = "";
    }

    const Storage = localStorage.getItem('allinputs');
    var allinputs = [];
    if (Storage !== null) {
        allinputs = JSON.parse(Storage);
    }
    const matchingmail = allinputs.find(user => user.Mail === gmail);
    if (matchingmail) {
        alert("Exisiting User...");
    }
    else {
        const ouput = {
            Name: username,
            Mail: gmail,
            Password: Password,
        };
        allinputs.push(ouput);
        localStorage.setItem('allinputs', JSON.stringify(allinputs));
        showElements('Pop2');
        Uname.value = "";
        ssmail.value = "";
        Pass.value = "";
        Cpass.value = "";

    }

}