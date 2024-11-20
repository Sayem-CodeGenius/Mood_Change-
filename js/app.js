let body = document.querySelector("body")
let moodBtn = document.querySelector("nav .moodBtn");

function darkMood (){
    body.classList.toggle('moodShift')
}

moodBtn.addEventListener('click' , darkMood)


