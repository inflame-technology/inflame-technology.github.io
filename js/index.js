document.addEventListener("DOMContentLoaded", function(e) {
    const todayDate = new Date();
    let copyright = document.getElementById("copyright");
    copyright.textContent = `${todayDate.getFullYear()} Inflame Technology | All rights reserved.`;
});

function redirect() {
    location.href="mailto:inflametecnologia@gmail.com";
}