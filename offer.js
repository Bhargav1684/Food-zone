// add to cart code 
// Initialize or load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    // Add item to cart
    cart.push({ name, price });

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to cart!`);
}

// Toggle burger menu visibility on mobile screens
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Display cart items on the cart page
function displayCart() {
    const cartContainer = document.querySelector('.cart-section');
    cartContainer.innerHTML = '';
    let total = 0;

    // If cart is empty, show a message
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    // Display each cart item
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });

    // Display total
    const totalElement = document.createElement('div');
    totalElement.innerHTML = `<strong>Total: ₹${total.toFixed(2)}</strong>`;
    cartContainer.appendChild(totalElement);
}

// Remove item from cart
function removeFromCart(index) {
    // Remove item from the cart array
    cart.splice(index, 1);

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart display
    displayCart();
}

// Call displayCart() to load cart items when the page loads
if (document.body.classList.contains('cart-page')) {
    displayCart();
}
