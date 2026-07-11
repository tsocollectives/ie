// TSO Collectives - Shared Application Logic

// Initialize Cart State from localStorage
let cart = JSON.parse(localStorage.getItem('tso_cart')) || [];

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initGlobalUI();
  
  // Page Detection & Specific Initialization
  if (document.getElementById('products-grid')) {
    initShopPage();
  }
  if (document.getElementById('product-detail-view')) {
    initProductDetailPage();
  }
  if (document.getElementById('cart-page-view')) {
    initCartPage();
  }
  if (document.getElementById('featured-grid')) {
    initHomePage();
  }
});

// ================= GLOBAL UI LOGIC =================
function initGlobalUI() {
  updateCartBadges();
  setupMobileMenu();
  setupCartDrawer();
  setupContactForms();
}

function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
}

function setupCartDrawer() {
  // Add dynamic html for cart drawer if it is missing on the page but container exists
  const drawerItems = document.getElementById('cart-drawer-items');
  if (drawerItems) {
    renderCartDrawer();
  }
}

function setupContactForms() {
  const commForm = document.getElementById('commission-form');
  if (commForm) {
    commForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('comm-name') ? document.getElementById('comm-name').value : 'Patron';
      showToast(`Thank you, ${name}! Your commission request has been received.`);
      commForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name') ? document.getElementById('contact-name').value : 'Patron';
      showToast(`Thank you, ${name}! Your inquiry has been sent successfully.`);
      contactForm.reset();
    });
  }
}

function updateCartBadges() {
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-count');
  badges.forEach(badge => {
    badge.textContent = totalQty;
    if (totalQty > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

// Open/Close Cart Drawer
window.toggleCartDrawer = function(open) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    if (open) {
      renderCartDrawer();
      drawer.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.add('translate-x-full');
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
};

// Render Drawer Items
function renderCartDrawer() {
  const drawerItems = document.getElementById('cart-drawer-items');
  const subtotalText = document.getElementById('cart-subtotal');
  
  if (!drawerItems) return;
  
  if (cart.length === 0) {
    drawerItems.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full text-center py-20 px-6">
        <div class="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-500 mb-4 border border-white/5">
          <i class="fas fa-shopping-bag text-xl text-luxury-gold/50"></i>
        </div>
        <p class="text-slate-300 font-semibold mb-1 font-serif">Your shopping bag is empty</p>
        <p class="text-slate-500 text-xs max-w-[240px] leading-relaxed">Transform your everyday life with our hand-painted luxury art & resin jewelry.</p>
        <a href="shop.html" onclick="toggleCartDrawer(false)" class="btn-luxury mt-6 py-2.5 px-6 rounded-xl text-xs uppercase tracking-wider font-semibold">Browse Collection</a>
      </div>
    `;
    if (subtotalText) subtotalText.textContent = '€0.00';
    return;
  }
  
  drawerItems.innerHTML = '';
  let subtotal = 0;
  
  cart.forEach((item, index) => {
    const itemRow = document.createElement('div');
    itemRow.className = 'flex gap-4 p-4 border-b border-slate-900/60 hover:bg-slate-900/10 transition-colors';
    itemRow.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover rounded-lg bg-slate-950 border border-white/5">
      <div class="flex-grow flex flex-col justify-between">
        <div>
          <h4 class="text-xs font-semibold text-slate-200 line-clamp-1">${item.name}</h4>
          <p class="text-[10px] text-slate-400 mt-0.5 line-clamp-1 italic">${item.option}</p>
          <p class="text-xs text-luxury-gold font-bold mt-1">€${item.price.toFixed(2)}</p>
        </div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center border border-slate-800 rounded-lg overflow-hidden bg-slate-950">
            <button onclick="updateCartItemQty(${index}, -1)" class="px-2 py-0.5 hover:bg-slate-900 text-slate-400 text-xs transition-colors">-</button>
            <span class="px-2 text-[11px] text-slate-200 font-medium">${item.quantity}</span>
            <button onclick="updateCartItemQty(${index}, 1)" class="px-2 py-0.5 hover:bg-slate-900 text-slate-400 text-xs transition-colors">+</button>
          </div>
          <button onclick="removeCartItem(${index})" class="text-slate-500 hover:text-red-400 text-[10px] uppercase font-semibold transition-colors">Remove</button>
        </div>
      </div>
    `;
    drawerItems.appendChild(itemRow);
    subtotal += item.price * item.quantity;
  });
  
  if (subtotalText) {
    subtotalText.textContent = `€${subtotal.toFixed(2)}`;
  }
}

// Add Item to Cart
window.addItemToCart = function(productId, optionName, price, image, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  // Find if item with same option already exists
  const existingIdx = cart.findIndex(item => item.id === productId && item.option === optionName);
  
  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      option: optionName,
      price: price,
      image: image,
      quantity: quantity
    });
  }
  
  saveCart();
  updateCartBadges();
  renderCartDrawer();
  
  // Toast notification
  showToast(`Added "${product.name} (${optionName})" to your bag.`);
};

window.updateCartItemQty = function(index, amount) {
  if (cart[index]) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartBadges();
    renderCartDrawer();
    // If we are on the main cart page, update that UI too
    if (document.getElementById('cart-page-view')) {
      renderCartPage();
    }
  }
};

window.removeCartItem = function(index) {
  if (cart[index]) {
    const name = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    updateCartBadges();
    renderCartDrawer();
    showToast(`Removed "${name}" from bag.`);
    if (document.getElementById('cart-page-view')) {
      renderCartPage();
    }
  }
};

function saveCart() {
  localStorage.setItem('tso_cart', JSON.stringify(cart));
}

// Toast System
window.showToast = function(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'glass-panel p-4 rounded-xl shadow-xl flex items-center gap-3 border-l-4 border-l-luxury-gold toast-msg pointer-events-auto min-w-[280px]';
  toast.innerHTML = `
    <div class="w-6 h-6 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 text-xs">
      <i class="fas fa-shopping-bag"></i>
    </div>
    <div class="text-xs text-slate-200 font-medium font-serif leading-tight flex-grow">${msg}</div>
    <button class="text-slate-500 hover:text-slate-200 transition-colors" onclick="this.parentElement.remove()">
      <i class="fas fa-times text-[10px]"></i>
    </button>
  `;
  container.appendChild(toast);
  
  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease forwards';
    toast.addEventListener('animationend', () => toast.remove());
  }, 4000);
};

// Global Checkout Navigation
const chkBtn = document.getElementById('checkout-btn');
if (chkBtn) {
  chkBtn.addEventListener('click', () => {
    toggleCartDrawer(false);
    window.location.href = 'cart.html';
  });
}


// ================= HOME PAGE LOGIC =================
function initHomePage() {
  renderFeaturedProducts();
  initTestimonials();
}

function renderFeaturedProducts() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  
  // Show first 4 products as featured items
  const featured = PRODUCTS.slice(0, 4);
  grid.innerHTML = '';
  
  featured.forEach(p => {
    const card = document.createElement('div');
    card.className = 'glass-panel rounded-2xl overflow-hidden gold-border-glow transition-all duration-300 flex flex-col h-full animate-fade-in-up';
    card.innerHTML = `
      <div class="relative image-zoom-parent h-72 bg-slate-950 flex items-center justify-center cursor-pointer" onclick="window.location.href='product.html?id=${p.id}'">
        <img src="${p.images[0]}" alt="${p.name}" class="image-zoom-child w-full h-full object-cover">
        <span class="absolute top-4 left-4 glass-panel text-[9px] text-luxury-gold font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-luxury-gold/20">
          ${p.category === 'glassware' ? '🎨 Glassware' : '💎 Resin Art'}
        </span>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center text-luxury-gold/80 text-xs">
            ${Array(5).fill('<i class="fas fa-star text-[9px]"></i>').join('')}
            <span class="text-slate-500 ml-1">(${p.reviews})</span>
          </div>
          <span class="text-sm font-bold font-serif text-luxury-gold">From €${p.price.toFixed(2)}</span>
        </div>
        <h3 class="text-sm font-serif font-bold text-slate-100 hover:text-luxury-gold cursor-pointer transition-colors mb-2 line-clamp-1" onclick="window.location.href='product.html?id=${p.id}'">
          ${p.name}
        </h3>
        <p class="text-slate-400 text-[11px] mb-5 flex-grow line-clamp-2 leading-relaxed">
          ${p.description}
        </p>
        <div class="grid grid-cols-2 gap-3 mt-auto">
          <a href="product.html?id=${p.id}" class="btn-luxury-outline py-2.5 text-center rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center">
            Details
          </a>
          <button onclick="addItemToCart('${p.id}', '${p.pricingOptions[0].name}', ${p.pricingOptions[0].price}, '${p.images[0]}', 1)" class="btn-luxury py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
            <i class="fas fa-shopping-bag text-[10px]"></i> Quick Add
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;
  
  const TESTIMONIALS = [
    {
      name: 'Sophia Montgomery',
      location: 'Dublin, Ireland',
      text: 'The hand-painted Irish Heritage pint glasses are simply breathtaking. The detailed gold outline on the Shamrock makes them reflect light beautifully. True artisan luxury!',
      rating: 5
    },
    {
      name: 'Marcus Sterling',
      location: 'Limerick, Ireland',
      text: 'I ordered a real flower resin necklace for my wife\'s anniversary. Exceptional detail with real dried wildflowers preserved inside clear resin. A masterpiece.',
      rating: 5
    },
    {
      name: 'Nathalie Dupont',
      location: 'Paris, France',
      text: 'The 3-tier candle stand is the centerpiece of our dining table. The cobalt blue frosting with hand-painted gold detail glows magically under candlelight.',
      rating: 5
    }
  ];
  
  let activeIndex = 0;
  
  window.renderTestimonial = function() {
    const t = TESTIMONIALS[activeIndex];
    container.innerHTML = `
      <div class="text-center px-4 md:px-12 flex flex-col items-center justify-center h-full transition-opacity duration-500">
        <div class="flex items-center gap-1 text-luxury-gold mb-4">
          ${Array(t.rating).fill('<i class="fas fa-star text-sm"></i>').join('')}
        </div>
        <blockquote class="text-slate-200 text-sm md:text-base font-serif italic leading-relaxed max-w-2xl mb-6">
          "${t.text}"
        </blockquote>
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-luxury-gold block font-serif">${t.name}</span>
          <span class="text-[10px] text-slate-500 tracking-widest uppercase block mt-0.5">${t.location}</span>
        </div>
      </div>
    `;
  };
  
  window.nextTestimonial = function() {
    activeIndex = (activeIndex + 1) % TESTIMONIALS.length;
    renderTestimonial();
  };
  
  window.prevTestimonial = function() {
    activeIndex = (activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    renderTestimonial();
  };
  
  renderTestimonial();
  setInterval(nextTestimonial, 8000); // Auto slider
}


// ================= SHOP PAGE LOGIC =================
let filteredProducts = [...PRODUCTS];
let shopFilter = 'all';
let shopSort = 'featured';
let shopSearch = '';

function initShopPage() {
  // Category buttons
  const filterButtons = document.querySelectorAll('[data-category]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => {
        b.className = 'filter-btn glass-panel text-slate-300 hover:text-luxury-gold font-semibold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300';
      });
      btn.className = 'filter-btn bg-luxury-gold text-luxury-obsidian shadow-lg shadow-luxury-gold/20 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300';
      shopFilter = btn.getAttribute('data-category');
      applyShopFilters();
    });
  });
  
  // Sort selection
  const sortSelect = document.getElementById('shop-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      shopSort = e.target.value;
      applyShopFilters();
    });
  }
  
  // Search bar
  const searchInput = document.getElementById('shop-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      shopSearch = e.target.value.toLowerCase().trim();
      applyShopFilters();
    });
  }
  
  applyShopFilters();
}

function applyShopFilters() {
  // Category Filter
  filteredProducts = PRODUCTS.filter(p => shopFilter === 'all' || p.category === shopFilter);
  
  // Search Filter
  if (shopSearch) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(shopSearch) || 
      p.description.toLowerCase().includes(shopSearch)
    );
  }
  
  // Sort Logic
  if (shopSort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (shopSort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (shopSort === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Default: Sort by rating (featured)
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  
  renderShopGrid();
}

function renderShopGrid() {
  const grid = document.getElementById('products-grid');
  const countText = document.getElementById('product-count');
  
  if (!grid) return;
  
  if (countText) {
    countText.textContent = `${filteredProducts.length} Product${filteredProducts.length === 1 ? '' : 's'} Found`;
  }
  
  grid.innerHTML = '';
  
  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-20 text-center glass-panel rounded-3xl border border-white/5">
        <i class="fas fa-search text-3xl text-luxury-gold/40 mb-4 block"></i>
        <h3 class="font-serif font-bold text-lg text-slate-300">No products match your criteria</h3>
        <p class="text-xs text-slate-500 mt-2 max-w-xs mx-auto">Try resetting filters or checking your spelling for custom glass art & jewelry.</p>
      </div>
    `;
    return;
  }
  
  filteredProducts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'glass-panel rounded-2xl overflow-hidden gold-border-glow transition-all duration-300 flex flex-col h-full animate-fade-in-up';
    card.innerHTML = `
      <div class="relative image-zoom-parent h-72 bg-slate-950 flex items-center justify-center cursor-pointer" onclick="window.location.href='product.html?id=${p.id}'">
        <img src="${p.images[0]}" alt="${p.name}" class="image-zoom-child w-full h-full object-cover">
        <span class="absolute top-4 left-4 glass-panel text-[9px] text-luxury-gold font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-luxury-gold/20">
          ${p.category === 'glassware' ? '🎨 Glassware' : '💎 Resin Art'}
        </span>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center text-luxury-gold/80 text-xs">
            ${Array(5).fill('<i class="fas fa-star text-[9px]"></i>').join('')}
            <span class="text-slate-500 ml-1">(${p.reviews})</span>
          </div>
          <span class="text-sm font-bold font-serif text-luxury-gold">From €${p.price.toFixed(2)}</span>
        </div>
        <h3 class="text-sm font-serif font-bold text-slate-100 hover:text-luxury-gold cursor-pointer transition-colors mb-2 line-clamp-1" onclick="window.location.href='product.html?id=${p.id}'">
          ${p.name}
        </h3>
        <p class="text-slate-400 text-[11px] mb-5 flex-grow line-clamp-2 leading-relaxed">
          ${p.description}
        </p>
        <div class="grid grid-cols-2 gap-3 mt-auto">
          <a href="product.html?id=${p.id}" class="btn-luxury-outline py-2.5 text-center rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center">
            View Details
          </a>
          <button onclick="addItemToCart('${p.id}', '${p.pricingOptions[0].name}', ${p.pricingOptions[0].price}, '${p.images[0]}', 1)" class="btn-luxury py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
            <i class="fas fa-shopping-bag text-[10px]"></i> Add
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}


// ================= PRODUCT DETAIL PAGE LOGIC =================
let selectedOption = null;

function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    document.getElementById('product-detail-view').innerHTML = `
      <div class="max-w-4xl mx-auto py-24 text-center glass-panel rounded-3xl border border-white/5 px-6">
        <i class="fas fa-exclamation-triangle text-3xl text-luxury-gold mb-4 block"></i>
        <h2 class="font-serif font-bold text-xl text-slate-200">Product Not Found</h2>
        <p class="text-xs text-slate-500 mt-2">The product listing you are looking for does not exist or has been removed.</p>
        <a href="shop.html" class="btn-luxury mt-8 py-3 px-8 rounded-xl text-xs uppercase tracking-wider inline-block">Return to Shop</a>
      </div>
    `;
    return;
  }
  
  // Set breadcrumbs & title
  document.title = `${product.name} | TSO Collectives`;
  const breadcrumbName = document.getElementById('crumb-product-name');
  if (breadcrumbName) breadcrumbName.textContent = product.name;
  
  // Render Product Layout
  renderProductDetail(product);
  renderRelatedProducts(product);
}

function renderProductDetail(p) {
  // 1. Gallery Setup
  const mainDisplay = document.getElementById('main-media-display');
  const thumbStrip = document.getElementById('thumbnail-strip');
  
  if (mainDisplay && thumbStrip) {
    // Primary display starts with first image
    setMediaDisplay(mainDisplay, p.images[0], 'image');
    
    // Build thumbnails
    thumbStrip.innerHTML = '';
    
    // Add images
    p.images.forEach((img, idx) => {
      const btn = document.createElement('button');
      btn.className = `w-20 h-24 rounded-lg overflow-hidden border ${idx === 0 ? 'border-luxury-gold' : 'border-white/5'} bg-slate-950 flex-shrink-0 transition-colors`;
      btn.innerHTML = `<img src="${img}" alt="Thumbnail ${idx+1}" class="w-full h-full object-cover">`;
      btn.addEventListener('click', () => {
        // Remove active class from all
        thumbStrip.querySelectorAll('button').forEach(b => b.classList.remove('border-luxury-gold'));
        btn.classList.add('border-luxury-gold');
        setMediaDisplay(mainDisplay, img, 'image');
      });
      thumbStrip.appendChild(btn);
    });
    
    // Add videos
    if (p.videos && p.videos.length > 0) {
      p.videos.forEach((vid, idx) => {
        const btn = document.createElement('button');
        btn.className = `w-20 h-24 rounded-lg overflow-hidden border border-white/5 bg-slate-950 flex-shrink-0 flex items-center justify-center relative hover:border-luxury-gold/50 transition-colors`;
        btn.innerHTML = `
          <div class="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-luxury-gold">
            <i class="fas fa-play text-sm"></i>
          </div>
          <span class="text-[9px] uppercase tracking-wider text-slate-400 absolute bottom-1 font-semibold">Video</span>
        `;
        btn.addEventListener('click', () => {
          thumbStrip.querySelectorAll('button').forEach(b => b.classList.remove('border-luxury-gold'));
          btn.classList.add('border-luxury-gold');
          setMediaDisplay(mainDisplay, vid, 'video');
        });
        thumbStrip.appendChild(btn);
      });
    }
  }
  
  // 2. Headings & Details text
  document.getElementById('product-title').textContent = p.name;
  document.getElementById('product-reviews-count').textContent = `(${p.reviews} customer reviews)`;
  document.getElementById('product-desc').textContent = p.description;
  document.getElementById('product-care-info').textContent = p.care;
  document.getElementById('product-shipping-info').textContent = p.shipping;
  
  // 3. Pricing options radios
  const optionsGrid = document.getElementById('pricing-options-container');
  const priceDisplay = document.getElementById('product-price-display');
  
  if (optionsGrid && priceDisplay) {
    optionsGrid.innerHTML = '';
    // Select first option by default
    selectedOption = p.pricingOptions[0];
    priceDisplay.textContent = `€${selectedOption.price.toFixed(2)}`;
    
    p.pricingOptions.forEach((opt, idx) => {
      const label = document.createElement('label');
      label.className = `flex items-center justify-between p-4 rounded-xl border ${idx === 0 ? 'border-luxury-gold bg-luxury-gold/5' : 'border-white/5 bg-slate-900/20'} cursor-pointer hover:border-luxury-gold/50 transition-all duration-300`;
      label.innerHTML = `
        <div class="flex items-center gap-3">
          <input type="radio" name="pricing-option" value="${idx}" ${idx === 0 ? 'checked' : ''} class="custom-radio w-4 h-4 text-luxury-gold accent-luxury-gold bg-slate-950 border-slate-700">
          <div class="flex flex-col">
            <span class="text-xs font-semibold text-slate-200 leading-tight">${opt.name}</span>
          </div>
        </div>
        <span class="text-sm font-serif font-bold text-luxury-gold">€${opt.price.toFixed(2)}</span>
      `;
      
      const input = label.querySelector('input');
      input.addEventListener('change', () => {
        optionsGrid.querySelectorAll('label').forEach(l => {
          l.className = 'flex items-center justify-between p-4 rounded-xl border border-white/5 bg-slate-900/20 cursor-pointer hover:border-luxury-gold/50 transition-all duration-300';
        });
        label.className = 'flex items-center justify-between p-4 rounded-xl border border-luxury-gold bg-luxury-gold/5 cursor-pointer hover:border-luxury-gold/50 transition-all duration-300';
        
        selectedOption = p.pricingOptions[idx];
        priceDisplay.textContent = `€${selectedOption.price.toFixed(2)}`;
      });
      optionsGrid.appendChild(label);
    });
  }
  
  // 4. Specifications table
  const specsTable = document.getElementById('specifications-table-body');
  if (specsTable) {
    specsTable.innerHTML = '';
    Object.entries(p.specifications).forEach(([key, val]) => {
      const row = document.createElement('tr');
      row.className = 'border-b border-slate-900/60 text-xs';
      row.innerHTML = `
        <td class="py-3.5 pr-4 font-semibold text-slate-400 uppercase tracking-wider w-1/3">${key}</td>
        <td class="py-3.5 text-slate-200">${val}</td>
      `;
      specsTable.appendChild(row);
    });
  }
  
  // 5. Quantity selector details
  const qtyInput = document.getElementById('qty-input');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  
  if (qtyInput && qtyMinus && qtyPlus) {
    qtyMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) {
        qtyInput.value = val - 1;
      }
    });
    qtyPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value) || 1;
      qtyInput.value = val + 1;
    });
  }
  
  // 6. Add to Bag button
  const addBtn = document.getElementById('add-to-bag-btn');
  if (addBtn) {
    // Clone to remove previous event listeners
    const newAddBtn = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newAddBtn, addBtn);
    
    newAddBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput.value) || 1;
      addItemToCart(p.id, selectedOption.name, selectedOption.price, p.images[0], qty);
    });
  }
}

function setMediaDisplay(container, src, type) {
  container.innerHTML = '';
  if (type === 'video') {
    container.innerHTML = `
      <video class="w-full h-full object-contain rounded-2xl bg-slate-950" controls autoplay muted>
        <source src="${src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    container.innerHTML = `
      <img src="${src}" alt="Product image detail" class="w-full h-full object-contain rounded-2xl">
    `;
  }
}

function renderRelatedProducts(currP) {
  const grid = document.getElementById('related-grid');
  if (!grid) return;
  
  // Find other products in same category
  const related = PRODUCTS.filter(p => p.category === currP.category && p.id !== currP.id).slice(0, 3);
  
  // If empty, just show other items
  if (related.length === 0) {
    related.push(...PRODUCTS.filter(p => p.id !== currP.id).slice(0, 3));
  }
  
  grid.innerHTML = '';
  related.forEach(p => {
    const card = document.createElement('div');
    card.className = 'glass-panel rounded-xl overflow-hidden border border-white/5 hover:border-luxury-gold/30 transition-all duration-300 flex flex-col h-full';
    card.innerHTML = `
      <div class="h-44 overflow-hidden bg-slate-950 cursor-pointer" onclick="window.location.href='product.html?id=${p.id}'">
        <img src="${p.images[0]}" alt="${p.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <h4 class="text-xs font-serif font-bold text-slate-200 line-clamp-1 hover:text-luxury-gold cursor-pointer" onclick="window.location.href='product.html?id=${p.id}'">
          ${p.name}
        </h4>
        <div class="flex items-center justify-between mt-2 pt-2 border-t border-slate-900/60">
          <span class="text-[10px] text-slate-500 capitalize">${p.category}</span>
          <span class="text-xs font-bold text-luxury-gold">From €${p.price.toFixed(2)}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}


// ================= CART PAGE LOGIC =================
function initCartPage() {
  renderCartPage();
  setupCheckoutForm();
}

function renderCartPage() {
  const itemsContainer = document.getElementById('cart-page-items');
  const summaryContainer = document.getElementById('cart-page-summary');
  
  if (!itemsContainer) return;
  
  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-20 text-center glass-panel rounded-3xl border border-white/5">
        <i class="fas fa-shopping-bag text-4xl text-luxury-gold/30 mb-4 block"></i>
        <h2 class="font-serif font-bold text-xl text-slate-300">Your shopping cart is empty</h2>
        <p class="text-xs text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">Fill it with hand-painted crystal glassware or botanical jewelry to continue your checkout.</p>
        <a href="shop.html" class="btn-luxury mt-8 py-3 px-8 rounded-xl text-xs uppercase tracking-wider inline-block">Explore Collections</a>
      </div>
    `;
    if (summaryContainer) {
      summaryContainer.innerHTML = `
        <div class="glass-panel p-6 rounded-2xl border border-white/5 text-center text-slate-500 text-xs">
          Order Summary will appear once items are added.
        </div>
      `;
    }
    // Disable form fields
    const formInputs = document.querySelectorAll('#checkout-info-form input, #checkout-info-form select, #checkout-info-form button');
    formInputs.forEach(el => el.setAttribute('disabled', 'true'));
    return;
  }
  
  // Enable form inputs
  const formInputs = document.querySelectorAll('#checkout-info-form input, #checkout-info-form select, #checkout-info-form button');
  formInputs.forEach(el => el.removeAttribute('disabled'));
  
  // Render Cart Table
  itemsContainer.innerHTML = '';
  let subtotal = 0;
  
  cart.forEach((item, index) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'glass-panel p-4 md:p-6 rounded-2xl border border-white/5 flex gap-4 md:gap-6 items-center justify-between';
    itemCard.innerHTML = `
      <div class="flex gap-4 items-center flex-grow">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-20 md:w-20 md:h-24 object-cover rounded-xl bg-slate-950 border border-white/5">
        <div class="flex flex-col">
          <h3 class="text-sm font-serif font-bold text-slate-100 line-clamp-1">${item.name}</h3>
          <p class="text-[10px] text-slate-400 mt-0.5 italic line-clamp-1">${item.option}</p>
          <span class="text-xs text-luxury-gold font-bold mt-2">€${item.price.toFixed(2)}</span>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-end md:items-center gap-4 justify-between min-w-[120px]">
        <div class="flex items-center border border-slate-800 rounded-lg overflow-hidden bg-slate-950">
          <button onclick="updateCartItemQty(${index}, -1)" class="px-2.5 py-1 hover:bg-slate-900 text-slate-400 text-xs transition-colors">-</button>
          <span class="px-2.5 text-xs text-slate-200 font-medium">${item.quantity}</span>
          <button onclick="updateCartItemQty(${index}, 1)" class="px-2.5 py-1 hover:bg-slate-900 text-slate-400 text-xs transition-colors">+</button>
        </div>
        <div class="text-right flex flex-col justify-center items-end">
          <span class="text-sm font-serif font-bold text-slate-200 mb-1">€${(item.price * item.quantity).toFixed(2)}</span>
          <button onclick="removeCartItem(${index})" class="text-slate-500 hover:text-red-400 text-[10px] uppercase font-semibold transition-colors">Delete</button>
        </div>
      </div>
    `;
    itemsContainer.appendChild(itemCard);
    subtotal += item.price * item.quantity;
  });
  
  // Render Summary Box
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="glass-panel p-6 rounded-2xl border border-white/5 bg-[#090D15]/40 space-y-4">
        <h3 class="text-base font-serif font-bold text-slate-200 border-b border-slate-900 pb-3">Subtotal Summary</h3>
        <div class="flex justify-between text-xs text-slate-400">
          <span>Items Total</span>
          <span class="text-slate-200 font-medium">€${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between text-xs text-slate-400">
          <span>Shipping fee</span>
          <span class="text-slate-200 font-medium">Included / Calculated</span>
        </div>
        <div class="border-t border-slate-900 pt-4 flex justify-between items-center">
          <span class="text-xs font-bold text-slate-300 uppercase tracking-wider">Estimated Total</span>
          <span class="text-xl font-serif font-bold text-luxury-gold">€${subtotal.toFixed(2)}</span>
        </div>
        <div class="p-3 bg-luxury-gold/5 border border-luxury-gold/10 rounded-xl text-[10px] text-slate-400 leading-relaxed flex gap-2">
          <i class="fas fa-info-circle text-luxury-gold text-sm flex-shrink-0 mt-0.5"></i>
          <span>Since each creation takes hours of microscopic hand-painting, your slots are highly limited. Complete checkout to send your reservation request to the studio directly.</span>
        </div>
      </div>
    `;
  }
}

function setupCheckoutForm() {
  const form = document.getElementById('checkout-info-form');
  const deliverySelect = document.getElementById('chk-delivery-opt');
  const addressContainer = document.getElementById('shipping-address-container');
  const addressInput = document.getElementById('chk-address');
  
  if (!form) return;
  
  // Show/Hide Address Field based on shipping selection
  if (deliverySelect && addressContainer && addressInput) {
    deliverySelect.addEventListener('change', (e) => {
      if (e.target.value === 'collection') {
        addressContainer.classList.add('hidden');
        addressInput.removeAttribute('required');
      } else {
        addressContainer.classList.remove('hidden');
        addressInput.setAttribute('required', 'true');
      }
    });
  }
  
  // Order via WhatsApp Action
  const waBtn = document.getElementById('order-whatsapp-btn');
  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateCheckoutForm()) {
        const orderMsg = compileOrderMessage();
        const encodedMsg = encodeURIComponent(orderMsg);
        // Dispatch to WhatsApp Web/App (opens send text prompt)
        window.open(`https://api.whatsapp.com/send?text=${encodedMsg}`, '_blank');
      }
    });
  }
  
  // Order via Email Action
  const emailBtn = document.getElementById('order-email-btn');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateCheckoutForm()) {
        const orderMsg = compileOrderMessage();
        const subject = encodeURIComponent('New Order Request - TSO Collectives');
        const body = encodeURIComponent(orderMsg);
        window.open(`mailto:tsocollectivess@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }
    });
  }
  
  // Copy Order Summary
  const copyBtn = document.getElementById('order-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateCheckoutForm()) {
        const orderMsg = compileOrderMessage();
        navigator.clipboard.writeText(orderMsg).then(() => {
          showToast('Order details copied to clipboard!');
        }).catch(err => {
          showToast('Failed to copy order details.');
        });
      }
    });
  }
}

function validateCheckoutForm() {
  const form = document.getElementById('checkout-info-form');
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }
  return true;
}

function compileOrderMessage() {
  const name = document.getElementById('chk-name').value;
  const email = document.getElementById('chk-email').value;
  const phone = document.getElementById('chk-phone').value;
  const delivery = document.getElementById('chk-delivery-opt').value;
  const address = document.getElementById('chk-address') ? document.getElementById('chk-address').value : '';
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  let msg = `Hello TSO Collectives ✨,\n\nI would like to place an order for the following custom handcrafted items:\n\n`;
  
  msg += `------------------------------------------\n`;
  msg += `🛒 ORDER DETAILS:\n`;
  msg += `------------------------------------------\n`;
  
  cart.forEach((item, index) => {
    msg += `${index + 1}. ${item.name}\n`;
    msg += `   - Option: ${item.option}\n`;
    msg += `   - Quantity: ${item.quantity}\n`;
    msg += `   - Price: €${item.price.toFixed(2)} each\n`;
    msg += `   - Subtotal: €${(item.price * item.quantity).toFixed(2)}\n\n`;
  });
  
  msg += `------------------------------------------\n`;
  msg += `💰 TOTAL AMOUNT: €${subtotal.toFixed(2)}\n`;
  msg += `------------------------------------------\n\n`;
  
  msg += `👤 CUSTOMER INFO:\n`;
  msg += `   - Name: ${name}\n`;
  msg += `   - Email: ${email}\n`;
  msg += `   - Phone: ${phone}\n`;
  msg += `   - Delivery Method: ${delivery === 'collection' ? 'Collection (Limerick, Ireland)' : 'Tracked Post (Ireland / International)'}\n`;
  
  if (delivery !== 'collection' && address) {
    msg += `   - Shipping Address: ${address}\n`;
  }
  
  msg += `\nThank you! Looking forward to your confirmation. 💌`;
  
  return msg;
}
