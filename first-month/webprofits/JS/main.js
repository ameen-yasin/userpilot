const spanElement = document.querySelector('.company-name');
// 
// console.log(spanElement.innerHTML= "hello");


var opacity = 0;
var intervalID = 0;
window.onload = fadeout;
// setTimeout(1000);
// setTimeout(function(){ alert("Hello"); }, 500);
setTimeout(fadeIn, 500);

function fadeout() {
    setInterval(hide, 200);
}
function fadeIn() {
    setInterval(show, 200);
}


function hide() {
    //   var body=document.getElementById("body"); 
    opacity = Number(window.getComputedStyle(spanElement).getPropertyValue("opacity"))
    if (opacity > 0) {
        opacity = opacity - 0.5;
        spanElement.style.opacity = opacity
    }
    else {
        clearInterval(intervalID);
    }
}

function show() {
    //   var body=document.getElementById("body"); 
    opacity = Number(window.getComputedStyle(spanElement).getPropertyValue("opacity"))
    if (opacity <= 0) {
        opacity = opacity + 0.5;
        spanElement.style.opacity = opacity
    }
    else {
        clearInterval(intervalID);
    }
}




const toggleItem = document.querySelector('.toggle');
const showCaseItem = document.querySelector('.showcase');

toggleItem.addEventListener('click', showMenu);


function showMenu() {
    toggleItem.classList.toggle('active');
    showCaseItem.classList.toggle('active');
}
