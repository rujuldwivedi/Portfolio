// ============================
// 🌠 STAR BACKGROUND GENERATOR
// ============================
function createStars() {
  const starsContainer = document.getElementById("stars");
  const numStars = 120;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    starsContainer.appendChild(star);
  }
}

// ============================
// 🌈 SMOOTH SCROLLING
// ============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ============================
// 🧊 NAVBAR SCROLL EFFECT
// ============================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.9)";
  }
});

// ============================
// 🌀 SECTION SCROLL ANIMATIONS
// ============================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(section);
});

// ============================
// 🚀 INIT
// ============================
createStars();

// 📦 fetch resume.json and render
fetch("data/resume.json")
  .then((res) => res.json())
  .then((data) => {
    renderAbout(data.about);
    renderExperience(data.experience);
    renderProjects(data.projects);
    renderSkills(data.skills);
    renderAchievements(data.achievements);
    renderExtras(data.extras);
    renderContact(data.contact);
  });

function renderAbout(about) {
  const html = `
    <h2 class="section-title">About Me</h2>
    <div class="about">
      <img src="${about.photo}" alt="${about.name}" class="profile-pic"/>
      <div class="about-text">
        <p>${about.bio}</p>
      </div>
    </div>`;
  document.getElementById("about").innerHTML = html;
}

function renderExperience(items) {
  let html = `<h2 class="section-title">Experience</h2><div class="skills-grid">`;
  items.forEach((exp) => {
    html += `
      <div class="skill-card">
        <div class="skill-title">${exp.company}</div>
        <p class="position"><strong>${exp.title}</strong></p>
        <p class="duration"><i>${exp.duration}</i></p>
        <ul>${exp.description.map((line) => `<li>${line}</li>`).join("")}</ul>
        <p style="margin-top: 0.5rem">${exp.tech.join(" | ")}</p>
      </div>`;
  });
  html += `</div>`;
  document.getElementById("experience").innerHTML = html;
}

function renderProjects(projectGroups) {
  let html = `<h2 class="section-title">Projects</h2>`;

  projectGroups.forEach((group) => {
    html += `<h3 class="section-subtitle">${group.group}</h3>`;
    html += `<div class="skills-grid">`;

    group.items.forEach((p) => {
      html += `
        <div class="skill-card">
          <div class="skill-title">${p.title}</div>
          <p>${p.desc}</p>
          <div class="skill-tags">${p.tags
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("")}</div>
          <p style="margin-top: 1rem"><a href="${
            p.link
          }" class="cta-button" target="_blank">View Code</a></p>
        </div>`;
    });

    html += `</div>`;
  });

  document.getElementById("projects").innerHTML = html;
}

function renderSkills(skills) {
  let html = `<h2 class="section-title">Skills</h2><div class="skills-grid">`;
  for (const category in skills) {
    html += `
      <div class="skill-card">
        <div class="skill-title">${category}</div>
        <div class="skill-tags">${skills[category]
          .map((skill) => `<span class="tag">${skill}</span>`)
          .join("")}</div>
      </div>`;
  }
  html += `</div>`;
  document.getElementById("skills").innerHTML = html;
}

function renderAchievements(achievements) {
  const html = `
    <h2 class="section-title">Achievements</h2>
    <ul style="max-width: 900px; margin: auto; line-height: 1.8;">
      ${achievements.map((item) => `<li>🎖️ ${item}</li>`).join("")}
    </ul>`;
  document.getElementById("achievements").innerHTML = html;
}

function renderExtras(extras) {
  const html = `
    <h2 class="section-title">Currently Into</h2>
    <div class="skills-grid">
      <div class="skill-card">
        <div class="skill-title">🎥 Watching</div>
        <p><a href="${extras.currentlyWatching.link}" target="_blank">${extras.currentlyWatching.title}</a></p>
      </div>
      <div class="skill-card">
        <div class="skill-title">🎵 Listening</div>
        <p><a href="${extras.currentlyListening.link}" target="_blank">${extras.currentlyListening.title}</a></p>
      </div>
      <div class="skill-card">
        <div class="skill-title">📚 Reading</div>
        <p><a href="${extras.currentlyReading.link}" target="_blank">${extras.currentlyReading.title}</a></p>
      </div>
    </div>`;
  document.getElementById("watching").innerHTML = html;
}

function renderContact(contact) {
  const html = `
    <h2 class="section-title">Let's Connect</h2>
    <div class="social-links">
      <a href="mailto:${contact.email}" target="_blank">📧 Email</a>
      <a href="${contact.linkedin}" target="_blank">🔗 LinkedIn</a>
      <a href="${contact.github}" target="_blank">💻 GitHub</a>
      <a href="tel:${contact.phone}" target="_blank">📞 Phone</a>
    </div>
    <p style="text-align: center; margin-top: 2rem">&copy; Rujul Dwivedi. Built with curiosity and code.</p>`;
  document.getElementById("contact").innerHTML = html;
}
