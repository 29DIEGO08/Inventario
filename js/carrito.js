function updateTotalItems() {
    const items = document.querySelectorAll('.suggested-items .item');
    const totalItems = items.length;
    document.getElementById('total-items').innerText = `Total (${totalItems} artículos)`;

    let totalPrice = 0;
    items.forEach(item => {
        const priceText = item.querySelector('.price').innerText;
        const price = parseFloat(priceText.replace('$', '').replace('.', '').replace(',', '.'));
        totalPrice += price;
    });
    document.getElementById('total-price').innerText = `$${totalPrice.toLocaleString('es-ES')}`;
}
window.onload = updateTotalItems;