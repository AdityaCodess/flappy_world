
// Map pages to content
const pageContent = {
    "index": "<h1>Welcome to Flappy World</h1><p>Enjoy the game!</p>",
    "android-instructions": "<h1>Android Instructions</h1><p>How to download and install on Android.</p>",
    "ios_unavail": "<h1>iOS Version Unavailable</h1><p>Currently, the iOS version is unavailable.</p>",
    "download": "<h1>Download Flappy World</h1><p>Choose your platform to download.</p>"
};

// Function to navigate between pages
function navigateTo(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pageContent[page] || "<h1>Page Not Found</h1>";
}

// Optional: Highlight active button (for styling)
function setActiveButton(button) {
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// Use `navigateTo` for initial load if needed
window.onload = () => {
    navigateTo('index');  // Load home page by default
};
