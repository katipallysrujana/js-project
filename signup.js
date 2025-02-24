let password=document.getElementById("password")
let icon=document.getElementById("icon")
icon.onclick=function(){
    if(password.type==="password"){
        password.type="text"
        icon.className="fa-solid fa-eye"
    }else{
        password.type="password"
        icon.className="fa-solid fa-eye-slash"
    }
}
let signup=document.getElementById("signup");
let message=document.getElementById("messagebox")
signup.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name=document.getElementById("name").value.trim()
    let email=document.getElementById("email").value.trim()
    let password=document.getElementById("password").value.trim()
const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordpattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,15}$/;
message.textContent=""

if(name !=="" && email !== "" && password !== ""){
    if(emailpattern.test(email)){
        message.textContent="please enter a valid email address"
        message.style.color="red"
        
    }
    if(!passwordpattern.test(password)){
        message.textContent="password must be atleast 8 characters long,include atleast 1 uppercase,one lowercase letter,and one number"
        message.style.color="red"
        return;
    }
        let userData=JSON.parse (localStorage.getItem("users") ) || []
        userData.push({name:name,email:email,password:password})
    
        localStorage.setItem("users",JSON.stringify(userData));
        alert("signup done successfully")
        playbuttonsound()
        window.location.href="login.html"
        
    }else{
        alert("enter all the fields")
        window.location.href="signup.html"
       
    }
})

function playbuttonsound(){
    document.getElementById("buttonsound").play();
}