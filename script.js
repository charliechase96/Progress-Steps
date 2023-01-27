const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

//when next is clicked, increment by 1 to next number//
next.addEventListener('click', () => {
    currentActive++;

    //if active is greater than length, reduce to max length//
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

//when prev is clicked, decrement by 1 to previous number //
prev.addEventListener('click', () => {
    currentActive--;

    //if active is less than 1, set to 1 (cannot go back further)//
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});

//for each circle, check index to see if less than current active//
const update = () => {
    circles.forEach((circle, i) => {
        if(i < currentActive) {               //if so, add active class
            circle.classList.add("active");
        } 
        else {
            circle.classList.remove("active");  //if not, remove active class
        }
    });
    
    const actives = document.querySelectorAll(".active");

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    if(currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
};