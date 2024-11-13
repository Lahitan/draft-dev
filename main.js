//Access the testimonials

let testSlide = document.querySelectorAll('.test-item');
let dots = document.querySelectorAll('.dot');

var counter = 0;

function switchTest(curentTest){
    curentTest.classList.add('active');
    var testId = curentTest.getAttribute('attr');
        if(testId > counter){
            testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
            counter = testId;
            testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
        } 
        else if(testId == counter){return;}
        else{
            testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
            counter = testId;
            testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
        }
        indicators()
        
}


function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');
    }
    dots[counter].className += 'active';
}

//code for auto sliding

function slideNext(){
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= testSlide.length -1){
        counter = 0
    }
    else{
        counter++;
    }
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

function autoSliding(){
    deletInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

//stop auto sliding when mouse is over the indicators

const container = document.querySelector('.indicators');
container.addEventListener('mouseover', pause);
function pause(){
    clearInterval(deletInterval);
}

//Resume sliding when mouse is out of the inicators
container.addEventListener('mouseout', autoSliding);


//---------FAQ functionality

const accordionItems =document.querySelectorAll('.accordion button');

function toggleAccordion(){
    const itemToggle = this.getAttribute('aria-expanded');

    for (i=0; i < accordionItems.length; i++ ){
        accordionItems[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true')
    }
}

accordionItems.forEach((item) => item.addEventListener('click', toggleAccordion))