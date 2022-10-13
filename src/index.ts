
let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let userRegExp = /^[A-Za-z0-9.]+$/;

let passRegExp = /^[A-Za-z0-9_.-]+$/;

let checkEmail = (email:String)=>{

    return String(email).toLowerCase().match(emailRegExp);
}
let checkUser = (user:String)=>{

    return String(user).toLowerCase().match(userRegExp);
}
let checkPass = (pass:String)=>{

    return String(pass).match(passRegExp);
}

let err:Boolean = false;

function register() {
    if(!err){

        alert('Sikeres regisztráció')
    }else{

        alert('Hibás regisztráció! \n Próbálja újra')
    }
}

  document.addEventListener("DOMContentLoaded", () => {

  let username = document.getElementById("username") as HTMLInputElement;
  username.addEventListener('change', ()=>{
    if(username.value.length>30 || username.value.length<6 || !checkUser(username.value)){
        err=true;
        document.getElementById('userErr')!.innerText = 'Hibás felhasználó név';

    }else {

        err=false;
        document.getElementById('userErr')!.innerText = '';

    }
    console.log(checkUser(username.value)); 

  }) 

  let email = document.getElementById("email") as HTMLInputElement;

  email.addEventListener('change', ()=>{

    if(!checkEmail(email.value)){

        err=true;
        document.getElementById('emailErr')!.innerText ='Hibás e-mail'

    }else {

        err = false;
        document.getElementById('emailErr')!.innerText =''
    }

    console.log(checkUser(email.value));
  })

  
  document.getElementById("register")?.addEventListener("click", register);
});
