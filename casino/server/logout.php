<?php
include "connect.php";

 /**
 * 
 * Program : logout.php
 * @author : Taekyung Kil
 * Date : 06/Dec/2019
 * I, Taekyung Kil, student number 000799798 , 
 * certify that all code submitted is my own work; that I have not copied it from any other source. 
 * I also certify that I have not allowed my work to be copied by others.
 */

 //log out php 
// if user click the log out button, session is destroyed 
session_start();

    session_unset();
    session_destroy();
    header('Location: ../index.html');

?>
