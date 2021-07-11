setTimeout(showNewsletterModal, 5000);

const modal = document.getElementById("newsletter-modal");
const closeButton = document.getElementsByClassName("newsletter-close-button")[0];
const submitButton = document.getElementsByClassName("newsletter-submit")[0];
const alert = document.getElementsByClassName("alert")[0];

closeButton.onclick = function() {
    hideNewsletterModal();
}

submitButton.onclick = function() {
    hideNewsletterModal();
    toggleAlert();
    setTimeout(disableAlert, 10000);
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function hideNewsletterModal() {
    modal.style.display = "none";
}

function showNewsletterModal() {
    modal.style.display = "block";
}

function toggleAlert() {
    alert.classList.toggle("hide");
}

function disableAlert() {
    alert.classList.add("hide");
}