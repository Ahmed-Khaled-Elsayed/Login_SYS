let userName = document.getElementById("userName");
let LogoutBtn=document.getElementById("LogoutBtn");



if(localStorage.getItem("UserSession") !== null)
{
    userName.innerHTML= localStorage.getItem("UserSession");
}


LogoutBtn.addEventListener("click", function()
{
    localStorage.removeItem("UserSession");
    window.location.replace("./index.html");
});