
let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let userReg = /^[A-Za-z0-9.]+$/;

let passReg = /^[A-Za-z0-9_.-]+$/;

let validEmail = (email:String)=>{

    return String(email).toLowerCase().match(emailReg);
}
let validUser = (user:String)=>{

    return String(user).toLowerCase().match(userReg);
}
let validPass = (pass:String)=>{

    return String(pass).match(passReg);
}

let error:Boolean = false;

function regist() {
    if(!error){

        alert('Sikeresen regisztrált')
    }else{

        alert('Hibás regisztráció, próbálja újra!')
    }
}

  document.addEventListener("DOMContentLoaded", () => {
    console.log('content loaded')

  let username = document.getElementById("username") as HTMLInputElement;
  username.addEventListener('change', ()=>{
    if(username.value.length>30 || username.value.length<6 || !validUser(username.value)){
        error=true;
        document.getElementById('userErr')!.innerText = 'Hibás felhasználó név';

    }else {

        error=false;
        document.getElementById('userErr')!.innerText = '';

    }
    console.log(validUser(username.value)); 

  }) 

  let email = document.getElementById("email") as HTMLInputElement;

  email.addEventListener('change', ()=>{

    if(!validEmail(email.value)){

        error=true;
        document.getElementById('emailErr')!.innerText ='Hibás e-mail'

    }else {

        error = false;
        document.getElementById('emailErr')!.innerText =''
    }

    console.log(validUser(email.value));
  })

  
  document.getElementById("register")?.addEventListener("click", regist);
});
