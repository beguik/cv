document.getElementById("resume-form").addEventListener("submit", function(event) {
  event.preventDefault();
  generateResume();
});

function generateResume() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var experience = document.getElementById("experience").value;
  var education = document.getElementById("education").value;
  var skills = document.getElementById("skills").value;

  document.getElementById("name-section").textContent = name.toUpperCase();
  document.getElementById("contact-section").textContent = email;
  document.getElementById("contact-phone-section").textContent = phone;
  document.getElementById("experience-section").textContent = experience;
  document.getElementById("education-section").textContent = education;
  document.getElementById("skills-section").textContent =skills;

  document.getElementById("generated-resume").style.display = "block";
}
