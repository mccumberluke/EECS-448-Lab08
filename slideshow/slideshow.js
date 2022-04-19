let slide = document.getElementsByClassName("slides");
let current = 0;

function nextslide(){
    if(current < 0){
        current = slide.length-1;
    }
    if(current >= slide.length){
        current = 0;
    }
}

function Next(){
    current++;
    slideshow();
}

function Previous(){
    current--;
    slideshow();
}

function slideshow(){
    nextslide();
    for(let i = 0; i<slide.length; i++){
        slide[i].style.display="";
        if(i != current){
            slide[i].style.display="none";
        }
    }
}