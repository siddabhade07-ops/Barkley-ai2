const form = document.getElementById("triageForm");
const output = document.getElementById("output");
const result = document.getElementById("result");
const image = document.getElementById("image");
const preview = document.getElementById("preview");

// Show image preview
image.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

// Analyze symptoms
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const symptoms = document.getElementById("symptoms").value.toLowerCase();

    let message = "";
    let color = "";

    if (
        symptoms.includes("difficulty breathing") ||
        symptoms.includes("seizure") ||
        symptoms.includes("collapse") ||
        symptoms.includes("unconscious")
    ) {
        message = "🔴 RED: Seek immediate veterinary care.";
        color = "#ffe5e5";
    } else if (
        symptoms.includes("vomiting") ||
        symptoms.includes("diarrhea") ||
        symptoms.includes("limping") ||
        symptoms.includes("loss of appetite")
    ) {
        message = "🟡 YELLOW: Schedule a veterinary visit soon.";
        color = "#fff8d6";
    } else {
        message = "🟢 GREEN: Monitor your pet. Seek veterinary advice if symptoms worsen.";
        color = "#e8f8e8";
    }

    result.style.backgroundColor = color;

    output.innerHTML = `
        <strong>${message}</strong><br><br>
        <em>This guidance is educational only and is not a veterinary diagnosis.</em>
    `;
});