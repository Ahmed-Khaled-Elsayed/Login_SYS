let userEmail = document.getElementById("userEmail");
let password = document.getElementById("password");
let errorMsg = document.getElementById("errorMsg");
let signup = document.getElementById("signup");
let loginBtn= document.querySelector(".container .inputs button");

let users = [];

if (localStorage.getItem("users") !== null) {
  users = JSON.parse( localStorage.getItem("users"));
}


function Login()
{
    if(validateInputs() && checkUser(userEmail.value , password.value))
    {
        location.assign("./home.html");
    }
}


function validateInputs()
{
    if(userEmail.value.length === 0 || password.value.length === 0)
    { 
        errorMsg.innerHTML=`
        <p><i class="fa-solid fa-triangle-exclamation"></i> All Fields required</p>
        `
        return false;
    }
    return true;
};

function checkUser(email , pass)
{
    for(let i=0 ; i<users.length ; i++)
    {
        console.log(users[i].email);
        if(users[i].Email == email)
        {
            if(users[i].password == pass)
            {
                localStorage.setItem("UserSession", users[i].name);
                return true;
            }
            else
            {
                errorMsg.innerHTML=`
                <p><i class="fa-solid fa-triangle-exclamation"></i> password incorrect</p>
                `
                return false;
            }
        }
    }

    errorMsg.innerHTML=`
        <p><i class="fa-solid fa-triangle-exclamation"></i> Email incorrect</p>
        `
        return false;
};

loginBtn.addEventListener("click" , function()
{
    Login();

})

signup.addEventListener("click" , function()
{
    location.assign("./signup.html");
})