//    Appearing text    

var textElements = document.querySelectorAll('.centerbelowtext');
        textElements.forEach(element => {
            const text = element.innerText;
            element.innerHTML = '';
            for (let i = 0; i < text.length; i++) 
            {
                const letter = text[i];
                const span = document.createElement('span');
                span.textContent = letter;
                span.className = 'hidden';
                element.appendChild(span);
                span.style.animation = `appear 0.1s forwards ${i * 0.1}s`;
            }
        });