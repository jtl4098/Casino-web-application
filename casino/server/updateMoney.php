<?php

 /**
 * 
 * Program : updateMoney.php
 * @author : Taekyung Kil
 * Date : 06/Dec/2019
 * I, Taekyung Kil, student number 000799798 , 
 * certify that all code submitted is my own work; that I have not copied it from any other source. 
 * I also certify that I have not allowed my work to be copied by others.
 */

include "connect.php";
session_start();



$gameMoney = filter_input(INPUT_POST, "gameMoney", FILTER_VALIDATE_FLOAT);
$userid = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);


//update users money
$command = "UPDATE casino SET money = ? WHERE userid =?";
$stmt = $dbh->prepare($command);
$params = [$gameMoney, $userid];
$success = $stmt->execute($params);

//select users money and userid to pass user's money to js.
$command = "SELECT userid, money FROM casino WHERE (userid = ?)";
$stmt = $dbh->prepare($command);
$params = [$userid];
$success = $stmt->execute($params);

$money ="";

while($row = $stmt->fetch()){
    if($row["userid"] == $userid){

        $money = $row["money"];
        
        
  
        echo $money;

    }
    else{

        $money="";
   
        echo $money;
    }
    
}  






?>

