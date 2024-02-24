// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

// Add Event Listener to Menu Button
menuBtn.addEventListener('click', toggleMenu);

// Function to Toggle Menu
function toggleMenu() {
    if (!showMenu) { // If the menu is not currently shown
        // Add classes to show the menu elements
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state to true
        showMenu = true;
    } else { // If the menu is currently shown
        // Remove classes to hide the menu elements
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set menu state to false
        showMenu = false;
    }
}
