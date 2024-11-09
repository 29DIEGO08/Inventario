function sortProducts() {
    const productsContainer = document.querySelector('.products');
    const products = Array.from(productsContainer.children);
    const sortBy = document.querySelector('.sort select').value;

    if (sortBy === 'price-asc') {
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', '').replace('.', '').replace(',', '.'));
            const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', '').replace('.', '').replace(',', '.'));
            return priceA - priceB;
        });
    }

    products.forEach(product => productsContainer.appendChild(product));
}