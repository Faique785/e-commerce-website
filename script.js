// Toggle navbar
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".navbar-links").classList.toggle("active");
});

// Toggle cart
function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

// Product data
const products = [
  { id: "1", name: "Smartphone", category: "Electronics", price: 12999, img: "https://fscl01.fonpit.de/userfiles/7687254/image/NextPit_Best_Camera_Phones_2023.jpg", description: "Latest Android smartphone with AMOLED display." },
  { id: "2", name: "Earbud", category: "Electronics", price: 1499, img: "https://tse2.mm.bing.net/th/id/OIP.EP_wNev5Tqaw4tVE5WLbWAHaHa", description: "Wireless earbuds with noise cancellation."},
  { id: "3", name: "Laptop", category: "Electronics", price: 45999, img: "https://img.freepik.com/premium-photo/gaming-three-laptops-high-performance-purposes-by-generative-ai_36244-2533.jpg", description: "Lightweight laptop with powerful performance." },
  { id: "4", name: "Smartwatch", category: "Wearables", price: 2999, img: "https://www.store.donshopping.com/wp-content/uploads/2020/02/6991-f1cc39.jpeg", description: "Fitness-focused smartwatch with long battery." },
  { id: "5", name: "T-shirt", category: "Clothing", price: 799, img: "https://tse1.mm.bing.net/th/id/OIP.DSjZPk9uy01_f2ox4Q5QPgAAAA", description: "Cotton t-shirt for casual wear." },
  { id: "6", name: "Bagpack", category: "Accessories", price: 999, img:"https://images.pexels.com/photos/2422476/pexels-photo-2422476.png", description: "Durable and water-resistant backpack." },
  { id: "7", name: "Bluetooth Speaker", category: "Electronics", price: 1799, img: "https://m.media-amazon.com/images/I/51YoEY9bhZL._SL500_.jpg", description: "Portable speaker with powerful bass." },
  { id: "8", name: "Gaming Mouse", category: "Electronics", price: 1399, img: "https://i.shgcdn.com/09f4114d-68ee-470a-b119-2aee078bef9e/-/format/auto/-/preview/3000x3000/-/quality/lighter/", description: "RGB gaming mouse with fast response time." },
  { id: "9", name: "Denim Jeans", category: "Clothing", price: 1099, img: "https://theyesno.com/wp-content/uploads/2024/04/denim1-1.jpeg", description: "Comfortable slim-fit denim jeans." },
  { id: "10", name: "Running Shoes", category: "Clothing", price: 2199, img: "https://www.productrankers.com/wp-content/uploads/2017/04/asics-running-shoes.jpg", description: "Breathable running shoes for daily wear." },
  { id: "11", name: "Laptop Stand", category: "Accessories", price: 499, img: "https://deskka.com/wp-content/uploads/2021/04/DE-03_IG_sc01_laptop_stand_walnut_black-2048x2048.jpg", description: "Ergonomic laptop stand for better posture." },
  { id: "12", name: "Fitness Band", category: "Wearables", price: 1899, img: "https://tse2.mm.bing.net/th/id/OIP.MrJC-kbVt8rKyLgacd3pnwHaEl?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", description: "Track your fitness and heart rate." },
  { id: "13", name: "Wireless Charger", category: "Electronics", price: 899, img: "https://i5.walmartimages.com/asr/29d16fab-2a96-4b16-8e48-8485b73f0d9a.fc3166491023029046854a8a347faba5.jpeg", description: "Fast wireless charging pad for all devices." },
  { id: "14", name: "USB-C Hub", category: "Accessories", price: 1299, img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9c9a626e-88ad-418e-ae66-4e7d0ad6b350.__CR0,0,970,600_PT0_SX970_V1___.jpg", description: "Multi-port USB-C adapter for laptops." },
  { id: "15", name: "Sports Watch", category: "Wearables", price: 2599, img: "https://images-na.ssl-images-amazon.com/images/I/6134%2B9I-2cL._AC_UL1001_.jpg", description: "Water-resistant sports watch with GPS." },
  { id: "16", name: "Graphic T-shirt", category: "Clothing", price: 699, img: "https://th.bing.com/th/id/R.9acef05a3e4fa7718d6a2a4351858317?rik=r%2bGIyE3X7e25uA&riu=http%3a%2f%2fi1.adis.ws%2fi%2ftruworths%2fprod3120277_1.jpeg&ehk=WU%2bbZCZebgi9fUsOmZIWFr04rlWXT5pzwLy8PMZ0TSc%3d&risl=&pid=ImgRaw&r=0", description: "Cool graphic print t-shirt." },
  { id: "17", name: "Office Bag", category: "Accessories", price: 1499, img: "https://tse2.mm.bing.net/th/id/OIP.PAQAei0iUGr1E5Kp5JyZtgHaHa?r=0&cb=thfc1&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3", description: "Stylish and spacious office bag." },
  { id: "18", name: "Tablet", category: "Electronics", price: 15999, img: "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large_wm_brw/public/article_images/2019/09/galaxy-tab-s6-1.jpg?itok=qqmGY_4R", description: "Large screen Android tablet with 4G." },
  { id: "19", name: "Neckband Earphones", category: "Electronics", price: 1299, img: "https://th.bing.com/th/id/R.d335db9d2c52d22cbe9f5d88fdfbc30c?rik=tZRDAncp71Xf6Q&riu=http%3a%2f%2fassets.klipsch.com%2fproduct-images%2fR6-Neckband-Neckband-1239.jpg&ehk=qL1go6fg6V9Yxyls%2bSSq0B9JY%2fLZqLFUYmfwfnwcmBI%3d&risl=1&pid=ImgRaw&r=0", description: "Comfortable wireless earphones." },
  { id: "20", name: "Hoodie", category: "Clothing", price: 1199, img: "https://i.pinimg.com/originals/73/ba/65/73ba6553da3f8b80c0d04a70d532bfb8.jpg", description: "Warm and cozy winter hoodie." },
  { id: "21", name: "Tripod Stand", category: "Accessories", price: 699, img: "https://images-cdn.ubuy.co.in/639c2dbfe0dedf7e2a556b75-tripod-60-inch-camera-tripod-stand.jpg", description: "Lightweight tripod for mobile and camera." },
  { id: "22", name: "Bluetooth Keyboard", category: "Electronics", price: 1099, img: "https://m.media-amazon.com/images/I/71A0jWS7IxL.jpg", description: "Slim wireless keyboard for tablets and laptops." },
  { id: "23", name: "Sling Bag", category: "Accessories", price: 849, img: "https://res.cloudinary.com/jawa/image/upload/f_auto,ar_1:1,c_fill,w_3840,q_auto/production/listings/ikzgzv50ke1myfvm3hli", description: "Compact sling bag for travel." },
  { id: "24", name: "Wireless Mouse", category: "Electronics", price: 599, img: "https://tse1.mm.bing.net/th/id/OIP.gxjXKmXb5YRLtp0fUSmoJQHaHa?r=0&cb=thfc1&w=811&h=811&rs=1&pid=ImgDetMain&o=7&rm=3", description: "Compact and smooth wireless mouse." },
  { id: "25", name: "Casual Shirt", category: "Clothing", price: 899, img: "https://blackberrys.com/cdn/shop/files/Textured_Casual_Shirt_In_White_Volt-USMU2061W1NS23SN-image1.jpg?v=1688540300", description: "Lightweight cotton casual shirt." },
  { id: "26", name: "Phone Case", category: "Accessories", price: 299, img: "https://i.etsystatic.com/36256497/r/il/cb42fd/5850682452/il_1080xN.5850682452_iwia.jpg", description: "Shockproof phone case with stylish design." },
  { id: "27", name: "Smart Bulb", category: "Electronics", price: 799, img: "https://img.staticdj.com/c87a4ae20f47461ad1ab290106db5932_1080x_nw.jpg", description: "Wi-Fi-enabled color changing bulb." },
  { id: "28", name: "Track Pants", category: "Clothing", price: 999, img: "https://tse4.mm.bing.net/th/id/OIP.1n7vE4B8ytXnbiUMvN7X0gHaJm?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", description: "Comfortable athletic track pants." },
  { id: "29", name: "LED Desk Lamp", category: "Accessories", price: 699, img: "https://www.auraglow.co.uk/pub/media/catalog/product/cache/c97319a176f100ff38168db5c7f45f43/f/o/folding_desk_lamp002.jpg", description: "Foldable LED lamp with adjustable brightness." },
  { id: "30", name: "Digital Camera", category: "Electronics", price: 17999, img: "https://photos.smugmug.com/CAMERAGEAR/Nikon-Z8-Gallery/i-dN5XnQJ/2/LbzsVxdxvDQZ67pTSzRdpMsHLNvgB5vM8gGc7VsqQ/XL/20230525-ZFC_2997-XL.jpg", description: "Compact digital camera with HD recording." },
  { id: "31", name: "Jacket", category: "Clothing", price: 2399, img: "https://canary.contestimg.wish.com/api/webimage/5b3244581e1ec9327f511756-large.jpg?cache_buster=07c05270ff0ed5e7eaacc65978611f26", description: "Windproof and warm winter jacket." },
  { id: "32", name: "Laptop Cooling Pad", category: "Accessories", price: 899, img: "https://m.media-amazon.com/images/I/81tXi4E4QRS._AC_SL1500_.jpg", description: "USB-powered cooling pad with dual fans." },
  { id: "33", name: "Analog Watch", category: "Wearables", price: 1299, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/j/j/1/1-srlz86p1-seiko-women-original-imagmhgsyy5tge4g.jpeg?q=70", description: "Classic analog wristwatch for men." },
  { id: "34", name: "Noise Cancelling Headphones", category: "Electronics", price: 3999, img: "https://img.freepik.com/premium-photo/smiling-person-listening-music-with-headphones_848918-3977.jpg", description: "Over-ear headphones with active noise cancellation." },
  { id: "35", name: "Socks (Pack of 5)", category: "Clothing", price: 499, img: "https://i.ebayimg.com/images/g/rMQAAOSwxqJi~VnQ/s-l1600.jpg", description: "Soft cotton socks for everyday use." },
  { id: "36", name: "Laptop Bag", category: "Accessories", price: 1299, img: "https://www.letscusto.com/cdn/shop/files/LaptopBag_PrussianBlue_533x.jpg?v=1733156249", description: "Water-resistant padded laptop bag." },
  { id: "37", name: "Smart Plug", category: "Electronics", price: 999, img: "https://tse4.mm.bing.net/th/id/OIP.fzMiOv4pqXYI3cfrlhry_QHaHa?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", description: "Wi-Fi enabled smart plug for appliances." },
  { id: "38", name: "Belt", category: "Accessories", price: 699, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/belt/c/w/b/36-obtcp-014041-obtcp-014041-casual-woodland-original-imagu5egrjppyk6f.jpeg?q=70", description: "Leather belt for casual/formal wear." },
  { id: "39", name: "Kurta", category: "Clothing", price: 1299, img: "https://i.etsystatic.com/20406834/r/il/b1b640/5533190872/il_794xN.5533190872_r0v4.jpg", description: "Traditional cotton kurta for festive occasions." },
  { id: "40", name: "Smart Glasses", category: "Wearables", price: 4999, img: "https://i.pinimg.com/originals/23/c9/80/23c980eda810b89fb84c80d20a67b292.jpg", description: "Smart glasses with audio and call support." }
];

let wishlist = [];
let cart = [];
let ratings = {}; // Store ratings as { productId: number }

// Display products
function displayProducts(items) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = items.length
    ? items.map(p => `
        <div class="product">
          <img src="${p.img}" alt="${p.name}" onclick="openProduct('${p.id}')"/>
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <div class="rating">${renderRating(p.id)}</div>
          <div class="product-actions">
            <button onclick="addToCart('${p.id}')">Add to Cart</button>
            <span class="wishlist" onclick="toggleWishlist('${p.id}')">🤍</span>
          </div>
        </div>
      `).join("")
    : `<p>No products found.</p>`;

  setTimeout(() => {
    items.forEach(p => {
      updateWishlistIcon(p.id);
      attachRatingListeners(p.id);
    });
  }, 0);
}

displayProducts(products);

document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
});

function filterCategory(cat) {
  const filtered = cat === "All" ? products : products.filter(p => p.category === cat);
  displayProducts(filtered);
}

document.getElementById("sort-select").addEventListener("change", (e) => {
  const value = e.target.value;
  let sorted = [...products];

  switch (value) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "rating-desc":
      sorted.sort((a, b) => (ratings[b.id] || 0) - (ratings[a.id] || 0));
      break;
  }

  displayProducts(sorted);
});
function applyPriceFilter() {
  const min = parseInt(document.getElementById("min-price").value) || 0;
  const max = parseInt(document.getElementById("max-price").value) || Infinity;

  const filtered = products.filter(p => p.price >= min && p.price <= max);
  displayProducts(filtered);
}

// Rating
function renderRating(id) {
  const current = ratings[id] || 0;
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<span class="star" data-id="${id}" data-rating="${i}">${i <= current ? "★" : "☆"}</span>`;
  }
  return stars;
}

function attachRatingListeners(id) {
  const stars = document.querySelectorAll(`.star[data-id="${id}"]`);
  stars.forEach(star => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.getAttribute("data-rating"));
      rateProduct(id, rating);
    });
  });
}

function rateProduct(id, rating) {
  ratings[id] = rating;
  displayProducts(products); // Rerender to update UI
}

// Wishlist
function toggleWishlist(id) {
  const index = wishlist.indexOf(id);
  if (index === -1) {
    wishlist.push(id);
    showToast("Added to wishlist!");
  } else {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist.");
  }
  updateWishlistIcon(id);
}

function updateWishlistIcon(id) {
  const icon = document.querySelector(`.wishlist[onclick="toggleWishlist('${id}')"]`);
  if (icon) icon.textContent = wishlist.includes(id) ? "❤️" : "🤍";
}

function openWishlist() {
  const modal = document.getElementById("wishlist-modal");
  const list = document.getElementById("wishlist-items");
  list.innerHTML = "";

  if (wishlist.length === 0) {
    list.innerHTML = "<li>No items in wishlist.</li>";
  } else {
    wishlist.forEach(id => {
      const product = products.find(p => p.id === id);
      list.innerHTML += `
        <li>
          ${product.name} - ₹${product.price}
          <button onclick="addToCart('${id}')">🛒</button>
          <button onclick="toggleWishlist('${id}')">❌</button>
        </li>
      `;
    });
  }

  modal.style.display = "block";
}

function closeWishlist() {
  document.getElementById("wishlist-modal").style.display = "none";
}

// Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  item ? item.qty++ : cart.push({ ...product, qty: 1 });
  updateCart();
  showToast("Added to cart");
}

function updateCart() {
  const items = document.getElementById("cart-items");
  const total = document.getElementById("total");
  let sum = 0;
  items.innerHTML = cart.map(item => {
    sum += item.price * item.qty;
    return `<li>${item.name} x${item.qty} <button onclick="removeItem('${item.id}')">X</button></li>`;
  }).join("");
  total.textContent = sum;
  document.getElementById("cart-count").textContent = cart.length;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// Product modal
function openProduct(id) {
  const product = products.find(p => p.id === id);
  const modal = document.getElementById("product-modal");
  document.getElementById("modal-content").innerHTML = `
    <span class="close" onclick="closeModal()">&times;</span>
    <img src="${product.img}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p>Price: ₹${product.price}</p>
    <p>Rating: ${renderRating(product.id)}</p>
    <button onclick="addToCart('${product.id}')">Add to Cart</button>
  `;
  modal.style.display = "flex";
  setTimeout(() => attachRatingListeners(product.id), 0);
}

function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

// Toast
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

// Login modal
document.getElementById("user-icon").addEventListener("click", () => {
  document.getElementById("user-modal").style.display = "flex";
});
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("user-modal").style.display = "none";
});

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
}

// Theme toggle
window.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
function startCountdown(duration) {
  let timeLeft = duration;
  const timerDisplay = document.getElementById("timer");

  const interval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (--timeLeft < 0) {
      clearInterval(interval);
      timerDisplay.textContent = "Offer Ended!";
      document.getElementById("deal-timer").style.backgroundColor = "#ccc";
    }
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  startCountdown(60 * 60); // 60 minutes countdown
});
