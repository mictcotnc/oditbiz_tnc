// Script to toggle visibility of the terms and privacy policy sections
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling; // Get the content div
      if (content.style.display === "block") {
        content.style.display = "none"; // Hide content
        button.textContent = button.textContent.replace("Hide", "Read"); // Change button text
      } else {
        content.style.display = "block"; // Show content
        button.textContent = button.textContent.replace("Read", "Hide"); // Change button text
      }
    });
  });
});
