var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomsrc="images/"+randomImage;
var doc=document.querySelectorAll("img")[0];
doc.setAttribute("src",randomsrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber2+".png";
var randomsrc="images/"+randomImage;
var doc=document.querySelectorAll(".img2")[0];
doc.setAttribute("src",randomsrc);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player1 Wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="🚩 Player2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
