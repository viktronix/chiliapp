// Import stylesheets
import './style.css';
import { autocomplete } from './autocomplete';
import { chilis } from './classes';
import { displayImage } from './random_image';
import { guess } from './guess';

// Write Javascript code!



autocomplete(document.getElementById("ChiliInput"), chilis.map(x => x.split("_").join(" ")));

const appDiv = document.getElementById('app');
let chili_lista = document.getElementById("chili-names");
chili_lista.innerHTML += chilis.map(x => "<br>"+x.split("_").join(" "));
displayImage();
document.getElementById("submit").onclick = guess ;

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}