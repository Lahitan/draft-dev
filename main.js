//-------------Hamburger Functionality

// Select elements
const navContainer = document.querySelector('.nav-list_container');
const menuIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-x');

// Function to show the menu
function openMenu() {
    navContainer.style.display = 'block';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
}

// Function to hide the menu
function closeMenu() {
    navContainer.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

// Event listeners for opening and closing menu
menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);


// ----------------What we do Functionality

let testSlide = document.querySelectorAll('.test-item');
let dots = document.querySelectorAll('.dot');

let counter = 0;
let autoSlideInterval;

function switchTest(currentTest) {
    currentTest.classList.add('active');
    let testId = parseInt(currentTest.getAttribute('attr'));

    if (testId > counter) {
        testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    } else if (testId < counter) {
        testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    
    updateIndicators();
}

function updateIndicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

function showSlide(index) {
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = index;
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    updateIndicators();
}

function slideNext() {
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';

    if (counter >= testSlide.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    updateIndicators();
}

function startAutoSliding() {
    autoSlideInterval = setInterval(slideNext, 2000);
}

function stopAutoSliding() {
    clearInterval(autoSlideInterval);
}

// Start auto sliding
startAutoSliding();

// Stop auto sliding when the mouse is over the indicators
const indicatorsContainer = document.querySelector('.indicators');
indicatorsContainer.addEventListener('mouseover', stopAutoSliding);
indicatorsContainer.addEventListener('mouseout', startAutoSliding);



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