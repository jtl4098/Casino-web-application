 /**
 * 
 * Program : dice.js
 * @author : Taekyung Kil
 * Date : 10/Oct/2019
 I, Taekyung Kil, student number 000799798 , 
 certify that all code submitted is my own work; that I have not copied it from any other source. 
  I also certify that I have not allowed my work to be copied by others.
 */

$(document).ready(function(){
    $("div.formdiv_signup").hide();
    

    $("#btn_regist").click(function(){
        $("div.formdiv").hide();
        $("div.formdiv_signup").show();
    })

    $("#btn_loginPage").click(function(){
        $("div.formdiv_signup").hide();
        $("div.formdiv").show();
    })


})