<?php
 /**
 * 
 * Program : login.php
 * @author : Taekyung Kil
 * Date : 06/Dec/2019
 * I, Taekyung Kil, student number 000799798 , 
 * certify that all code submitted is my own work; that I have not copied it from any other source. 
 * I also certify that I have not allowed my work to be copied by others.
 */
include "connect.php";
include "Userinfo.php";
session_start();

$pwd = password_hash("mypassword", PASSWORD_BCRYPT);
$userid = filter_input(INPUT_POST, "login_username", FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, "login_userpassword");


//user exists statement using mysql
$command = "SELECT userid, userpassword, money FROM casino WHERE (userid = ?) AND (userpassword=?)";
$stmt = $dbh->prepare($command);
$params = [$userid, $password];
$success = $stmt->execute($params);

$user = [];
$money ="";
$userinfo = [];
while($row = $stmt->fetch()){
    if($row["userid"] == $userid){

    
        $user=new Userinfo ($row["userid"], $row["money"]);
        array_push($userinfo, $user);
        echo json_encode($user);
        $_SESSION["userid"] = $userid;
    

    }
    else{

    
        $user="";
        echo json_encode($user);
    }
    
}  






?>

