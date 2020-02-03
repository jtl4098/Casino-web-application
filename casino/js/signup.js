 /**
 * 
 * Program : dice.js
 * @author : Taekyung Kil
 * Date : 10/Oct/2019
 I, Taekyung Kil, student number 000799798 , 
 certify that all code submitted is my own work; that I have not copied it from any other source. 
  I also certify that I have not allowed my work to be copied by others.
 */

window.addEventListener("load", function() {

    document.forms.userform.addEventListener("submit", function(e){
        e.preventDefault();
        user.username = document.forms.userform.username.value;
      //  user.usermoney = parseInt(document.forms.userform.userbank.value);
        userstatus.innerHTML = "User Name : ["+user.username + "], Money : [$"+ user.usermoney + "]";
        userstatus.style.color = "blue";


        let username = document.getElementById("username").value;
        let userpassword = document.getElementById("userpassword").value;
        let params = "username=" + username + "&userpassword="+userpassword;
        console.log(username);
        console.log(userpassword);

        fetch("./server/login.php",{
            method : 'POST',
                credentials: 'include',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: params
        })
        .then(response => response.json())
        .then(success)
        
    })
});