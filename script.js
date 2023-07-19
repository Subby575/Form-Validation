var NameError=document.getElementById('name-error');
var PhoneError=document.getElementById('phone-error');
var EmailError=document.getElementById('email-error');
var MessageError=document.getElementById('message-error');
var SubmitError=document.getElementById('submit-error');


function validateName(){
    var name=document.getElementById('contact-name').value;

    if(name.length==0){
        NameError.innerHTML='Name is Required!';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        NameError.innerHTML='Write Full Name';
        return false;
    }
    NameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}


function validatePhone(){
    var phone=document.getElementById('contact-phone').value;

    if(phone.length==0){
        PhoneError.innerHTML='Phone no is Required!';
        return false;
    }
    if(phone.length!==10){
        PhoneError.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML='There is something wrong';
        return false;
    }
    PhoneError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        EmailError.innerHTML='Email is Required!';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        EmailError.innerHTML='Email is Invalid!';
        return false; 
    }
    EmailError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    var message=document.getElementById("contact-message").value;
    var required=30;
    var left=required-message.length;

    if(left>0){
        MessageError.innerHTML=left+' More Characters required';
        return false;
    }
    MessageError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

}


function validateForm(){
    if(!validateName()||!validatePhone()||!validateEmail()||!validateMessage()){
        SubmitError.style.display="block";
        SubmitError.innerHTML="Please fix error ";
        setTimeout(() => {
            SubmitError.style.display="none";   
        }, 3000);
        return false;
    }
}