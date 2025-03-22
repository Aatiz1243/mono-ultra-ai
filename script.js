document.addEventListener("DOMContentLoaded", function () {
    // 📌 Loading Screen Transition
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("logo").style.opacity = "1";
    }, 2000);

    // 🔽 Scroll Down Event
    document.getElementById("scroll-down").addEventListener("click", function () {
        document.getElementById("navbar").style.top = "0";
    });

    // 🎬 Smooth Scroll Effects
    window.addEventListener("scroll", function () {
        let nav = document.getElementById("navbar");
        if (window.scrollY > 100) {
            nav.style.top = "0";
        }
    });
});
