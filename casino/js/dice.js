 /**
 * 
 * Program : dice.js
 * @author : Taekyung Kil
 * Date : 06/Dec/2019
 I, Taekyung Kil, student number 000799798 , 
 certify that all code submitted is my own work; that I have not copied it from any other source. 
  I also certify that I have not allowed my work to be copied by others.
 */

window.addEventListener("load", function() {

    class DiceeGame {
       constructor(){
           this.firstDice = Math.floor(Math.random()*6+1);
           this.secondDice = Math.floor(Math.random()*6+1);
           this.thirdDice = Math.floor(Math.random()*6+1);
            
           this.diceSum = this.firstDice + this.secondDice + this.thirdDice;
       }        
    }
    class User{
        constructor(){
            let username ;
            let usermoney =0;
            let userdecision = "";
            let userevennumber = false;
        }
        
    }
    //To check the types of errors
    let checkerror =0;
    let checkerrorforbet=0;

    //Set user bet 
    let userbet =0;

    // Create variables to add event listener
    let errmsg = document.getElementById("errmsg");
    let rollbutton = document.getElementById("rollbutton");
    let firstDiceImage = document.getElementById("firstDiceImage");
    let secondDiceImage = document.getElementById("secondDiceImage");
    let thirdDiceImage = document.getElementById("thirdDiceImage");
    let small = document.getElementById("small");
    let big = document.getElementById("big");
    let odd = document.getElementById("odd");
    let even = document.getElementById("even");
    let msg = document.getElementById("msg");   
    let userstatus= document.getElementById("userstatus");      
    let userbetFive = document.getElementById("five");
    let userbetten = document.getElementById("ten");
    let guide= document.getElementById("guide");
    
    let game = new DiceeGame();
    let user = new User();
    let ingame = document.getElementById("ingame");
    ingame.style.display="none";
    
    let logoutbtn = document.getElementById("logout");

    
    
    // to hide game elements before submitting 


    document.getElementById("guidetext").style.display="none";


    // log out button event listener.
    logoutbtn.addEventListener("click", function(){
        
        fetch("./server/logout.php",{
            method : 'POST',
                credentials: 'include',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                
        })
        let formdiv = document.getElementById("formdiv");
        
        ingame.style.display = "none"; // hides game table
        formdiv.style.display = "block"; // shows login form


    
    })

    //when user plays game, the money data is going to change every game.
    function success(userinfo){
       
            user.username = userinfo.name;
            user.usermoney = parseFloat(userinfo.money);
            userstatus.innerHTML = "User Name : ["+user.username + "], Money : [$"+ user.usermoney + "]";
            let logindiv = document.getElementById("formdiv");
            logindiv.style.display = "none";
            ingame.style.display="block";

            //data validation.
            if(user.usermoney < 0){
                rollbutton.disabled = true;
                userbetten.style.display = "none";
                userbetFive.style.display = "none";
                errmsg.innerHTML ="You do not have much money to bet. Please click the Restart button";
            }else if(user.usermoney > 4 && user.usermoney < 10){
                rollbutton.disabled = true;
                userbetten.style.display = "none";
                errmsg.innerHTML ="You do not have much money to bet. Please click the Restart button";
                
            }
        
    }

    //login form event listener.
    // pass user information to login.php to login
    document.forms.userform_login.addEventListener("submit",function(e){
        e.preventDefault();
        let loginName = document.getElementById("login_username").value;
        let loginPass = document.getElementById("login_userpassword").value;
        let params = "login_username=" + loginName + "&login_userpassword="+loginPass;
        console.log(params);

        fetch("./server/login.php",{
            method : 'POST',
                credentials: 'include',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: params
        })
        .then(response => response.json())
        .then(success)
        .catch((error) => {
            alert("Wrong information");
        })
    


    })

    //sign up event listener. 
    // pass user's information to signup.php to store into database
    document.forms.userform.addEventListener("submit", function(e){
        e.preventDefault();
 


        let username = document.getElementById("username").value;
        let userpassword = document.getElementById("userpassword").value;
        let userFname = document.getElementById("Fname").value;
        let userLname = document.getElementById("Lname").value;
        let money = document.getElementById("money").value;
        let params = "username=" + username + "&userpassword="+userpassword+ "&userFname=" + userFname + "&userLname=" + userLname + "&money="+money;
        console.log(username);
        console.log(userpassword);

        console.log(params);
        fetch("./server/signup.php",{
            method : 'POST',
                credentials: 'include',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: params
        })
        .then(response => response.text())
        .then(function success(){
            window.location.href = "./index.html";
        })
        .catch((error) => {
            alert("Wrong information");
        })
    
      
    })

    //   Create click event listener to see the guide 
    guide.addEventListener("click", function(){
        if(document.getElementById("guidetext").style.display === "block"){
          document.getElementById("guidetext").style.display = "none";
        }
        else 
        document.getElementById("guidetext").style.display = "block";
    })
    // Create click event listener to get user's decision 
    small.addEventListener("click", function(){
            small.style.backgroundColor = "red";
            big.style.backgroundColor = "white";
            odd.style.backgroundColor = "white";
            even.style.backgroundColor = "white";
            user.userdecision = "small";
            checkerror = 1;

        
    })
    // Create click event listener to get user's decision 
    big.addEventListener("click", function(){

            big.style.backgroundColor = "green";
            small.style.backgroundColor = "white";
            odd.style.backgroundColor = "white";
            even.style.backgroundColor = "white";
            user.userdecision = "big";
            checkerror = 1;
        
    })
    // Create click event listener to get user's decision 
    odd.addEventListener("click",function(){
        odd.style.backgroundColor = "blue";
        small.style.backgroundColor = "white";
        big.style.backgroundColor = "white";
        even.style.backgroundColor = "white";
        user.userdecision="";
        user.userevennumber = false;
        checkerror = 1;
    })
    // Create click event listener to get user's decision 
    even.addEventListener("click",function(){
        even.style.backgroundColor = "blue";
        small.style.backgroundColor = "white";
        big.style.backgroundColor = "white";
        odd.style.backgroundColor = "white";
        user.userdecision="";
        user.userevennumber = true;
        checkerror = 1;
    })

    // Create click event listener to get user's betting
    userbetFive.addEventListener("click", function(){
        five.style.backgroundColor = "yellow";
        ten.style.backgroundColor = "white";
        userbet  = 5;
        checkerrorforbet =1;
    })

    // Create click event listener to get user's betting
    userbetten.addEventListener("click", function(){
        ten.style.backgroundColor = "yellow";
        five.style.backgroundColor = "white";
        userbet  = 10;
        checkerrorforbet =1;
    })


    /*
    * Click event listener to re-start game
    */
    document.getElementById("restart").addEventListener("click",function(){
        location.reload();
    })

    /*
    *
    * Create click event listener to decide to win 
    */
    rollbutton.addEventListener("click", function(){
        //data validation with the error message 
        try{
            if(checkerror === 0) throw "Please select at least one";
            else if(checkerrorforbet === 0) throw "Please bet at least 5";
            else if(user.usermoney < 5) {
                rollbutton.disabled = true;
                throw "You do not have much money to bet. Please click the Restart button";
                
            }
            else
            errmsg.innerHTML ="";
        }catch(err){
            errmsg.innerHTML = err;
        }

        /*
        *To change to a number-matched dice image 
        */
        if(game.firstDice === 1){
            firstDiceImage.src = "image/icons8-dice-one-96.png";
        }
        else if(game.firstDice === 2){
            firstDiceImage.src = "image/icons8-dice-two-96.png";
        }
        else if(game.firstDice === 3){
            firstDiceImage.src = "image/icons8-dice-three-96.png";
        }
        else if(game.firstDice === 4){
            firstDiceImage.src = "image/icons8-dice-four-96.png";
        }
        else if(game.firstDice === 5){
            firstDiceImage.src = "image/icons8-dice-five-96.png";
        }
        else {
            firstDiceImage.src = "image/icons8-dice-six-96.png";
        }

        if(game.secondDice === 1){
            secondDiceImage.src = "image/icons8-dice-one-96.png";
        }
        else if(game.secondDice === 2){
            secondDiceImage.src = "image/icons8-dice-two-96.png";
        }
        else if(game.secondDice === 3){
            secondDiceImage.src = "image/icons8-dice-three-96.png";
        }
        else if(game.secondDice === 4){
            secondDiceImage.src = "image/icons8-dice-four-96.png";
        }
        else if(game.secondDice === 5){
            secondDiceImage.src = "image/icons8-dice-five-96.png";
        }
        else {
            secondDiceImage.src = "image/icons8-dice-six-96.png";
        }

        if(game.thirdDice === 1){
            thirdDiceImage.src = "image/icons8-dice-one-96.png";
        }
        else if(game.thirdDice === 2){
            thirdDiceImage.src = "image/icons8-dice-two-96.png";
        }
        else if(game.thirdDice === 3){
            thirdDiceImage.src = "image/icons8-dice-three-96.png";
        }
        else if(game.thirdDice === 4){
            thirdDiceImage.src = "image/icons8-dice-four-96.png";
        }
        else if(game.thirdDice === 5){
            thirdDiceImage.src = "image/icons8-dice-five-96.png";
        }
        else {
            thirdDiceImage.src = "image/icons8-dice-six-96.png";
        }

        /*
        * To decide to win 
        */       
       function success(money){
        user.usermoney = parseFloat(money);
        console.log(money);
        userstatus.innerHTML = "User Name : ["+user.username + "], Money : [$"+ user.usermoney + "]";
        userstatus.style.color = "blue";    
       }
        if(game.diceSum <= 11 && user.userdecision === "small" && user.usermoney > 0){ //the case of small
            msg.innerHTML = "Correct [Small]";
            msg.style.color = "blue";
            user.usermoney = user.usermoney + (userbet * 2);
            
            //pass user's money to update in database
            let params = "gameMoney=" + user.usermoney + "&username=" + user.username;
            fetch("./server/updateMoney.php",{
                method : 'POST',
                    credentials: 'include',
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: params
            })
            .then(response => response.text())
            .then(success)
            

        }else if (game.diceSum >11 && user.userdecision === "big" && user.usermoney > 0){ //the case of big
            msg.innerHTML = "Correct [Big]";
            msg.style.color = "blue";
            user.usermoney = user.usermoney + (userbet * 2);
            userstatus.innerHTML = "User Name : ["+user.username + "], Money : [$"+ user.usermoney + "]";
            userstatus.style.color = "blue";
            //pass user's money to update in database
            let params = "gameMoney=" + user.usermoney + "&username=" + user.username;
            fetch("./server/updateMoney.php",{
                method : 'POST',
                    credentials: 'include',
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: params
            })
            .then(response => response.text())
            .then(success)
        }
        else if(game.diceSum % 2 !== 0 && user.userevennumber === false && user.usermoney >0){  //the case of ODD number
            msg.innerHTML = "Correct [ODD]";
            msg.style.color = "blue";
            user.usermoney = user.usermoney + (userbet * 2);
            userstatus.innerHTML = "User Name : ["+user.username + "], Money : [$"+ user.usermoney + "]";
            userstatus.style.color = "blue";
            //pass user's money to update in database
            let params = "gameMoney=" + user.usermoney + "&username=" + user.username;
            fetch("./server/updateMoney.php",{
                method : 'POST',
                    credentials: 'include',
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: params
            })
            .then(response => response.text())
            .then(success)
        }
        else if(game.diceSum % 2 === 0 && user.userevennumber === true && user.usermoney >0){ //the case of even number
            msg.innerHTML = "Correct [EVEN]";
            msg.style.color = "blue";
            user.usermoney = user.usermoney + (userbet * 2);
            userstatus.innerHTML = "User Name : ["+user.username + "], Money : [$"+ user.usermoney + "]";
            userstatus.style.color = "blue";
            //pass user's money to update in database
            let params = "gameMoney=" + user.usermoney + "&username=" + user.username;
            fetch("./server/updateMoney.php",{
                method : 'POST',
                    credentials: 'include',
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: params
            })
            .then(response => response.text())
            .then(success)
        }
        else{ // the case of losing 
            user.usermoney = user.usermoney  - userbet;
            userstatus.innerHTML = "User Name : ["+user.username + "], Money : [$"+ user.usermoney + "]";
            userstatus.style.color = "blue"; 
            msg.innerHTML = "Uncorrect";
            msg.style.color = "red";
            let params = "gameMoney=" + user.usermoney + "&username=" + user.username;
            //pass user's money to update in database
            fetch("./server/updateMoney.php",{
                method : 'POST',
                    credentials: 'include',
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: params
            })
            .then(response => response.text())
            .then(success)
        }

        if(user.usermoney < 0){
            rollbutton.disabled = true;
            userbetten.style.display = "none";
            userbetFive.style.display = "none";
        }else if(user.usermoney > 4 && user.usermoney < 10){
            rollbutton.disabled = true;
            userbetten.style.display = "none";
            
        }
        game = new DiceeGame();
    })
    
    
});