// Replace this with your own deployed Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwLQUZn7GPt52gnKkfgwVeXi1XPtZm9DXIO_I21hrG4969LhA6jNOH8Ev5kiazn8DuxJw/exec";

document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    childName: document.getElementById("childName").value.trim(),
    className: document.getElementById("className").value.trim(),
    parentName: document.getElementById("parentName").value.trim(),
    feedback: document.getElementById("feedback").value.trim(),
    suggestions: document.getElementById("suggestions").value.trim()
  };

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // no-cors avoids CORS errors for Apps Script
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    // Show success message
    document.querySelector(".success-msg").style.display = "block";
    document.querySelector(".error-msg").style.display = "none";

    // Reset form
    document.getElementById("feedbackForm").reset();
  } catch (error) {
    console.error("Error:", error);
    document.querySelector(".success-msg").style.display = "none";
    document.querySelector(".error-msg").style.display = "block";
  }
});
