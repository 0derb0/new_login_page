function Get(name, id=false, clsN=false, tagN=false) {
    if (id) return document.getElementById(name);
    else if (clsN) return document.getElementsByClassName(`${name}`);
    else if (tagN) return document.getElementsByTagName(`${name}`);
}

const CheckBox = Get('give_password', id=true);
const Password = Get('pass', id=true);

CheckBox.onclick = togglePassword;

function togglePassword() {
    if (CheckBox.checked) 
        Password.type = "text";
    else
        Password.type = "password";
}