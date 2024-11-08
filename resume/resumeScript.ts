window.addEventListener("load", () => {
  let name = localStorage.getItem("name");
  let surname = localStorage.getItem("job-title");
  let profilePhoto:any = localStorage.getItem("profilePhoto");
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

  let resumeName = document.getElementById("resume-name") as HTMLInputElement;
  resumeName.textContent = name;

  let surName = document.getElementById("job-title") as HTMLInputElement;
  surName.textContent = surname;

  let description = document.getElementById(
    "resume-profile-description"
  ) as HTMLInputElement;
  description.textContent = profileSummary;

  let telephone = document.getElementById("resume-phone") as HTMLInputElement;
  telephone.textContent = phone;

  let resumeEmail = document.getElementById("resume-email") as HTMLInputElement;
  resumeEmail.textContent = email;

  let profilePic = document.getElementById("resume-photo") as HTMLInputElement;
  profilePic.src = profilePhoto;
  

  let education1 = document.getElementById("Institution1") as HTMLInputElement;
  education1.textContent = Institution1;

  let degree01 = document.getElementById("degree1") as HTMLInputElement;
  degree01.textContent = degree1;

  let education2 = document.getElementById("Institution2") as HTMLInputElement;
  education2.textContent = Institution2;

  let degree02 = document.getElementById("degree2") as HTMLInputElement;
  degree02.textContent = degree2;

  let company01 = document.getElementById("company1") as HTMLInputElement;
  company01.textContent = company1;

  let position01 = document.getElementById("position1") as HTMLInputElement;
  position01.textContent = position1;

  let company02 = document.getElementById("company2") as HTMLInputElement;
  company02.textContent = company2;

  let position02 = document.getElementById("position2") as HTMLInputElement;
  position02.textContent = position2;

  let experienceDate01 = document.getElementById(
    "experience-date1"
  ) as HTMLInputElement;
  experienceDate01.textContent = experienceDates1;

  let experienceDate02 = document.getElementById(
    "experience-date2"
  ) as HTMLInputElement;
  experienceDate02.textContent = experienceDates2;

  let certification01 = document.getElementById(
    "certification1"
  ) as HTMLInputElement;
  certification01.textContent = certification1;

  let certification02 = document.getElementById(
    "certification2"
  ) as HTMLInputElement;
  certification02.textContent = certification2;

  let certification03 = document.getElementById(
    "certification3"
  ) as HTMLInputElement;
  certification03.textContent = certification3;

  let skill01 = document.getElementById("resume-skill1") as HTMLInputElement;
  skill01.textContent = skill1;
  let skill02 = document.getElementById("resume-skill2") as HTMLInputElement;
  skill02.textContent = skill2;
  let skill03 = document.getElementById("resume-skill3") as HTMLInputElement;
  skill03.textContent = skill3;
  let skill04 = document.getElementById("resume-skill4") as HTMLInputElement;
  skill04.textContent = skill4;
});
