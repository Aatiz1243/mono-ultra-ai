document.addEventListener("DOMContentLoaded", function() {
    const hero = document.getElementById("hero");
    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        hero.style.transition = "all 0.8s ease-out";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 300);
});
