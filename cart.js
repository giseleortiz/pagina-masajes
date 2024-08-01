const cart = [];
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartElement = document.getElementById('cart');

document.querySelectorAll('.product button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const productPrice = parseFloat(button.previousElementSibling.textContent.replace('Precio: $', ''));
        
        cart.push({ name: productName, price: productPrice });
        updateCart();
        cartElement.style.display = 'block';
    });
});

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });
    totalPriceElement.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Gracias por tu compra!');
    cart.length = 0;
    updateCart();
    cartElement.style.display = 'none';
});