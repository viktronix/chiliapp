import { displayImage } from './random_image.js';
import { write_guess } from './store.js';

 export function guess()  {
    var chili_input = document.getElementById("ChiliInput");
    var solution = document.getElementById("solution");
    var chili_picture = document.getElementById("chili-picture");
    total_guess++;
    if (chili_input.value.split(" ").join("_")==chili_picture.src.split("/")[6]) {
        good_guess++;
        solution.innerHTML = "Correct";
      } else {
        solution.innerHTML = "Nope it was:" + chili_picture.src.split("/")[6].split("_").join(" ");
      }
    solution.innerHTML += "<br> Result: "+good_guess+"/"+total_guess;
    write_guess();
    displayImage();

  }