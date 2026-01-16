import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let excusas = document.getElementById("excusas")
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  //console.log("Hello Rigo from the console!");

  let excusa = who[Math.floor(Math.random()* who.length)]
  excusa += " " + action[Math.floor(Math.random()* action.length)] 
  excusa += " " + what[Math.floor(Math.random()* what.length)]
  excusa += " " + when[Math.floor(Math.random()* when.length)]

  excusas.innerHTML = excusa
  
};
