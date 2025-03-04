// Scroll Progress Indicator
window.onscroll = function () {
    const scrollProgress = document.getElementById("scrollProgress");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressHeight = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = progressHeight + "%";

    // Show or hide the Back to Top button based on scroll position
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 300) { // Adjust the scroll threshold as needed
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Get the toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  darkModeToggle.textContent = '🌞'; // Change toggle icon/text
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDarkMode) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    darkModeToggle.textContent = '🌓'; // Change toggle icon/text
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkModeToggle.textContent = '🌞'; // Change toggle icon/text
  }
});