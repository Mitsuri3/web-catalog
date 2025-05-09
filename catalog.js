const products = [
    { 
        id: 1, 
        name: "Premium Logo Design", 
        category: "design", 
        price: 299, 
        rating: 4.8, 
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", 
        description: "Exclusive logo design with 3 concepts and unlimited revisions.", 
        isNew: true,
        popularity: 95,
        discount: 0
    },
    { 
        id: 2, 
        name: "Web Development Pro", 
        category: "development", 
        price: 899, 
        rating: 4.9, 
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80", 
        description: "Complete responsive website with CMS integration.", 
        isNew: false,
        popularity: 92,
        discount: 10
    },
    { 
        id: 3, 
        name: "Marketing Strategy Elite", 
        category: "marketing", 
        price: 499, 
        rating: 4.7, 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
        description: "Comprehensive 6-month marketing plan with analytics.", 
        isNew: true,
        popularity: 88,
        discount: 0
    },
    { 
        id: 4, 
        name: "Business Branding Suite", 
        category: "branding", 
        price: 799, 
        rating: 5.0, 
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
        description: "Full branding package including logo, colors, and typography.", 
        isNew: false,
        popularity: 97,
        discount: 15
    },
    { 
        id: 5, 
        name: "Social Media Campaign", 
        category: "marketing", 
        price: 399, 
        rating: 4.6, 
        img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", 
        description: "30-day social media management for 3 platforms.", 
        isNew: false,
        popularity: 85,
        discount: 0
    },
    { 
        id: 6, 
        name: "App UI/UX Design", 
        category: "design", 
        price: 599, 
        rating: 4.9, 
        img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
        description: "Mobile app design with prototypes and user testing.", 
        isNew: true,
        popularity: 90,
        discount: 20
    },
    { 
        id: 7, 
        name: "SEO Optimization Pro", 
        category: "marketing", 
        price: 349, 
        rating: 4.5, 
        img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80", 
        description: "Technical and content SEO for 10 pages.", 
        isNew: false,
        popularity: 82,
        discount: 0
    },
    { 
        id: 8, 
        name: "E-commerce Solution", 
        category: "development", 
        price: 1299, 
        rating: 4.8, 
        img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
        description: "Custom online store with payment gateway integration.", 
        isNew: false,
        popularity: 94,
        discount: 0
    },
    { 
        id: 9, 
        name: "Packaging Design", 
        category: "branding", 
        price: 449, 
        rating: 4.7, 
        img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80", 
        description: "Creative packaging design for your product line.", 
        isNew: true,
        popularity: 87,
        discount: 0
    },
    { 
        id: 10, 
        name: "Corporate Identity", 
        category: "branding", 
        price: 699, 
        rating: 4.9, 
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80", 
        description: "Complete corporate identity system for large businesses.", 
        isNew: false,
        popularity: 91,
        discount: 10
    },
    { 
        id: 11, 
        name: "Print Design Suite", 
        category: "design", 
        price: 299, 
        rating: 4.4, 
        img: "https://images.unsplash.com/photo-1541140134513-85a161dc4a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
        description: "Business cards, letterheads, and marketing materials.", 
        isNew: false,
        popularity: 80,
        discount: 0
    },
    { 
        id: 12, 
        name: "UX Research Package", 
        category: "design", 
        price: 549, 
        rating: 4.8, 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
        description: "In-depth user research and persona development.", 
        isNew: true,
        popularity: 89,
        discount: 0
    },
    { 
        id: 13, 
        name: "Custom Illustrations", 
        category: "design", 
        price: 249, 
        rating: 4.6, 
        img: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80", 
        description: "Set of 5 custom digital illustrations.", 
        isNew: false,
        popularity: 84,
        discount: 0
    },
    { 
        id: 14, 
        name: "Database Development", 
        category: "development", 
        price: 799, 
        rating: 4.7, 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
        description: "Custom database design and implementation.", 
        isNew: false,
        popularity: 86,
        discount: 0
    },
    { 
        id: 15, 
        name: "Motion Graphics", 
        category: "branding", 
        price: 599, 
        rating: 4.9, 
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80", 
        description: "30-second promotional animation for your brand.", 
        isNew: true,
        popularity: 93,
        discount: 0
    }
];

// DOM Elements
const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categoryFilter = document.getElementById('categoryFilter');
const methodButtons = document.querySelectorAll('.method-btn');
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const closeCart = document.querySelector('.close-cart');
const checkoutBtn = document.getElementById('checkoutBtn');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');
const favoritesButton = document.getElementById('favoritesButton');
const favoritesModal = document.getElementById('favoritesModal');
const favoritesItemsContainer = document.getElementById('favoritesItems');
const favoritesCount = document.getElementById('favoritesCount');
const closeFavorites = document.querySelector('.close-favorites');
const clearFavoritesBtn = document.getElementById('clearFavoritesBtn');

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentProducts = [...products]; // Store current filtered/sorted products

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(currentProducts);
    updateCart();
    updateFavorites();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', handleSearch);

    // Sort
    sortSelect.addEventListener('change', handleSort);

    // Category filter
    categoryFilter.addEventListener('click', handleCategoryFilter);

    // Method buttons
    methodButtons.forEach(button => {
        button.addEventListener('click', handleMethodFilter);
    });

    // Cart
    cartButton.addEventListener('click', showCart);
    closeCart.addEventListener('click', hideCart);
    checkoutBtn.addEventListener('click', handleCheckout);

    // Favorites
    favoritesButton.addEventListener('click', showFavorites);
    closeFavorites.addEventListener('click', hideFavorites);
    clearFavoritesBtn.addEventListener('click', handleClearFavorites);
}

// Render products
function renderProducts(productsToRender) {
    if (!productsContainer) {
        console.error('productsContainer element not found');
        return;
    }
    if (!Array.isArray(productsToRender) || productsToRender.length === 0) {
        productsContainer.innerHTML = '<p>No products found.</p>';
        return;
    }

    productsContainer.innerHTML = '';
    productsToRender.forEach(product => {
        const isFavorited = favorites.some(fav => fav.id === product.id);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            ${product.isNew ? '<span class="product-badge">New</span>' : ''}
            ${product.discount > 0 ? `<span class="product-badge">${product.discount}% Off</span>` : ''}
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price}</p>
                <p class="product-rating">★ ${product.rating}</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button class="button add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="button toggle-favorite" data-id="${product.id}">
                        ${isFavorited ? 'Удалить из избранного' : 'Добавить в избранное'}
                        <i class="fas fa-heart" style="color: ${isFavorited ? '#ff4444' : '#aaa'}; margin-left: 5px;"></i>
                    </button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Global event delegation for buttons
function setupProductEventListeners() {
    // Remove existing listener to prevent duplicates
    productsContainer.removeEventListener('click', handleProductClick);
    productsContainer.addEventListener('click', handleProductClick);
}

function handleProductClick(e) {
    const button = e.target.closest('button');
    if (!button) return;
    const id = parseInt(button.dataset.id);
    if (button.classList.contains('add-to-cart')) {
        handleAddToCart({ target: button });
    } else if (button.classList.contains('toggle-favorite')) {
        handleToggleFavorite({ target: button });
    }
}

// Call setup on initialization and after each render
document.addEventListener('DOMContentLoaded', setupProductEventListeners);

// Search handler
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    currentProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(currentProducts);
    setupProductEventListeners(); // Re-attach event listeners
}

// Sort handler
function handleSort() {
    const sortValue = sortSelect.value;
    currentProducts = [...currentProducts];

    switch (sortValue) {
        case 'price-asc':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            currentProducts.sort((a, b) => b.name.localeCompare(b.name));
            break;
        case 'rating-desc':
            currentProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'popularity':
            currentProducts.sort((a, b) => b.popularity - a.popularity);
            break;
    }

    renderProducts(currentProducts);
    setupProductEventListeners(); // Re-attach event listeners
}

// Category filter handler
function handleCategoryFilter(e) {
    if (e.target.classList.contains('category-btn')) {
        const category = e.target.dataset.category;
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        currentProducts = category === 'all'
            ? [...products]
            : products.filter(product => product.category === category);
        renderProducts(currentProducts);
        setupProductEventListeners(); // Re-attach event listeners
    }
}

// Method filter handler
function handleMethodFilter(e) {
    const method = e.target.dataset.method;
    let filteredProducts = [...products];

    methodButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    switch (method) {
        case 'all':
            filteredProducts = products;
            break;
        case 'filter-price':
            filteredProducts = products.filter(product => product.price >= 200);
            break;
        case 'filter-rating':
            filteredProducts = products.filter(product => product.rating >= 4.5);
            break;
        case 'filter-new':
            filteredProducts = products.filter(product => product.isNew);
            break;
        case 'filter-bestsellers':
            filteredProducts = products
                .slice()
                .sort((a, b) => b.popularity - a.popularity)
                .slice(0, 8);
            break;
        case 'filter-discount':
            filteredProducts = products.filter(product => product.discount > 0);
            break;
        case 'filter-custom':
            filteredProducts = products.map(product => ({
                ...product,
                name: `Custom ${product.name}`
            }));
            break;
        case 'reduce-total':
            const totalValue = products.reduce((acc, product) => acc + product.price, 0);
            alert(`Total value of all products: $${totalValue}`);
            return;
        case 'some-discounted':
            const hasDiscount = products.some(product => product.discount > 0);
            alert(`Are there discounted products? ${hasDiscount ? 'Yes' : 'No'}`);
            return;
        case 'every-rated':
            const allHighRated = products.every(product => product.rating >= 4.0);
            alert(`Are all products highly rated (4.0+)? ${allHighRated ? 'Yes' : 'No'}`);
            return;
    }

    currentProducts = filteredProducts;
    renderProducts(currentProducts);
    setupProductEventListeners(); // Re-attach event listeners
}

// Cart handlers
function handleAddToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification(`${product.name} добавлен в корзину!`);
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">$${item.price}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <input type="text" class="quantity-value" value="${item.quantity}" readonly>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">×</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Quantity and remove listeners
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', handleQuantityChange);
    });
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', handleRemoveFromCart);
    });
}

function handleQuantityChange(e) {
    const productId = parseInt(e.target.dataset.id);
    const isIncrease = e.target.classList.contains('increase');
    
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (isIncrease) {
            cartItem.quantity++;
        } else if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCart();
        showNotification(`Количество обновлено для ${cartItem.name}`);
    }
}

function handleRemoveFromCart(e) {
    const productId = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Товар удален из корзины');
}

function showCart() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideCart() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Ваша корзина пуста!');
        return;
    }
    showNotification('Оформление заказа успешно!');
    cart = [];
    updateCart();
    hideCart();
}

// Favorites handlers
function handleToggleFavorite(e) {
    const productId = parseInt(e.target.closest('button').dataset.id);
    const product = products.find(p => p.id === productId);
    const isFavorited = favorites.some(fav => fav.id === productId);

    if (isFavorited) {
        favorites = favorites.filter(fav => fav.id !== productId);
        showNotification(`${product.name} удален из избранного!`);
    } else {
        favorites.push({ ...product });
        showNotification(`${product.name} добавлен в избранное!`);
    }

    updateFavorites();
    renderProducts(currentProducts); // Preserve filters
    setupProductEventListeners(); // Re-attach event listeners
}

function updateFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    favoritesCount.textContent = favorites.length;

    favoritesItemsContainer.innerHTML = '';
    favorites.forEach(item => {
        const favoriteItem = document.createElement('div');
        favoriteItem.className = 'favorites-item';
        favoriteItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="favorites-item-info">
                <h4 class="favorites-item-title">${item.name}</h4>
                <p class="favorites-item-price">$${item.price}</p>
            </div>
            <button class="favorites-item-remove" data-id="${item.id}">×</button>
        `;
        favoritesItemsContainer.appendChild(favoriteItem);
    });

    // Remove favorite listeners
    document.querySelectorAll('.favorites-item-remove').forEach(button => {
        button.addEventListener('click', handleRemoveFromFavorites);
    });
}

function handleRemoveFromFavorites(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    favorites = favorites.filter(fav => fav.id !== productId);
    updateFavorites();
    renderProducts(currentProducts); // Preserve filters
    setupProductEventListeners(); // Re-attach event listeners
    showNotification(`${product.name} удален из избранного!`);
}

function showFavorites() {
    favoritesModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideFavorites() {
    favoritesModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleClearFavorites() {
    if (favorites.length === 0) {
        showNotification('Список избранного пуст!');
        return;
    }
    favorites = [];
    updateFavorites();
    renderProducts(currentProducts); // Preserve filters
    setupProductEventListeners(); // Re-attach event listeners
    showNotification('Избранное очищено!');
}

function showNotification(message) {
    notificationMessage.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}