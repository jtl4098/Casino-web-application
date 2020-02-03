<?php
 /**
 * 
 * Program : Userinfo.php
 * @author : Taekyung Kil
 * Date : 06/Dec/2019
 *I, Taekyung Kil, student number 000799798 , 
 *certify that all code submitted is my own work; that I have not copied it from any other source. 
 * I also certify that I have not allowed my work to be copied by others.
 */

class Userinfo implements JsonSerializable
{
    //Set variables
    private $name;
  
    private $money;
    

    //Set constructor
    public function __construct($name, $money){
        $this->name = $name;
        $this->money = $money;

    }
    //Set getter
    public function get_name(){
        return $name;
    }
    //Set getter
 
    public function get_money(){
        return $money;
    }
    //Set function to change variables to htmlstyle


    public function jsonSerialize()
    {
        return  get_object_vars($this);
    }

}