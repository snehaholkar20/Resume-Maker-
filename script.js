
// Select all inputs
const inputName = document.getElementById('input-name');
const inputTitle = document.getElementById('input-job');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputAddress = document.getElementById('input-address');
const inputLinkedin = document.getElementById('input-linkedin');
const inputGithub = document.getElementById('input-github');
const inputCertifications = document.getElementById('input-certifications');
const inputProfile = document.getElementById('input-Profile');
const inputSkills = document.getElementById('input-skills');
const inputExperience = document.getElementById('input-experience');
const inputEducation = document.getElementById('input-education');
const inputProjects = document.getElementById('input-projects');

// Select all preview elements
const previewName = document.getElementById('preview-name');
const previewTitle = document.getElementById('preview-job');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewAddress = document.getElementById('preview-address');
const previewLinkedin = document.getElementById('preview-linkedin');
const previewGithub = document.getElementById('preview-github');
const previewCertifications = document.getElementById('preview-certifications');
const previewProfile = document.getElementById('preview-profile');
const previewSkills = document.getElementById('preview-skills');
const previewExperience = document.getElementById('preview-experience');
const previewEducation = document.getElementById('preview-education');
const previewProjects = document.getElementById('preview-projects');

// Add Event Listeners
inputName.addEventListener('input', () => {
    previewName.innerText = inputName.value || "Your Name";
});

inputTitle.addEventListener('input', () => {
    previewTitle.innerText = inputTitle.value || "Your Job Title";
});

inputEmail.addEventListener('input', () => {
    previewEmail.innerText = inputEmail.value || "Your Email";
});

inputPhone.addEventListener('input', () => {
    previewPhone.innerText = inputPhone.value || "Your Phone Number";
});

inputAddress.addEventListener('input', () => {
    previewAddress.innerText = inputAddress.value || "Your Address";
});

inputLinkedin.addEventListener('input', () => {
    previewLinkedin.innerText = inputLinkedin.value || "Your LinkedIn";
});

inputGithub.addEventListener('input', () => {
    previewGithub.innerText = inputGithub.value || "Your GitHub";
});

inputCertifications.addEventListener('input', () => {
    previewCertifications.innerText = inputCertifications.value || "Your Certifications";
});

inputProfile.addEventListener('input', () => {
    previewProfile.innerText = inputProfile.value || "Your Profile Summary";
});

inputSkills.addEventListener('input', () => {
    previewSkills.innerText = inputSkills.value || "Your Skills";
});

inputExperience.addEventListener('input', () => {
    previewExperience.innerText = inputExperience.value || "Your Work Experience";
});

inputEducation.addEventListener('input', () => {
    previewEducation.innerText = inputEducation.value || "Your Education";
});

inputProjects.addEventListener('input', () => {
    previewProjects.innerText = inputProjects.value || "Your Projects";
});

// Download PDF Logic
const downloadBtn = document.getElementById('download-btn');
const resumePreview = document.getElementById('resume-paper');

downloadBtn.addEventListener('click', () => {
    const opt = {
        margin: 0.5,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(resumePreview).save();
});