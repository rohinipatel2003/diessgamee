
var a=Math.floor(1+6*Math.random());
var randimage1="images/dice"+a+".png";
document.querySelectorAll("img")[0].setAttribute("src",randimage1);




var b=Math.floor(1+6*Math.random())
var randimage2="images/dice"+b+".png";
document.querySelectorAll("img")[1].setAttribute("src",randimage2);

if(a>b)
{document.querySelector("h1").innerHTML="1st won the Match ";}
else
{  if(a===b)
    {document.querySelector("h1").innerHTML="Draw!";}
    else
    {document.querySelector("h1").innerHTML="2nd won the Match ";}}