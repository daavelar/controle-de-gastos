class User {
    
}

function saveUser() 
{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var percentage = document.getElementById('percentage').value;
    
    var user = new User;
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.percentage = percentage;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this);
        }
    };
    
    xhttp.open("POST", "cookies.php", true);
    xhttp.send();
}