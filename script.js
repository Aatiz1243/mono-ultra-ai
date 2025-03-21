// Scroll Blur Effect
window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".navbar");
    let scrollPos = window.scrollY;
    
    if (scrollPos > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.85)";
        navbar.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.6)";
        navbar.style.boxShadow = "none";
    }
});

// Glitch Hover Effect
document.querySelector(".glitch-text").addEventListener("mouseover", (e) => {
    e.target.style.animation = "none";
    setTimeout(() => {
        e.target.style.animation = "glitch 1s infinite";
    }, 200);
});

// Secret GOD MODE Easter Egg (Press "G" Key)
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "g") {
        document.body.style.background = "linear-gradient(135deg, #ff0000, #000)";
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:20%;'>⚡ GOD MODE ACTIVATED ⚡</h1>";
    }
});
