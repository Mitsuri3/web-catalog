// Массив продуктов, содержащий данные об услугах (id, название, категория, цена и т.д.)
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
    },
    { 
        id: 16, 
        name: "Advanced UI Kit", 
        category: "design", 
        price: 199, 
        rating: 4.7, 
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80", 
        description: "Professional UI kit with 50+ customizable components for web and mobile.", 
        isNew: true,
        popularity: 88,
        discount: 0
    },
    { 
        id: 17, 
        name: "API Integration Service", 
        category: "development", 
        price: 499, 
        rating: 4.8, 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
        description: "Seamless integration of third-party APIs into your existing system.", 
        isNew: false,
        popularity: 85,
        discount: 10
    },
    { 
        id: 18, 
        name: "Influencer Marketing Package", 
        category: "marketing", 
        price: 699, 
        rating: 4.6, 
        img: "https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
        description: "Collaboration with 5 influencers in your niche for brand promotion.", 
        isNew: true,
        popularity: 89,
        discount: 0
    },
    { 
        id: 19, 
        name: "Brand Naming & Slogan", 
        category: "branding", 
        price: 349, 
        rating: 4.5, 
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
        description: "Creative brand name and slogan development with trademark check.", 
        isNew: false,
        popularity: 82,
        discount: 0
    },
    { 
        id: 20, 
        name: "WordPress Speed Optimization", 
        category: "development", 
        price: 249, 
        rating: 4.7, 
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80", 
        description: "Boost your WordPress site speed with advanced optimization techniques.", 
        isNew: false,
        popularity: 87,
        discount: 0
    },
    { 
        id: 21, 
        name: "Social Media Ad Creatives", 
        category: "marketing", 
        price: 179, 
        rating: 4.4, 
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80", 
        description: "10 high-converting ad designs for Facebook & Instagram.", 
        isNew: true,
        popularity: 83,
        discount: 0
    },
    { 
        id: 22, 
        name: "3D Product Rendering", 
        category: "design", 
        price: 399, 
        rating: 4.8, 
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80", 
        description: "Hyper-realistic 3D renders for e-commerce and marketing materials.", 
        isNew: true,
        popularity: 91,
        discount: 0
    },
    { 
        id: 23, 
        name: "Mobile App Development", 
        category: "development", 
        price: 1499, 
        rating: 4.9, 
        img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
        description: "Custom iOS & Android app with backend and admin panel.", 
        isNew: false,
        popularity: 94,
        discount: 15
    },
    { 
        id: 24, 
        name: "Email Marketing Campaign", 
        category: "marketing", 
        price: 299, 
        rating: 4.5, 
        img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80", 
        description: "Complete email sequence setup with A/B testing and analytics.", 
        isNew: false,
        popularity: 84,
        discount: 0
    },
    { 
        id: 25, 
        name: "Brand Guidelines Book", 
        category: "branding", 
        price: 549, 
        rating: 4.7, 
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80", 
        description: "Comprehensive brand manual with logo usage, colors, and typography rules.", 
        isNew: true,
        popularity: 86,
        discount: 0
    },
    { 
        id: 26, 
        name: "Landing Page Design", 
        category: "design", 
        price: 349, 
        rating: 4.6, 
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80", 
        description: "High-converting landing page with mobile optimization.", 
        isNew: false,
        popularity: 85,
        discount: 0
    },
    { 
        id: 27, 
        name: "Shopify Store Setup", 
        category: "development", 
        price: 799, 
        rating: 4.8, 
        img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
        description: "Fully customized Shopify store with product import and SEO setup.", 
        isNew: true,
        popularity: 90,
        discount: 0
    },
    { 
        id: 28, 
        name: "Content Marketing Strategy", 
        category: "marketing", 
        price: 599, 
        rating: 4.7, 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
        description: "3-month content plan with blog posts, videos, and social media integration.", 
        isNew: false,
        popularity: 87,
        discount: 0
    },
    { 
        id: 29, 
        name: "Animated Logo Reveal", 
        category: "branding", 
        price: 299, 
        rating: 4.9, 
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80", 
        description: "10-second professional logo animation for intros and branding.", 
        isNew: true,
        popularity: 93,
        discount: 0
    },
    { 
        id: 30, 
        name: "UX Audit & Redesign", 
        category: "design", 
        price: 899, 
        rating: 4.8, 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", 
        description: "In-depth UX analysis and redesign for better user engagement.", 
        isNew: false,
        popularity: 92,
        discount: 0
    }
    
];

// Элементы DOM для работы с интерфейсом
const productsContainer = document.getElementById('productsContainer'); // Контейнер для карточек товаров
const searchInput = document.getElementById('searchInput'); // Поле ввода для поиска
const sortSelect = document.getElementById('sortSelect'); // Выпадающий список для сортировки
const categoryFilter = document.getElementById('categoryFilter'); // Контейнер для кнопок фильтрации по категориям
const methodButtons = document.querySelectorAll('.method-btn'); // Кнопки дополнительных методов фильтрации
const cartButton = document.getElementById('cartButton'); // Кнопка открытия корзины
const cartModal = document.getElementById('cartModal'); // Модальное окно корзины
const cartItemsContainer = document.getElementById('cartItems'); // Контейнер для элементов корзины
const cartTotal = document.getElementById('cartTotal'); // Элемент для отображения общей суммы корзины
const cartCount = document.getElementById('cartCount'); // Счетчик товаров в корзине
const closeCart = document.querySelector('.close-cart'); // Кнопка закрытия корзины
const checkoutBtn = document.getElementById('checkoutBtn'); // Кнопка оформления заказа
const notification = document.getElementById('notification'); // Контейнер для уведомлений
const notificationMessage = document.getElementById('notificationMessage'); // Текст уведомления
const favoritesButton = document.getElementById('favoritesButton'); // Кнопка открытия избранного
const favoritesModal = document.getElementById('favoritesModal'); // Модальное окно избранного
const favoritesItemsContainer = document.getElementById('favoritesItems'); // Контейнер для элементов избранного
const favoritesCount = document.getElementById('favoritesCount'); // Счетчик избранных товаров
const closeFavorites = document.querySelector('.close-favorites'); // Кнопка закрытия избранного
const clearFavoritesBtn = document.getElementById('clearFavoritesBtn'); // Кнопка очистки избранного

// Состояние приложения
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Корзина, загружаемая из localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Избранное, загружаемое из localStorage
let currentProducts = [...products]; // Текущие отфильтрованные/отсортированные продукты

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(currentProducts); // Отрисовываем начальный список продуктов
    updateCart(); // Обновляем состояние корзины
    updateFavorites(); // Обновляем состояние избранного
    setupEventListeners(); // Устанавливаем слушатели событий
});

// Установка слушателей событий для интерактивных элементов
function setupEventListeners() {
    // Поиск: реагируем на ввод текста в поле поиска
    searchInput.addEventListener('input', handleSearch);

    // Сортировка: реагируем на выбор критерия сортировки
    sortSelect.addEventListener('change', handleSort);

    // Фильтрация по категориям: реагируем на клик по кнопкам категорий
    categoryFilter.addEventListener('click', handleCategoryFilter);

    // Дополнительные методы фильтрации: реагируем на клик по кнопкам методов
    methodButtons.forEach(button => {
        button.addEventListener('click', handleMethodFilter);
    });

    // Корзина: открытие, закрытие, оформление заказа
    cartButton.addEventListener('click', showCart);
    closeCart.addEventListener('click', hideCart);
    checkoutBtn.addEventListener('click', handleCheckout);

    // Избранное: открытие, закрытие, очистка
    favoritesButton.addEventListener('click', showFavorites);
    closeFavorites.addEventListener('click', hideFavorites);
    clearFavoritesBtn.addEventListener('click', handleClearFavorites);
}

// Отрисовка карточек продуктов на странице
function renderProducts(productsToRender) {
    // Проверяем наличие контейнера для продуктов
    if (!productsContainer) {
        console.error('Контейнер productsContainer не найден');
        return;
    }
    // Если продуктов нет или передан некорректный массив, показываем сообщение
    if (!Array.isArray(productsToRender) || productsToRender.length === 0) {
        productsContainer.innerHTML = '<p>Товары не найдены.</p>';
        return;
    }

    // Очищаем контейнер перед отрисовкой
    productsContainer.innerHTML = '';
    // Создаем карточку для каждого продукта
    productsToRender.forEach(product => {
        const isFavorited = favorites.some(fav => fav.id === product.id); // Проверяем, добавлен ли продукт в избранное
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            ${product.isNew ? '<span class="product-badge">New</span>' : ''} <!-- Бейдж "New" для новых продуктов -->
            ${product.discount > 0 ? `<span class="product-badge">${product.discount}% Off</span>` : ''} <!-- Бейдж скидки -->
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price}</p>
                <p class="product-rating">★ ${product.rating}</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button class="button add-to-cart" data-id="${product.id}">Добавить в корзину</button>
                    <button class="button toggle-favorite" data-id="${product.id}">
                        ${isFavorited ? 'Удалить из избранного' : 'Добавить в избранное'}
                        <i class="fas fa-heart" style="color: ${isFavorited ? '#ff4444' : '#aaa'}; margin-left: 5px;"></i>
                    </button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard); // Добавляем карточку в контейнер
    });
}

// Установка глобальной делегации событий для кнопок на карточках
function setupProductEventListeners() {
    // Удаляем существующий слушатель, чтобы избежать дублирования
    productsContainer.removeEventListener('click', handleProductClick);
    // Добавляем новый слушатель для обработки кликов по кнопкам
    productsContainer.addEventListener('click', handleProductClick);
}

// Обработка кликов по кнопкам на карточках продуктов
function handleProductClick(e) {
    const button = e.target.closest('button'); // Находим ближайшую кнопку
    if (!button) return; // Если кнопка не найдена, выходим
    const id = parseInt(button.dataset.id); // Получаем ID продукта
    // Обрабатываем клик по кнопке "Добавить в корзину"
    if (button.classList.contains('add-to-cart')) {
        handleAddToCart({ target: button });
    // Обрабатываем клик по кнопке "Добавить/Удалить из избранного"
    } else if (button.classList.contains('toggle-favorite')) {
        handleToggleFavorite({ target: button });
    }
}

// Установка слушателя событий для карточек при загрузке страницы
document.addEventListener('DOMContentLoaded', setupProductEventListeners);

// Обработчик поиска по названию продукта
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase(); // Получаем поисковый запрос
    // Фильтруем продукты по совпадению с названием
    currentProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(currentProducts); // Отрисовываем отфильтрованные продукты
    setupProductEventListeners(); // Переустанавливаем слушатели событий
}

// Обработчик сортировки продуктов
function handleSort() {
    const sortValue = sortSelect.value; // Получаем выбранный критерий сортировки
    currentProducts = [...currentProducts]; // Создаем копию текущих продуктов

    // Сортируем продукты в зависимости от критерия
    switch (sortValue) {
        case 'price-asc':
            currentProducts.sort((a, b) => a.price - b.price); // По цене: по возрастанию
            break;
        case 'price-desc':
            currentProducts.sort((a, b) => b.price - a.price); // По цене: по убыванию
            break;
        case 'name-asc':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name)); // По названию: A-Z
            break;
        case 'name-desc':
            currentProducts.sort((a, b) => b.name.localeCompare(b.name)); // По названию: Z-A
            break;
        case 'rating-desc':
            currentProducts.sort((a, b) => b.rating - a.rating); // По рейтингу: по убыванию
            break;
        case 'popularity':
            currentProducts.sort((a, b) => b.popularity - a.popularity); // По популярности: по убыванию
            break;
    }

    renderProducts(currentProducts); // Отрисовываем отсортированные продукты
    setupProductEventListeners(); // Переустанавливаем слушатели событий
}

// Обработчик фильтрации по категориям
function handleCategoryFilter(e) {
    // Проверяем, что клик был по кнопке категории
    if (e.target.classList.contains('category-btn')) {
        const category = e.target.dataset.category; // Получаем выбранную категорию
        // Удаляем активный класс у всех кнопок
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active'); // Добавляем активный класс текущей кнопке

        // Фильтруем продукты: все или по выбранной категории
        currentProducts = category === 'all'
            ? [...products]
            : products.filter(product => product.category === category);
        renderProducts(currentProducts); // Отрисовываем отфильтрованные продукты
        setupProductEventListeners(); // Переустанавливаем слушатели событий
    }
}

// Обработчик дополнительных методов фильтрации
function handleMethodFilter(e) {
    const method = e.target.dataset.method; // Получаем выбранный метод
    let filteredProducts = [...products]; // Создаем копию всех продуктов

    // Удаляем активный класс у всех кнопок
    methodButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active'); // Добавляем активный класс текущей кнопке

    // Применяем фильтр в зависимости от метода
    switch (method) {
        case 'all':
            filteredProducts = products; // Показываем все продукты
            break;
        case 'filter-price':
            filteredProducts = products.filter(product => product.price >= 700); // Продукты с ценой > 700
            break;
        case 'filter-rating':
            filteredProducts = products.filter(product => product.rating >= 4.9); // Продукты с рейтингом ≥ 4.5
            break;
        case 'filter-new':
            filteredProducts = products.filter(product => product.isNew); // Только новые продукты
            break;
        case 'filter-bestsellers':
            filteredProducts = products
                .slice()
                .sort((a, b) => b.popularity - a.popularity) // Сортировка по популярности
                .slice(0, 8); // Первые 8 продуктов
            break;
        case 'filter-discount':
            filteredProducts = products.filter(product => product.discount > 0); // Продукты со скидкой
            break;
        case 'filter-custom':
            filteredProducts = products.map(product => ({
                ...product,
                name: `Custom ${product.name}` // Добавляем "Custom" к названию
            }));
            break;
        case 'reduce-total':
            const totalValue = products.reduce((acc, product) => acc + product.price, 0); // Сумма цен всех продуктов
            alert(`Общая стоимость всех продуктов: $${totalValue}`);
            return;
        case 'some-discounted':
            const hasDiscount = products.some(product => product.discount > 0); // Проверка наличия скидок
            alert(`Есть ли продукты со скидкой? ${hasDiscount ? 'Да' : 'Нет'}`);
            return;
        case 'every-rated':
            const allHighRated = products.every(product => product.rating >= 4.0); // Проверка рейтинга ≥ 4.0
            alert(`Все ли продукты имеют высокий рейтинг (4.0+)? ${allHighRated ? 'Да' : 'Нет'}`);
            return;
    }

    currentProducts = filteredProducts; // Обновляем текущие продукты
    renderProducts(currentProducts); // Отрисовываем отфильтрованные продукты
    setupProductEventListeners(); // Переустанавливаем слушатели событий
}

// Обработчик добавления продукта в корзину
function handleAddToCart(e) {
    const productId = parseInt(e.target.dataset.id); // Получаем ID продукта
    const product = products.find(p => p.id === productId); // Находим продукт по ID
    
    const cartItem = cart.find(item => item.id === productId); // Проверяем, есть ли продукт в корзине
    if (cartItem) {
        cartItem.quantity++; // Увеличиваем количество, если продукт уже в корзине
    } else {
        cart.push({ ...product, quantity: 1 }); // Добавляем новый продукт с количеством 1
    }

    updateCart(); // Обновляем корзину
    showNotification(`${product.name} добавлен в корзину!`); // Показываем уведомление
}

// Обновление состояния и отображения корзины
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем корзину в localStorage
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0); 
    
    cartItemsContainer.innerHTML = ''; 
    let total = 0; 

    // Создаем элементы для каждого товара в корзине
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

    // Устанавливаем слушатели для кнопок изменения количества и удаления
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', handleQuantityChange);
    });
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', handleRemoveFromCart);
    });
}

// Обработчик изменения количества товара в корзине
function handleQuantityChange(e) {
    const productId = parseInt(e.target.dataset.id); // Получаем ID продукта
    const isIncrease = e.target.classList.contains('increase'); // Проверяем, увеличение или уменьшение
    
    const cartItem = cart.find(item => item.id === productId); // Находим товар в корзине
    if (cartItem) {
        if (isIncrease) {
            cartItem.quantity++; // Увеличиваем количество
        } else if (cartItem.quantity > 1) {
            cartItem.quantity--; // Уменьшаем количество, если больше 1
        } else {
            cart = cart.filter(item => item.id !== productId); // Удаляем товар, если количество 1
        }
        updateCart(); // Обновляем корзину
        showNotification(`Количество обновлено для ${cartItem.name}`); // Показываем уведомление
    }
}

// Обработчик удаления товара из корзины
function handleRemoveFromCart(e) {
    const productId = parseInt(e.target.dataset.id); // Получаем ID продукта
    cart = cart.filter(item => item.id !== productId); // Удаляем товар из корзины
    updateCart(); // Обновляем корзину
    showNotification('Товар удален из корзины'); // Показываем уведомление
}

// Отображение модального окна корзины
function showCart() {
    cartModal.style.display = 'block'; // Показываем модальное окно
    document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
}

// Скрытие модального окна корзины
function hideCart() {
    cartModal.style.display = 'none'; // Скрываем модальное окно
    document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
}

// Обработчик оформления заказа
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Ваша корзина пуста!'); // Уведомление, если корзина пуста
        return;
    }
    showNotification('Оформление заказа успешно!'); // Уведомление об успехе
    cart = []; // Очищаем корзину
    updateCart(); // Обновляем корзину
    hideCart(); // Скрываем модальное окно
}

// Обработчик добавления/удаления продукта из избранного
function handleToggleFavorite(e) {
    const productId = parseInt(e.target.closest('button').dataset.id); // Получаем ID продукта
    const product = products.find(p => p.id === productId); // Находим продукт по ID
    const isFavorited = favorites.some(fav => fav.id === productId); // Проверяем, есть ли в избранном

    if (isFavorited) {
        favorites = favorites.filter(fav => fav.id !== productId); // Удаляем из избранного
        showNotification(`${product.name} удален из избранного!`); // Показываем уведомление
    } else {
        favorites.push({ ...product }); // Добавляем в избранное
        showNotification(`${product.name} добавлен в избранное!`); // Показываем уведомление
    }

    updateFavorites(); // Обновляем избранное
    renderProducts(currentProducts); // Отрисовываем продукты, сохраняя фильтры
    setupProductEventListeners(); // Переустанавливаем слушатели событий
}

// Обновление состояния и отображения избранного
function updateFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites)); // Сохраняем избранное в localStorage
    favoritesCount.textContent = favorites.length; // Обновляем счетчик избранного

    favoritesItemsContainer.innerHTML = ''; // Очищаем контейнер избранного
    // Создаем элементы для каждого избранного продукта
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
        favoritesItemsContainer.appendChild(favoriteItem); // Добавляем элемент в контейнер
    });

    // Устанавливаем слушатели для кнопок удаления из избранного
    document.querySelectorAll('.favorites-item-remove').forEach(button => {
        button.addEventListener('click', handleRemoveFromFavorites);
    });
}

// Обработчик удаления продукта из избранного
function handleRemoveFromFavorites(e) {
    const productId = parseInt(e.target.dataset.id); // Получаем ID продукта
    const product = products.find(p => p.id === productId); // Находим продукт по ID
    favorites = favorites.filter(fav => fav.id !== productId); // Удаляем из избранного
    updateFavorites(); // Обновляем избранное
    renderProducts(currentProducts); // Отрисовываем продукты, сохраняя фильтры
    setupProductEventListeners(); // Переустанавливаем слушатели событий
    showNotification(`${product.name} удален из избранного!`); // Показываем уведомление
}

// Отображение модального окна избранного
function showFavorites() {
    favoritesModal.style.display = 'block'; // Показываем модальное окно
    document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
}

// Скрытие модального окна избранного
function hideFavorites() {
    favoritesModal.style.display = 'none'; // Скрываем модальное окно
    document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
}

// Обработчик очистки списка избранного
function handleClearFavorites() {
    if (favorites.length === 0) {
        showNotification('Список избранного пуст!'); // Уведомление, если избранное пусто
        return;
    }
    favorites = []; // Очищаем избранное
    updateFavorites(); // Обновляем избранное
    renderProducts(currentProducts); // Отрисовываем продукты, сохраняя фильтры
    setupProductEventListeners(); // Переустанавливаем слушатели событий
    showNotification('Избранное очищено!'); // Показываем уведомление
}

// Отображение уведомления с сообщением
function showNotification(message) {
    notificationMessage.textContent = message; // Устанавливаем текст уведомления
    notification.classList.add('show'); // Показываем уведомление
    setTimeout(() => {
        notification.classList.remove('show'); // Скрываем через 3 секунды
    }, 3000);
}