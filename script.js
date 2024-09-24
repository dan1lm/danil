function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}




const symbolsContainer = document.querySelector('.symbols');
const symbols = ['@', '#', '$', '%', '&', '*', '+'];

function createSymbol() {
    const symbolEl = document.createElement('div');
    symbolEl.classList.add('symbol');
    symbolEl.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbolEl.style.left = Math.random() * 100 + '%';
    symbolEl.style.top = Math.random() * 100 + '%';
    symbolsContainer.appendChild(symbolEl);

    setTimeout(() => {
        symbolsContainer.removeChild(symbolEl);
    }, 1000); // Symbol disappears after animation
}

setInterval(createSymbol, 200); // Frequency of new symbols
