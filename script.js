function menuToggle() {
    var x = document.getElementById("menus");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}