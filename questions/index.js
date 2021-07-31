// getting the buttons
//const btns = document.querySelectorAll("button");

//btns.forEach(function(btn){
    //btn.addEventListener('click', function(e){
        //const question = e.currentTarget.parentElement.parentElement;

        //question.classList.toggle("show");
    //})
//});

//geting parrent divs
const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    const btn = question.querySelector("button");
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if (item !== question){
                item.classList.remove("show");
            }
        })
        question.classList.toggle("show");
    })
});