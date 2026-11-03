// 1. Availabel hexadecimal characters

const hexCharacters = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F"
];

// 2. Select HTML elements

const hexCodeDisplay = document.getElementById("hex-code");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

// 3. Helper function to generate a random 6-character hex color

function getRandomHexColor() {

    let hexColor = "#";

    // Run Loop 6 times to pick 6 characters

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacters.length);
        hexColor += hexCharacters[randomIndex];
    }

    return hexColor;
}

// 4. Click event to apply new color
generateBtn.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    
    // Change background and update text display
    document.body.style.backgroundColor = newColor;
    hexCodeDisplay.textContent = newColor;
});

// 5. Click event to copy to clipboard

copyBtn.addEventListener("click", () => {
    const codeToCopy = hexCodeDisplay.textContent;

    // Modern brower clipboard API
    navigator.clipboard.writeText(codeToCopy).then(() => {
        copyBtn.textContent = "Copied!";

        setTimeout(() => {
            copyBtn.textContent = "Copy Code";
        }, 1500);
    });
});