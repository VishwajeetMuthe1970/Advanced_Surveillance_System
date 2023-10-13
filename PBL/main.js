// Table Hovering

const enlargeImages = document.querySelectorAll('.tabimg');

function handleImageHover(event) {
   event.target.style.transform = 'scale(1.2)'; // You can adjust the scale factor as per your preference
}


function handleImageMouseOut(event) {
    event.target.style.transform = 'scale(1)';
}

enlargeImages.forEach(image => {
    
    image.addEventListener('mouseover', handleImageHover);
    image.addEventListener('mouseout', handleImageMouseOut);
});

