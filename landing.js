


function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
}

// Function to fetch username from cookies
function getCookieValue(cookieName) {
  const allCookies = document.cookie.split(';');
  for (let i = 0; i < allCookies.length; i++) {
    const currentCookie = allCookies[i].trim();
    if (currentCookie.startsWith(cookieName + '=')) {
      return currentCookie.substring(cookieName.length + 1);
    }
  }
  return null;
}

function getAlphabets(str) {
  return str.match(/[a-zA-Z\s]+/g).join(''); // Extracts only alphabet characters
}
// Set username from cookie in the welcome message
function displayUsername() {
  let username = getCookieValue("username") || "Guest";
  username = decodeURIComponent(username);
  username = getAlphabets(username); // Ensures it only displays alphabetic characters

  document.getElementById("profileDropdown").textContent = username; // Update profile text
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function logout() {
  deleteCookie("username");
  deleteCookie("emails");
  deleteCookie("passwords");
  deleteCookie("isLogin");
  window.location.href = "./login.html"; // Redirect to the login page after logout
}

// Carousel slider functionality
let currentIndex = 0;
const images = document.getElementById('carouselImages');
const totalImages = images.children.length;

function slideCarousel() {
  currentIndex = (currentIndex + 1) % totalImages;
  images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideCarousel, 3000); // Slide every 3 seconds

// Call displayUsername when the page loads
window.onload = displayUsername(); // Ensure username is displayed on page load