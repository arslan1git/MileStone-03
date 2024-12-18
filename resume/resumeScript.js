"use strict";
let myName = localStorage.getItem("name");
window.addEventListener("load", () => {
    let surname = localStorage.getItem("job-title");
    let profilePhoto = localStorage.getItem("profilePhoto");
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone");
    let profileSummary = localStorage.getItem("profileSummary");
    let Institution1 = localStorage.getItem("Institution1");
    let degree1 = localStorage.getItem("degree1");
    let Institution2 = localStorage.getItem("Institution2");
    let degree2 = localStorage.getItem("degree2");
    let company1 = localStorage.getItem("company1");
    let position1 = localStorage.getItem("position1");
    let experienceDates1 = localStorage.getItem("experienceDates1");
    let company2 = localStorage.getItem("company2");
    let position2 = localStorage.getItem("position2");
    let experienceDates2 = localStorage.getItem("experienceDates2");
    let certification1 = localStorage.getItem("certification1");
    let certification2 = localStorage.getItem("certification2");
    let certification3 = localStorage.getItem("certification3");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let resumeName = document.getElementById("resume-name");
    resumeName.textContent = myName;
    let surName = document.getElementById("job-title");
    surName.textContent = surname;
    let description = document.getElementById("resume-profile-description");
    description.textContent = profileSummary;
    let telephone = document.getElementById("resume-phone");
    telephone.textContent = phone;
    let resumeEmail = document.getElementById("resume-email");
    resumeEmail.textContent = email;
    let profilePic = document.getElementById("resume-photo");
    profilePic.src = profilePhoto;
    let education1 = document.getElementById("Institution1");
    education1.textContent = Institution1;
    let degree01 = document.getElementById("degree1");
    degree01.textContent = degree1;
    let education2 = document.getElementById("Institution2");
    education2.textContent = Institution2;
    let degree02 = document.getElementById("degree2");
    degree02.textContent = degree2;
    let company01 = document.getElementById("company1");
    company01.textContent = company1;
    let position01 = document.getElementById("position1");
    position01.textContent = position1;
    let company02 = document.getElementById("company2");
    company02.textContent = company2;
    let position02 = document.getElementById("position2");
    position02.textContent = position2;
    let experienceDate01 = document.getElementById("experience-date1");
    experienceDate01.textContent = experienceDates1;
    let experienceDate02 = document.getElementById("experience-date2");
    experienceDate02.textContent = experienceDates2;
    let certification01 = document.getElementById("certification1");
    certification01.textContent = certification1;
    let certification02 = document.getElementById("certification2");
    certification02.textContent = certification2;
    let certification03 = document.getElementById("certification3");
    certification03.textContent = certification3;
    let skill01 = document.getElementById("resume-skill1");
    skill01.textContent = skill1;
    let skill02 = document.getElementById("resume-skill2");
    skill02.textContent = skill2;
    let skill03 = document.getElementById("resume-skill3");
    skill03.textContent = skill3;
    let skill04 = document.getElementById("resume-skill4");
    skill04.textContent = skill4;
});
// hide and show sections
let skill_section = document.getElementById("skills-section");
let skillsBtn = document.getElementById("skillsBtn");
skillsBtn?.addEventListener("click", () => {
    skill_section.classList.toggle("hide");
});
let experience_section = document.getElementById("experience-section");
let experienceBtn = document.getElementById("experienceBtn");
experienceBtn?.addEventListener("click", () => {
    experience_section.classList.toggle("hide");
});
let certification_section = document.getElementById("certifications-section");
let certificationBtn = document.getElementById("certificationBtn");
certificationBtn?.addEventListener("click", () => {
    certification_section.classList.toggle("hide");
});
let education_section = document.getElementById("education-section");
let educationBtn = document.getElementById("educationBtn");
educationBtn?.addEventListener("click", () => {
    education_section.classList.toggle("hide");
});
// print share and edit buttons
let printBtn = document.getElementById("print-btn");
printBtn.addEventListener("click", () => {
    window.print();
});
let editBtn = document.getElementById("edit-btn");
editBtn.addEventListener("click", () => {
    window.history.back();
});
let shareBtn = document.getElementById("share-btn");
let anchor = document.getElementById("anchor");
let username;
if (myName) {
    username = myName.toLowerCase().replace(/\s+/g, "-");
}
else {
    username = "user";
}
let resumeUrl = "http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl = `${resumeUrl}?/${username}`;
shareBtn.addEventListener("click", () => {
    anchor.setAttribute("href", uniqueUrl);
});
shareBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("URL copied to clipboard");
    });
});
