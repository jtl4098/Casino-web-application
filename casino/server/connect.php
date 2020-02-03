<?php
/**
 * Include this to connect. Change the dbname to match your database,
 * and make sure your login information is correct after you upload 
 * to csunix or your app will stop working.
 * 
 * 
 */
try {
    $dbh = new PDO(
        "mysql:host=csunix.mohawkcollege.ca; dbname=000799798",
        "000799798",
        "19940425"
    );
} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}
