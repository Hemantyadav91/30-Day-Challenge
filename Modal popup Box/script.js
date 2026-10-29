// 1 .Grab HTML elements

const modalOverlay = document.getElementById("modal-overlay");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const confirmBtn = document.getElementById("confirm-btn");

// 2. Helper function to open and close

function openModel() {
    modalOverlay.classList.remove("hidden");
}

function closeModal() {
    modalOverlay.classList.add("hidden");
}


// 2. Open button click

openBtn.addEventListener("click", openModel);

// Close on 'X' button or 'Got It!' button
closeBtn.addEventListener("click", closeModal);
confirmBtn.addEventListener("click", closeModal);

// 5.Close when clicking the dark background outside the card

modalOverlay.addEventListener("click", (event) => {
    // event.target tells us which exact element was clicked

    if(event.target === modalOverlay) {
        closeModal();
    }
});

// 6. Close when passing the "Escape" key on the keyboard

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
        closeModal();
    }
});