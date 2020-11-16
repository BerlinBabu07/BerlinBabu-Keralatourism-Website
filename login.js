function validate(){

let email= document.getElementById("email");
let pwd = document.getElementById("pwd");
let emailerr=document.getElementById("email-error");
let passerr=document.getElementById("password-error");
let emailCheck= /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let pwdcheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


    if(emailCheck.test(email.value))
    {
        return true;
    }
    else if(pwdcheck.test(pwd.value))

    {
        return true;
    }
    else if(email.value == "" || pwd.value=="")
    {
        alert("feilds cannot be empty");
        return false;
    }
    else{
        emailerr.innerHTML= "*Invalid Email ID";
        passerr.innerHTML= "*Invalid password";
        return false;

    }
}


// {
//     var pswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w]{8,}$/;
//     if(pwd.trim() =="" || pwd.trim()== 'null')
//     {
//         passerr.innerHTML = "**Field cannot be empty!"
//         flag=1;
//     }

    

//     if(res.test(email.value)!="1")
//     {
//         window.alert("Email Is Invalid");
//         return false;
//     }
//     else if(pswd.test(pwd.value)!="1")
//     {
//         window.alert("Password Is Invalid, try again");
//         window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");

//         return false;
//     }


// }

