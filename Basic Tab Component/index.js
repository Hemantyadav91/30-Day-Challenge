// 1. Select all tab buttons and content panels
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// 2. Loop through each button
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Step A: Remove "active" from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // Step B: Remove "active" from all panels
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    // Step C: Activate the clicked button
    button.classList.add("active");

    // Step D: Find and activate the matching panel using data-target
    const targetId = button.getAttribute("data-target");
    const targetPanel = document.getElementById(targetId);
    
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});