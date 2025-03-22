document.addEventListener("DOMContentLoaded", () => {
    console.log("MONO Ultra AI Loaded");

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Interactive Button Effects
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.transform = "scale(1.1)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });
});
