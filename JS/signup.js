let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let password = document.getElementById("password");
let signupBtn= document.querySelector(".container .inputs button");
let errorMsg = document.getElementById("errorMsg");
let login = document.getElementById("login");

let users = [];

if (localStorage.getItem("users") !== null) {
  users = JSON.parse( localStorage.getItem("users") );
}

function addUser()
{
    if(validateNewUser() && validateInputs())
    {
            let user =
        {
            name:userName.value,
            Email:userEmail.value,
            password:password.value
        }
        users.push(user);
        localStorage.setItem("users" , JSON.stringify(users));
        // location.assign("./index.html");
        window.location.replace("./index.html");
    }
}

function validateNewUser()
{
    for(let i=0 ; i < users.length ; i++)
    {
        if(users[i].Email === userEmail.value)
        {
            errorMsg.innerHTML=`
            <p><i class="fa-solid fa-triangle-exclamation"></i> Email already exists</p>
            `
            return false;
        }
    }
    return true;
}

function validateInputs()
{
    if(userName.value.length=== 0 || userEmail.value.length=== 0 || password.value.length=== 0)
    {  
        errorMsg.innerHTML=`
        <p><i class="fa-solid fa-triangle-exclamation"></i> All Fields required</p>
        `
        return false;
    }
    else if(!validateName(userName.value))
    {
        errorMsg.innerHTML=`
        <p><i class="fa-solid fa-triangle-exclamation"></i> Name must be at least 3 characters</p>
        `
        return false;
    }
    else if(!validateEmail(userEmail.value))
    {
        errorMsg.innerHTML=`
        <p><i class="fa-solid fa-triangle-exclamation"></i> Invalid Email</p>
        `
        return false;
    }
    else if(!validatePassword(password.value))
    {
        errorMsg.innerHTML=`
        <p><i class="fa-solid fa-triangle-exclamation"></i> password length must be at least 8 with no spaces</p>
        `
        return false;
    }

    return true;
}

function validateName( name )
{
    if(name.length < 3)
        return false;
    return true;
}

function validatePassword( pass )
{
    let reg = /^\S{8,}$/;

    if(reg.test(pass))
        return true;

    return false;
}

function validateEmail( email )
{
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(reg.test(email))
        return true;
    
    return false;
}

signupBtn.addEventListener("click" , function()
{
    addUser();
});

login.addEventListener("click" , function()
{
    // location.assign("./index.html");
    window.location.replace("./index.html");
})