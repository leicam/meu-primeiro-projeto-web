var body = document.querySelector("body");
var singInButton = document.querySelector("#singIn");
var singUpButton = document.querySelector("#singUp");

body.addEventListener("load", function(){
    body.className = "on-load";
});

singInButton.addEventListener("click", function() 
{
    body.className = "sing-in";
});

singUpButton.addEventListener("click", function()
{
    body.className = "sing-up";
});
