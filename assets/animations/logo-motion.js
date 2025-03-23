export function moveLogo() {
    let logo = document.getElementById("logo-container");
    logo.style.transition = "transform 1s ease-in-out";
    logo.style.transform = "translateY(-100px)";
}
