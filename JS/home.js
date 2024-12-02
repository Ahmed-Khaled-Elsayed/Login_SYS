let userName = document.getElementById("userName");
let LogoutBtn=document.getElementById("LogoutBtn");
let LoginBtn=document.getElementById("LoginBtn");
let SignUpBtn=document.getElementById("SignUpBtn");

if(localStorage.getItem("UserSession") !== null)
{
    userName.innerHTML= localStorage.getItem("UserSession");
    LogoutBtn.classList.replace("d-none","d-block");
}
else
{
    LoginBtn.classList.replace("d-none","d-block");
    SignUpBtn.classList.replace("d-none","d-block");
}


LogoutBtn.addEventListener("click", function()
{
    localStorage.removeItem("UserSession");
    location.assign("./index.html");
});

LoginBtn.addEventListener("click",function()
{
    location.assign("./index.html");
});

SignUpBtn.addEventListener("click",function()
{
    location.assign("./signup.html");
});