// Appearing Text
function animateTextAppearance() {
    var textElements = document.querySelectorAll('.centerbelowtext');
    textElements.forEach(element => {
        const text = element.innerText;
        element.innerHTML = '';
        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            const span = document.createElement('span');
            span.textContent = letter;
            span.className = 'hidden';
            element.appendChild(span);
            span.style.animation = `appear 0.1s forwards ${i * 0.12}s`;
        }
    });
}

// Call the function initially
animateTextAppearance();

// Repeat the animation every 1 second (1000 milliseconds)
setInterval(animateTextAppearance, 16550);
