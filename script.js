document.addEventListener("DOMContentLoaded", function() {
    // Loading screen fade out
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 3000);

    // Explore Down Click Event
    document.getElementById("explore-down").addEventListener("click", function() {
        let navbar = document.getElementById("navbar");
        let logo = document.getElementById("logo-container");

        // Move logo to navbar
        logo.style.transform = "translate(-50%, -150px)";
        logo.style.opacity = "0";
        
        setTimeout(() => {
            navbar.style.top = "0px"; // Show navbar
        }, 800);

        setTimeout(() => {
            document.getElementById("background-video").style.opacity = "1"; // Show video
        }, 1200);
    });
});
