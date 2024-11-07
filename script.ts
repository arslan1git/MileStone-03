// Personal Section
const nameInput = document.getElementById("name") as HTMLInputElement;
const jobInput = document.getElementById("job-title") as HTMLInputElement;
const profilePhotoInput = document.getElementById(
  "profile-photo"
) as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const profileSummary = document.getElementById("profile") as HTMLInputElement;

// Education Section

const Institution1Input = document.getElementById(
  "Institution1"
) as HTMLInputElement;
const degree1Input = document.getElementById("degree1") as HTMLInputElement;
const Institution2Input = document.getElementById(
  "Institution2"
) as HTMLInputElement;
const degree2Input = document.getElementById("degree2") as HTMLInputElement;

// Experience Section
const experienceDates1Input = document.getElementById(
  "experience-dates1"
) as HTMLInputElement;
const company1Input = document.getElementById(
  "company1"
) as HTMLInputElement;
const position1Input = document.getElementById(
  "position1"
) as HTMLInputElement;
const experienceDates2Input = document.getElementById(
  "experience-dates2"
) as HTMLInputElement;
const company2Input = document.getElementById(
  "company2"
) as HTMLInputElement;
const position2Input = document.getElementById(
  "position2"
) as HTMLInputElement;

// Certification Section
const certification1Input = document.getElementById(
  "certification1"
) as HTMLInputElement;
const certification2Input = document.getElementById(
  "certification2"
) as HTMLInputElement;
const certification3Input = document.getElementById(
  "certification3"
) as HTMLInputElement;

// Skills Section
const skillsInput = document.getElementById("skills") as HTMLInputElement;

let form = document.getElementById("form");
let submitBtn = document.getElementById("submit-btn");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("job-title", jobInput.value);
  localStorage.setItem("profilePhoto", profilePhotoInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("phone", phoneInput.value);
  localStorage.setItem("profileSummary", profileSummary.value);
  localStorage.setItem("Institution1", Institution1Input.value);
  localStorage.setItem("degree1", degree1Input.value);
  localStorage.setItem("Institution2", Institution2Input.value);
  localStorage.setItem("degree2", degree2Input.value);
  localStorage.setItem("company1", company1Input.value);
  localStorage.setItem("position1", position1Input.value);
  localStorage.setItem("position2", position2Input.value);  
  localStorage.setItem("company2", company2Input.value);
  localStorage.setItem("experienceDates1", experienceDates1Input.value);
  localStorage.setItem("company2", company2Input.value);
  localStorage.setItem("experienceDates2", experienceDates2Input.value);  
  localStorage.setItem("certification1", certification1Input.value);
  localStorage.setItem("certification2", certification2Input.value);
  localStorage.setItem("certification3", certification3Input.value);
  localStorage.setItem("skills", skillsInput.value);
  

  window.location.href = "./resume/resume.html";
});
