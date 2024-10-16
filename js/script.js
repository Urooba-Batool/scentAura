// ====================   menu bar ===========================================
const menuBtn = document.getElementById('menu-btn');
        const navLinks = document.getElementById('nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
// ====================================   categoriess ===================================
const categoryData = [
    { name: "Men", image: "img/categories/men.webp" },
    { name: "Women", image: "img/categories/women.webp" },
    { name: "Arabic", image: "img/categories/arabic.webp" },
    { name: "Floral", image: "img/categories/floral.jpg" },
    { name: "Luxury", image: "img/categories/luxary.avif" },
    { name: "Summar", image: "img/categories/summar.webp" },
    { name: "Itir", image: "img/categories/itir.jpg" }
    // Add more categories as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('category-slider');
    
    // Function to create a category card
    function createCategoryCard(category) {
        const card = document.createElement('div');
        card.className = 'category-card';
        
        const img = document.createElement('img');
        img.src = category.image;
        img.alt = category.name;
        img.style.borderRadius = '50%';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        
        const h3 = document.createElement('h3');
        h3.textContent = category.name;
        
        overlay.appendChild(h3);
        card.appendChild(img);
        card.appendChild(overlay);
        
        return card;
    }

    // Populate slider with category cards
    categoryData.forEach(category => {
        const card = createCategoryCard(category);
        slider.appendChild(card);
    });
});
// ==============================  featured products  ==============================




// Product Data
const productData = [
    {
        id: 1,
        image: 'img/perfume/j._girls/j-g1.webp',  // Path to image
        title: 'Perfume A',
        description: 'This is a long description for Perfume A. It has a wonderful fragrance.'
    },
    {
        id: 2,
        image: 'img/perfume/j._girls/j-g2.jpg',
        title: 'Perfume B',
        description: 'This is a long description for Perfume B. It is long-lasting and fresh.'
    },
    {
        id: 3,
        image: 'img/perfume/j._girls/j-g3.webp',
        title: 'Perfume C',
        description: 'This is a long description for Perfume C. It is ideal for all-day wear.'
    }
];

// Get the container where cards will be added
const cardContainer = document.getElementById('product-card-container');

// Generate cards dynamically using the productData JSON array
productData.forEach(product => {
    // Create a new div element for each card
    const card = document.createElement('div');
    card.className = 'col';  // Bootstrap column class for responsiveness

    // HTML content for each card
    card.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
            </div>
        </div>
    `;

    // Append the card to the container
    cardContainer.appendChild(card);
});