function check(){
    var age;
    age=parseInt(prompt("What age are you?"));

    if(age>=18){
        document.getElementById("placeholder").innerHTML="Welcome";
    }
    else if(age<18){
        document.getElementById("placeholder").innerHTML="Go away! "+age+" is too young";
    }
    else{
        documentGetElementById("placeholder").innerHTML="invalid input, please try again";
    }
}