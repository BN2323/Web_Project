// Toggle mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Populate product showcase dynamically
const products = [
    { name: 'Shoe 1', image: 'images/shoe1.png' },
    { name: 'Shoe 2', image: 'images/shoe2.png' },
];

const productContainer = document.querySelector('.product_showoff');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
    `;
    productContainer.appendChild(productDiv);
});
