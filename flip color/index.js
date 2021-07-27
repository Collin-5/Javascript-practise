const colors = ["blue", "red", "green", "purple", "orange"];

const btn = document.getElementById("btn");
const text = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = randomN();
    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber];
});

function randomN(){
    return Math.floor(Math.random() * colors.length);
}