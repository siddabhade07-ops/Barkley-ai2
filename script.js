const form = document.getElementById("triageForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const symptoms = document.getElementById("symptoms").value.toLowerCase();

    let result = "";

    if (
        symptoms.includes("difficulty breathing") ||
        symptoms.includes("seizure") ||
        symptoms.includes("collapse") ||
        symptoms.includes("unconscious")
    ) {
        result = "🔴 RED: Seek immediate veterinary care.";
    } else if (
        symptoms.includes("vomiting") ||
        symptoms.includes("diarrhea") ||
        symptoms.includes("limping") ||
        symptoms.includes("loss of appetite")
    ) {
        result = "🟡 YELLOW: Schedule a veterinary visit soon.";
    } else {
        result = "🟢 GREEN: Monitor your pet. Seek veterinary advice if symptoms worsen.";
    }

    output.innerHTML = `
        <strong>${result}</strong><br><br>
        <em>This guidance is educational only and is not a veterinary diagnosis.</em>
    `;
});