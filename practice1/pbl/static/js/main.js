// Add this in your main.js file or in a script tag in your HTML

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const navItems = document.querySelector('.nav-items');

  mobileMenuIcon.addEventListener('click', function () {
      navItems.classList.toggle('show');
  });
});




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
            span.style.animation = `appear 0.1s forwards ${i * 0.18}s`;
        }
    });
}

// Call the function initially
animateTextAppearance();

// Repeat the animation every 1 second (1000 milliseconds)
setInterval(animateTextAppearance, 100);


document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navItems = document.querySelector('.nav-items');

    mobileMenuIcon.addEventListener('click', function () {
        navItems.classList.toggle('show');
    });
});
