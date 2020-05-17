function openHack() {
    document.getElementById("hackContainer").style.display = "table";
    window.dispatchEvent(new Event('resize'));
}

function closeHack() {
    document.getElementById("hackContainer").style.display = "none";
}