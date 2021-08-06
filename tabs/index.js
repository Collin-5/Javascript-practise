// select elements
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

window.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if (id){
        btns.forEach(btn => {
           btn.classList.remove("active");
           e.target.classList.add("active");
        });
        contents.forEach(function(content){
            content.classList.remove("active");
        })
        const element = document.getElementById(id);
            element.classList.add("active");
           
    }
})

