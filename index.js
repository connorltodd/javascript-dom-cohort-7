// Use W3 Schools to show the value of the resource from the DOM
 
// Get a group of elements via the class name
const navbarLinks = document.getElementsByClassName('navbar-links');
console.log(navbarLinks);

function navbarLinksColourHandler () {
    for(let i = 0; i < navbarLinks.length; i++) {
        console.log(navbarLinks[i]);
        navbarLinks[i].style.color = 'red';
    }
}

// important events to learn onclick, onsubmit, onchange

// Get a single element by id
document.getElementById('website-title').style.fontSize = '34px';

// Get the text from an input and display it to the screen
const movieSearchInput = document.getElementById('movieSearchInput');

// callback function - a callback function is a function that runs only 
// after the previous action is complete
movieSearchInput.addEventListener('change', function(event) {
    let currentSearchInputValue = event.target.value;
    document.getElementById('userSearchResponse').innerText = currentSearchInputValue;
})


// Show or hide a div with a button click
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', function (event) {
    const menu = document.getElementById('menu-section');

    if(menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Hover over text in hidden div to toggle the text colour 

// Button to change the width of the div and height 

// Change the font colour after hover

// Cycle through a list of images stored in an array via loop and event listener
// the user will click on the image and select a different image each time

// store the list of images in the array
const images = [
    'https://images.unsplash.com/photo-1655667995118-56d57c6f628e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1914&q=80',
    'https://images.unsplash.com/photo-1655434067144-b962fd5fc053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    'https://images.unsplash.com/photo-1655630584665-0286b332db48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80'
]

let currentImageDisplayedIndex = 0;

function galleryImageHandler () {
    // when the user clicks the button go inside the array - onclick function
    // the user will cycle through the images one by one
    // we should know what current image is being displayed to then show the next one
    let imageElement = document.getElementsByClassName('gallery-image')[0];
    console.log(imageElement)
    if(currentImageDisplayedIndex === 2) {
        // go back to the start of the array
        currentImageDisplayedIndex = 0;
        imageElement.src = images[currentImageDisplayedIndex]
    } else {
        // otherwise show the next image
        currentImageDisplayedIndex += 1;
        imageElement.src = images[currentImageDisplayedIndex]
    }
}


