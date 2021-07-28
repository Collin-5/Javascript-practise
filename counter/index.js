//initialize count
let count = 0;

//get btn and value
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const obje = e.currentTarget.classList;
        if (obje.contains("increase")){
            count++;
        }
        
        else if (obje.contains("decrease")){
            count--;
        }
        else{
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "black";
        }
        
        value.textContent = count;
    });
});