var num1= Math.floor(Math.random()*6)+1;
var dice1= "dice"+num1+".png";
var image1= "images/"+dice1;
document.querySelectorAll("img")[0].setAttribute("src",image1);
var num2= Math.round(Math.random()*6)+1;
var dice2= "dice"+num2+".png";
var image2= "images/"+dice2;
document.querySelectorAll("img")[1].setAttribute("src",image2);

if (num1>num2) {
    document.querySelector("h1").innerHTML="Player 1 wins";
} else if(num2>num1) {
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}