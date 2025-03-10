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


// food section 4
// Toggle Read More functionality
function toggleDescription(element) {
    const extraText = element.nextElementSibling;
    const isVisible = extraText.style.display === 'block';

    if (isVisible) {
        extraText.style.display = 'none';
        element.textContent = 'Read more';
    } else {
        extraText.style.display = 'block';
        element.textContent = 'Read less';
    }
}


// offer animation 
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Select the promo container
const promoAd = document.getElementById('promoAd');

// Function to trigger animation on scroll
function handleScroll() {
    if (isInViewport(promoAd)) {
        promoAd.style.opacity = 1; // Fade in the ad
        promoAd.style.transform = "translateY(0)"; // Slide it into place
    }
}

// Listen to the scroll event
window.addEventListener('scroll', handleScroll);


// back to top 
// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// food section 7
// Create an IntersectionObserver to detect when the section comes into view
const foodSection = document.querySelector('.foodie-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add class to trigger animation when section is in view
            entry.target.classList.add('animate');
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // Trigger animation when 50% of the section is visible
});

// Start observing the food section
observer.observe(foodSection);


// food section 8
// Check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Add scroll event listener to trigger animations
window.addEventListener('scroll', () => {
    const foodItems = document.querySelectorAll('.food-item6');

    foodItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible'); // Add the 'visible' class when item is in the viewport
        }
    });
});



// food section 9 
let currentIndex = 0;
const items = document.querySelectorAll('.slider-item7');
const totalItems = items.length;

// Function to move the slide and show the next or previous products
function moveSlide(direction) {
    const wrapper = document.querySelector('.slider-wrapper7');
    currentIndex += direction;

    // Ensure that the index stays within bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - 3; // Go to the last set of 3 items
    } else if (currentIndex >= totalItems - 2) {
        currentIndex = 0; // Go back to the first set of 3 items
    }

    // Move the slider by adjusting the transform property
    wrapper.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}