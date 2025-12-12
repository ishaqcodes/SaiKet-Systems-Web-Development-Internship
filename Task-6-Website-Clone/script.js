document.addEventListener("DOMContentLoaded", () => {
  // --- FEATURE 1: BACK TO TOP BUTTON ---
  const backToTop = document.getElementById("back-to-top");
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // --- FEATURE 2: CART COUNTER ---
  const cartBox = document.getElementById("cart-box");
  const cartCountSpan = document.getElementById("cart-count");
  let count = 0;

  cartBox.addEventListener("click", () => {
    count++;
    cartCountSpan.innerText = count;
    alert("Item added to cart! Total items: " + count);
  });

  // --- FEATURE 3: HERO SLIDER (Background Changer) ---
  const heroSection = document.getElementById("hero");
  // Since images might not work without files, I am using online placeholders
  // You can replace these URLs with your local ./Images/hero1.jpg etc.
  const images = [
    "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop')", // Shopping 1
    "url('https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop')", // Shopping 2
    "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop')", // Tech
  ];

  let currentImg = 0;

  function changeHeroImage() {
    currentImg = (currentImg + 1) % images.length;
    heroSection.style.backgroundImage = images[currentImg];
  }

  // Har 3 second mein image badlegi
  setInterval(changeHeroImage, 3000);

  // --- FEATURE 4: LOCATION CHANGER ---
  const locationBox = document.getElementById("location-box");
  const locationText = document.getElementById("location-text");

  locationBox.addEventListener("click", () => {
    let pincode = prompt("Enter your Pincode/City to check delivery:");
    if (pincode && pincode.trim() !== "") {
      locationText.innerText = pincode;
      alert(`Delivery location updated to: ${pincode}`);
    }
  });

  // --- FEATURE 5: SEARCH FUNCTION ---
  const searchButton = document.querySelector(".search-icon");
  const searchInput = document.querySelector(".search-input");

  function performSearch() {
    const query = searchInput.value;
    if (query) {
      alert(`Searching for: ${query}`);
    } else {
      alert("Please enter a product name to search.");
    }
  }

  searchButton.addEventListener("click", performSearch);

  // Enter key support for search
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });
});
