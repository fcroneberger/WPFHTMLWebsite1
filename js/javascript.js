const header = document.getElementById("header");
const sticky = header.offsetTop;

function onScroll() {

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function toggleNav() {
    header.classList.toggle("responsive");
}

window.onscroll = function() {onScroll()};