var _ = require('lodash');

var array = [1,2,3,4,5,6];

console.log("display Please", _.without(array, 5));

var head = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");


function genBackground(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    head.textContent = "Background Color Gradient from: " + color1.value + " - " + color2.value + " ;";
}


color1.addEventListener("input", genBackground);
color2.addEventListener("input", genBackground);