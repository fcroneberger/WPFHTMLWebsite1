setTimeout(showNewsletterModal, 20000);


const modal = document.getElementById("newsletter-modal");
const closeButton = document.getElementsByClassName("newsletter-modal-close")[0];

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function showNewsletterModal() {
    modal.style.display = "block";
}

