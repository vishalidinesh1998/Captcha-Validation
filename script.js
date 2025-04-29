function generatecaptchaText(length=6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
 for(i=0;i<length;i=i+1){
    captcha +=characters.charAt(Math.floor(Math.random() * characters.length))
 }
 return captcha;
 
}

let gcaptcha=document.getElementById("captcha")
gcaptcha.textContent=generatecaptchaText()
let verify=document.getElementById("verify")
form=document.getElementById("form")
verify.addEventListener("click",function(){
   let userinput=document.getElementById("user").value
    if(userinput===""){
        alert("Fill the Captcha")
    }

   else if(userinput=== gcaptcha.textContent){
        alert("Captcha Verified Successfully!")
        form.submit();
    }
    else{
        alert("Invalid Captcha. Please try again.")
         form.submit();
    }

})


    
