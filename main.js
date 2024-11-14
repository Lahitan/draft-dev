//-------------Hamburger Functionality

const menuIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-x');
const navListContainer = document.querySelector('.nav_list');

// Function to open the mobile menu
function openMenu() {
    navListContainer.style.display = 'flex';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
}

// Function to close the mobile menu
function closeMenu() {
    navListContainer.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

// Open menu on clicking hamburger icon
menuIcon.addEventListener('click', openMenu);

// Close menu on clicking close icon
closeIcon.addEventListener('click', closeMenu);

// Adjust menu visibility on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 760) {
        // If the screen width is 760px or above, reset the display styles
        navListContainer.style.display = 'flex';  // Show menu for tablet and desktop
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'none';
    } else {
        // If the screen width is below 760px, hide menu and show hamburger icon
        navListContainer.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});



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