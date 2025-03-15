// add to cart code 
// Initialize or load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    // Add item to cart
    cart.push({ name, price });

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added successfully!`);
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
    threshold: 1 // Trigger animation when 50% of the section is visible
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


// search btn section 2 
// Mock recipe data for demonstration
const recipes = [
    { name: 'pizza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s' },
    { name: 'chinies', image: 'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/wlqenuza/a1ccb6d0-30e6-43eb-a599-d8e6e7d840d1.jpg' },
    { name: 'burger', image: 'https://images.firstpost.com/uploads/2023/04/burger-pic.jpg?im=FitAndFill=(1200,675)' },
    { name: 'Tacos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjgn03jBikO5rfksRaa2isvJP9CJF4r_AAw&s' },
    { name: 'samosa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnVgCV-6sbWMQ-OaALcEztviIakZJgzo5Jg&s' },
    { name: 'chaat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOfsOElpwBStZjHbuwcOsPfqmUqkJxYhirQ&s' },
];

// Function to search for recipes
function searchRecipe() {
    const searchTerm = document.getElementById('recipe-search').value.toLowerCase();
    const results = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));

    displayRecipes(results);
}

// Function to display the recipes
function displayRecipes(recipesList) {
    const recipeResults = document.getElementById('recipe-results');
    recipeResults.innerHTML = ''; // Clear previous results

    if (recipesList.length === 0) {
        recipeResults.innerHTML = '<p>No recipes found!</p>';
        return;
    }

    recipesList.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <h3>${recipe.name}</h3>
                `;
        recipeResults.appendChild(recipeCard);
    });
}


// food section 5 
let currentIndex1 = 0;

function moveSlider(direction) {
    const foodSection = document.querySelector('.food-section5');
    const foodItems = document.querySelectorAll('.food-item5');
    const totalItems = foodItems.length;

    // Get the width of an item dynamically
    const itemWidth = foodItems[0].offsetWidth;

    // Calculate the offset
    const offset = direction * itemWidth;

    currentIndex1 += direction;

    // Loop the slider
    if (currentIndex1 < 0) {
        currentIndex1 = totalItems - 1;
    } else if (currentIndex1 >= totalItems) {
        currentIndex1 = 0;
    }

    // Adjust the transform for the slider
    foodSection.style.transform = `translateX(-${currentIndex1 * itemWidth}px)`;
}

// Handle window resizing to adjust item width dynamically
window.addEventListener('resize', function () {
    const foodSection = document.querySelector('.food-section5');
    const foodItems = document.querySelectorAll('.food-item5');

    // Recalculate and adjust the transform based on the new width
    const itemWidth = foodItems[0].offsetWidth;
    foodSection.style.transform = `translateX(-${currentIndex1 * itemWidth}px)`;
});


// food section 6
let currentIndex2 = 0;

function moveSlider1(direction) {
    const foodSection = document.querySelector('.food-section7');
    const foodItems = document.querySelectorAll('.food-item7');
    const totalItems = foodItems.length;

    // Get the width of an item dynamically
    const itemWidth = foodItems[0].offsetWidth;

    // Calculate the offset
    const offset = direction * itemWidth;

    currentIndex2 += direction;

    // Loop the slider
    if (currentIndex2 < 0) {
        currentIndex2 = totalItems - 1;
    } else if (currentIndex2 >= totalItems) {
        currentIndex2 = 0;
    }

    // Adjust the transform for the slider
    foodSection.style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
}

// Handle window resizing to adjust item width dynamically
window.addEventListener('resize', function () {
    const foodSection = document.querySelector('.food-section7');
    const foodItems = document.querySelectorAll('.food-item7');

    // Recalculate and adjust the transform based on the new width
    const itemWidth = foodItems[0].offsetWidth;
    foodSection.style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
});



