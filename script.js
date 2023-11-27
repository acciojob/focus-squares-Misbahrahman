//your JS code here. If required.

let ele1 = document.getElementById("square1");
let ele2 = document.getElementById("square2");
let ele3 = document.getElementById("square3");

ele1.addEventListener("mouseover", in1);
ele2.addEventListener("mouseover", in2);
ele3.addEventListener("mouseover", in3);

ele1.addEventListener("mouseout", out1);
ele2.addEventListener("mouseout", out2);
ele3.addEventListener("mouseout", out3);






function in1() {
    ele2.style.backgroundColor = "#6F4E37";
    ele3.style.backgroundColor = "#6F4E37";
}

function in2() {
    ele3.style.backgroundColor = "#6F4E37";
    ele1.style.backgroundColor = "#6F4E37";
}

function in3() {
    ele2.style.backgroundColor = "#6F4E37";
    ele1.style.backgroundColor = "#6F4E37";
}

function out1() {
    ele2.style.backgroundColor = "#E6E6FA";
    ele3.style.backgroundColor = "#E6E6FA";
}

function out2() {
    ele1.style.backgroundColor = "#E6E6FA";
    ele3.style.backgroundColor = "#E6E6FA";
}

function out3() {
    ele2.style.backgroundColor = "#E6E6FA";
    ele1.style.backgroundColor = "#E6E6FA";
}


