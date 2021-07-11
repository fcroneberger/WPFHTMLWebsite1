const alert = document.getElementsByClassName("alert")[0];

function toggleAlert() {
    alert.classList.toggle("hide");
}

function disableAlert() {
    alert.classList.add("hide");
}