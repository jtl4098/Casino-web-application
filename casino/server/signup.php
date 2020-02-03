<?php
include "connect.php";
include "User.php";

 /**
 * 
 * Program : signup.php
 * @author : Taekyung Kil
 * Date : 06/Dec/2019
 * I, Taekyung Kil, student number 000799798 , 
 * certify that all code submitted is my own work; that I have not copied it from any other source. 
 * I also certify that I have not allowed my work to be copied by others.
 */


session_start();
//set user information 
$pwd = password_hash("userpassword", PASSWORD_BCRYPT);
$userid = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, "userpassword");
$firstN = filter_input(INPUT_POST, "userFname", FILTER_SANITIZE_STRING);
$LastN = filter_input(INPUT_POST, "userLname", FILTER_SANITIZE_STRING);
$money = filter_input(INPUT_POST, "money", FILTER_VALIDATE_FLOAT);

//select userid to verify if the user already exists in database 
$command = "SELECT userid FROM casino WHERE (userid = ?)";
$stmt = $dbh->prepare($command);
$params = [$userid];
$success = $stmt->execute($params);
echo $password;
$user = [];
while($row = $stmt->fetch()){
    if($row["userid"] == $userid){

        $user = [
            "id" => $row["userid"],       
        ];
        
    }
    else{

         $user = [
            "id" => "null",
            "password" => "null"
        ];
        
    }
    
}  

if(in_array($userid,$user)){

    
  
    
    session_unset();
     session_destroy();
    
}else{
    //insert user's data into database
    $command = "INSERT INTO casino (userid, userpassword, firstName, lastName, money) VALUES (?,?,?,?,?)";
    $stmt = $dbh->prepare($command);
    $params = [$userid, $password,$firstN, $LastN , $money];
    $success = $stmt->execute($params);


    $_SESSION["signup"] = "true";

    header('Location: ../index.php');

}


?>

