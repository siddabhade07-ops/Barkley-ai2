document.getElementById("triageForm").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("result").style.display="block";

document.getElementById("output").innerHTML=`
⚠️ This website provides educational triage guidance only.<br><br>

If your pet has:

🔴 Difficulty breathing<br>
🔴 Severe bleeding<br>
🔴 Seizures<br>
🔴 Collapse<br>
🔴 Known toxin ingestion

Please go to the nearest emergency veterinary hospital immediately.

Otherwise, arrange an appointment with your veterinarian for an examination.

This tool does NOT diagnose diseases.
`;

});