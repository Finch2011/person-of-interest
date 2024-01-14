const email2 = document.getElementById("email2");
const password2 = document.getElementById("password2");
const confirmPassword = document.getElementById("Confirm-Password");
const labelA = document.getElementById("label-1");
const labelB = document.getElementById("label-2");
const labelC = document.getElementById("label-3");
const formUp = document.getElementById("form-up");
const darkMod = document.getElementById("dark-mod");
const errors = document.getElementById("errors");
const sinSup = document.getElementById("sin-sup");
const btn = document.getElementById("btn");
const body = document.body;
const more = document.getElementById("more");
const info = document.getElementById("info");

function moreInfo(){
   more.style.display = "flex"
   info.style.display = "none"
}
function moreInfo2(){
  more.style.display = "none"
  info.style.display = "flex"
}

function signUp() {
  formUp.style.top = "0px";
  formUp.style.left = "550px";
}
function closeUp() {
  formUp.style.top = "-1000px";
}
function home() {
  if (
    email2.value.length == 0 &&
    password2.value.length == 0 &&
    confirmPassword.value.length == 0
  ) {
    errors.innerHTML = `<p> All of the information need to be filled ! </p>`;
  } else if (email2.value.length == 0) {
    errors.innerHTML = `<p> email is required ! </p>`;
  } else if (password2.value.length == 0) {
    errors.innerHTML = `<p> password is required ! </p>`;
  } else if (confirmPassword.value.length == 0) {
    errors.innerHTML = `<p> password is required ! </p>`;
  } else if (password2.value != confirmPassword.value) {
    errors.innerHTML = `<p> The password does not match! </p>`;
  } else {
    formUp.style.top = "-1000px";
    sinSup.style.display = "none";
    errors.innerHTML = ``;
  }
}

let isDark = false;

function toggle () {
    isDark = !isDark;
    isDark ? setDark() : setLight();
}


function setDark() {
  darkMod.src = "../assets/Group 30.svg";
  body.style.backgroundColor = "#000000";
  body.style.color = "#fff";
  formUp.style.backgroundColor = "#fff";
  email2.style.backgroundColor = "#fff";
  password2.style.backgroundColor = "#fff";
  confirmPassword.style.backgroundColor = "#fff";
  email2.style.border = "1.5px solid #000";
  password2.style.border = "1.5px solid #000";
  confirmPassword.style.border = "1.5px solid #000";
  labelA.style.color = "#000";
  labelB.style.color = "#000";
  labelC.style.color = "#000";
  email2.style.color = "#000";
  password2.style.color = "#000";
  confirmPassword.style.color = "#000";
}

function setLight() {
  darkMod.src = "../assets/Group 4.svg";
  body.style.backgroundColor = "#ffffff";
  body.style.color = "#000";
  formUp.style.backgroundColor = "#000";
  email2.style.backgroundColor = "#000";
  password2.style.backgroundColor = "#000";
  confirmPassword.style.backgroundColor = "#000";
  email2.style.border = "1.5px solid #fff";
  password2.style.border = "1.5px solid #fff";
  confirmPassword.style.border = "1.5px solid #fff";
  labelA.style.color = "#fff";
  labelB.style.color = "#fff";
  labelC.style.color = "#fff";
  email2.style.color = "#fff";
  password2.style.color = "#fff";
  confirmPassword.style.color = "#fff";
}
