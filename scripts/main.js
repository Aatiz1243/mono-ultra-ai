document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const heroSection = document.getElementById("hero");
    const mainLogo = document.getElementById("main-logo");
    const exploreDown = document.getElementById("explore-down");
    const navbar = document.getElementById("navbar");
    const navbarLogo = document.getElementById("navbar-logo");
    const backgroundVideo = document.getElementById("background-video-container");

    // Remove loading screen when fully loaded
    window.onload = function() {
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 1000);
    };

    // Logo Motion Path
    exploreDown.addEventListener("click", function() {
        mainLogo.style.transform = "scale(1.5)";
        setTimeout(() => {
            mainLogo.style.transform = "scale(0.6) translateY(-100px)";
        }, 800);
        
        setTimeout(() => {
            navbar.style.transform = "translateY(0)";
            navbarLogo.style.transform = "scale(1)";
            backgroundVideo.style.opacity = "1";
        }, 1500);
    });
});
