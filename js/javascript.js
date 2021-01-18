const header = document.getElementById("header");
const sticky = header.offsetTop;

window.onscroll = function() {onScroll()};

function onScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}