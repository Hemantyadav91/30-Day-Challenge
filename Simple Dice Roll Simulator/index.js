// 1. Array of Unicode dice face (index 0 corresponds to 1, index 5 correc)

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// Dom Elements

const diceDisplay = document.getElementById("dice");
const rollBtn = document.getElementById("roll-btn");
const historyList = document.getElementById("history-list");

let rollCount = 0;

// 3. Roll Handler 

rollBtn.addEventListener("click", () => {
    // Add animation class and disable button temporarily

    diceDisplay.classList.add("rolling");
    rollBtn.disabled = true;

    // Wait 400ms for animation to finish

    setTimeout(() => {
        // Generate random number from 1 to 6
        const rollValue = Math.floor(Math.random() * 6) + 1;

        // Update dice symbol on screen
        diceDisplay.textContent = diceFaces[rollValue - 1];

        // Remove animation class and re-enable button
        diceDisplay.classList.remove("rolling");
        rollBtn.disabled = false;

        rollCount++;
        addHistoryItem(rollCount, rollValue);
    }, 400);
});


// Helper function to append roll history

function addHistoryItem(count, value) {
    const listItem = document.createElement("li");
    listItem.className = "history-item";
    listItem.innerHTML = `<span>Roll #${count}</span>
    <strong>${value} (${diceFaces[value - 1]})</strong>`;


    // Prepend to show latest roll on top

    historyList.prepend(listItem);
}

