import { chilis } from './classes.js';

export function displayImage(){
    var num = Math.floor(Math.random() * chilis.length);
    let chili_picture = document.getElementById("chili-picture");
    let pic_num = Math.floor(Math.random() * 400).toString();
    pic_num = "0".repeat(6-pic_num.length) + pic_num;
    chili_picture.src = "https://www.tisza.dev/ChiliClassifier/images/chili_pics/" +chilis[num]+"/"+pic_num+".jpg";
    document.getElementById("iswrong").set;
    document.getElementById("iswrong").checked=false;
}

