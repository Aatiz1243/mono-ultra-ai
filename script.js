document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 3000);
});

function startExperience() {
    document.getElementById("hero").style.display = "none";
    document.getElementById("navbar").style.top = "0";
}

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => document.getElementById("content").innerHTML = data);
}
