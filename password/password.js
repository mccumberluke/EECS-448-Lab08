function myPassword(){
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if(password1.length < 8 || password2.length < 8){
        alert("the passwords are not at least 8 characters long");
    }
    if(password1 != password2){
        alert("the passwords entered don't match");
    }
    else if(password1 == password2){
        alert("verified");
    }
}