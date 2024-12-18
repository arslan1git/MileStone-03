"use strict";
// Personal Section
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job-title");
const profilePhotoInput = document.getElementById("profile-photo");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const profileSummary = document.getElementById("profile");
// Education Section
const Institution1Input = document.getElementById("Institution1");
const degree1Input = document.getElementById("degree1");
const Institution2Input = document.getElementById("Institution2");
const degree2Input = document.getElementById("degree2");
// Experience Section
const experienceDates1Input = document.getElementById("experience-dates1");
const company1Input = document.getElementById("company1");
const position1Input = document.getElementById("position1");
const experienceDates2Input = document.getElementById("experience-dates2");
const company2Input = document.getElementById("company2");
const position2Input = document.getElementById("position2");
// Certification Section
const certification1Input = document.getElementById("certification1");
const certification2Input = document.getElementById("certification2");
const certification3Input = document.getElementById("certification3");
// Skills Section
const skills1Input = document.getElementById("skill1");
const skills2Input = document.getElementById("skill2");
const skills3Input = document.getElementById("skill3");
const skills4Input = document.getElementById("skill4");
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Store each input in localStorage
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("job-title", jobInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("phone", phoneInput.value);
    localStorage.setItem("profileSummary", profileSummary.value);
    localStorage.setItem("Institution1", Institution1Input.value);
    localStorage.setItem("degree1", degree1Input.value);
    localStorage.setItem("Institution2", Institution2Input.value);
    localStorage.setItem("degree2", degree2Input.value);
    localStorage.setItem("company1", company1Input.value);
    localStorage.setItem("position1", position1Input.value);
    localStorage.setItem("company2", company2Input.value);
    localStorage.setItem("position2", position2Input.value);
    localStorage.setItem("experienceDates1", experienceDates1Input.value);
    localStorage.setItem("experienceDates2", experienceDates2Input.value);
    localStorage.setItem("certification1", certification1Input.value);
    localStorage.setItem("certification2", certification2Input.value);
    localStorage.setItem("certification3", certification3Input.value);
    localStorage.setItem("skill1", skills1Input.value);
    localStorage.setItem("skill2", skills2Input.value);
    localStorage.setItem("skill3", skills3Input.value);
    localStorage.setItem("skill4", skills4Input.value);
    if (profilePhotoInput.files && profilePhotoInput.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profilePhoto", textImg);
        });
        reader.readAsDataURL(profilePhotoInput.files[0]);
    }
    // Redirect to resume page
    window.location.href = "./resume/resume.html";
});
