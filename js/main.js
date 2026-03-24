(function () {
  "use strict";

  function escapeHtml(text) {
    if (text == null) return "";
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
  }

  const contactSvgs = {
    email:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 6h16v12H4V6z"/><path d="M4 7l8 6 8-6"/></svg>',
    github:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    linkedin:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  };

  const skillIcons = {
    "Programming Languages":
      '<svg class="skill-tile__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    "Backend & Frameworks":
      '<svg class="skill-tile__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" aria-hidden="true"><rect x="2" y="3" width="20" height="6" rx="1"/><rect x="2" y="14" width="20" height="7" rx="1"/><path d="M6 9v5M10 9v5M14 9v5M18 9v5"/></svg>',
    "Development Operations":
      '<svg class="skill-tile__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    "Machine Learning":
      '<svg class="skill-tile__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="19" r="2"/><path d="M12 7v3M10 10l-3 1M14 10l3 1M9 17l-1-3M15 17l1-3"/></svg>',
    "Financial Mathematics":
      '<svg class="skill-tile__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" aria-hidden="true"><path d="M3 18h18"/><path d="M5 14l4-4 4 3 6-7"/><path d="M16 6v4h4"/></svg>',
    "General Interests":
      '<svg class="skill-tile__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><path d="M12 8a4 4 0 100 8"/></svg>',
  };

  const iconMusic =
    '<svg class="signal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>';
  const iconBook =
    '<svg class="signal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>';
  
  function initNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initRevealCards() {
    document.querySelectorAll(".reveal-card .reveal-trigger").forEach(function (btn) {
      if (btn.closest(".reveal-card--static")) return;
      btn.addEventListener("click", function () {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          return;
        }
        var card = btn.closest(".reveal-card");
        var open = card.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open);
      });
    });

    document.querySelectorAll(".reveal-card .reveal-trigger").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function initAboutSecret() {
    var box = document.querySelector(".about-secret");
    if (!box) return;
    box.addEventListener("click", function () {
      if (!window.matchMedia("(hover: none)").matches) return;
      box.classList.toggle("about-secret--open");
    });
  }

  function renderAbout(about) {
    var el = document.getElementById("me");
    if (!el) return;
    el.classList.add("block--about");
    el.innerHTML =
      '<p class="block-label block-label--center" id="me-heading">Me</p>' +
      '<div class="about-centered">' +
      '<img class="about-centered__photo" src="' +
      escapeHtml(about.photo) +
      '" alt="" width="220" height="220" loading="lazy"/>' +
      '<p class="about-centered__meta">' +
      escapeHtml(about.location) +
      "</p>" +
      '<div class="about-secret" tabindex="0">' +
      '<p class="about-secret__label">Here\'s a secret…</p>' +
      '<p class="about-secret__hint about-secret__hint--touch">Tap to reveal</p>' +
      '<div class="about-secret__reveal"><p class="about-secret__pitch">' +
      escapeHtml(about.pitch) +
      "</p></div></div></div>";
  }

  function experienceCardHtml(exp, isPast) {
    var pastClass = isPast ? " experience-card--past" : "";
    var html =
      '<article class="reveal-card experience-card' +
      pastClass +
      '"><button type="button" class="reveal-trigger experience-card__trigger" aria-expanded="false">' +
      '<span class="reveal-hint reveal-hint--desktop">Reveal</span>' +
      '<span class="reveal-hint reveal-hint--mobile">Open</span>' +
      '<div class="exp-card-visual">' +
      '<div class="exp-card-visual__glass">' +
      '<img class="experience-card__logo" src="' +
      escapeHtml(exp.logo) +
      '" alt="" width="140" height="56" loading="lazy"/>' +
      "</div></div>" +
      '<div class="exp-card-copy">' +
      '<h3 class="experience-card__company">' +
      escapeHtml(exp.company) +
      "</h3>" +
      '<p class="experience-card__role">' +
      escapeHtml(exp.title) +
      "</p></div></button>" +
      '<div class="reveal-body"><ul>';
    exp.description.forEach(function (line) {
      html += "<li>" + escapeHtml(line) + "</li>";
    });
    html +=
      "</ul>" +
      '<p class="reveal-tech">' +
      escapeHtml(exp.tech.join(" · ")) +
      "</p></div></article>";
    return html;
  }

  function renderExperience(present, past) {
    var el = document.getElementById("experience");
    if (!el) return;
    var html = '<p class="block-label block-label--center" id="exp-heading">Experience</p>';

    html += '<div class="exp-era">Present</div><div class="exp-stack">';
    present.forEach(function (exp) {
      html += experienceCardHtml(exp, false);
    });
    html += "</div>";

    html += '<div class="exp-era exp-era--past">Past</div><div class="exp-stack exp-stack--past">';
    past.forEach(function (exp) {
      html += experienceCardHtml(exp, true);
    });
    html += "</div>";

    el.innerHTML = html;
  }

  function renderSkills(skills) {
    var el = document.getElementById("skills");
    if (!el) return;
    var html = '<p class="block-label block-label--center" id="skills-heading">Skills</p><div class="skills-card-grid">';
    Object.keys(skills).forEach(function (cat) {
      var icon = skillIcons[cat] || skillIcons["Programming Languages"];
      html +=
        '<article class="reveal-card skill-tile"><button type="button" class="reveal-trigger skill-tile__trigger" aria-expanded="false">' +
        '<span class="reveal-hint reveal-hint--desktop">Reveal</span>' +
        '<span class="reveal-hint reveal-hint--mobile">Open</span>' +
        '<div class="skill-tile__visual" aria-hidden="true">' +
        '<div class="skill-tile__visual-inner">' +
        icon +
        "</div></div>" +
        '<div class="skill-tile__copy">' +
        '<h3 class="skill-tile__title">' +
        escapeHtml(cat) +
        "</h3></div></button>" +
        '<div class="reveal-body skill-tile__body"><div class="reveal-tags">';
      skills[cat].forEach(function (s) {
        html += "<span>" + escapeHtml(s) + "</span>";
      });
      html += "</div></div></article>";
    });
    html += "</div>";
    el.innerHTML = html;
  }

  function currentlyVisual(poster, fallbackSvg) {
    if (poster) {
      return (
        '<div class="signal-visual"><img src="' +
        escapeHtml(poster) +
        '" alt="" loading="lazy"/></div>'
      );
    }
    return (
      '<div class="signal-visual signal-visual--fallback">' + fallbackSvg + "</div>"
    );
  }

  function renderCurrently(extras) {
    var el = document.getElementById("currently");
    if (!el) return;
    var w = extras.currentlyWatching;
    var l = extras.currentlyListening;
    var r = extras.currentlyReading;
    var yt = w.youtubeId || "";
    var thumb = yt ? "https://img.youtube.com/vi/" + yt + "/hqdefault.jpg" : "";

    el.innerHTML =
      '<p class="block-label" id="currently-heading">Currently</p>' +
      '<div class="signal-grid">' +
      '<article class="signal-card">' +
      '<a href="' +
      escapeHtml(w.link) +
      '" target="_blank" rel="noopener noreferrer">' +
      '<div class="signal-visual">' +
      (thumb
        ? '<img src="' + escapeHtml(thumb) + '" alt="" loading="lazy"/>'
        : "") +
      "</div>" +
      '<div class="signal-copy"><p class="signal-kind">Watching</p><h3>' +
      escapeHtml(w.title) +
      "</h3></div></a></article>" +
      '<article class="signal-card">' +
      '<a href="' +
      escapeHtml(l.link) +
      '" target="_blank" rel="noopener noreferrer">' +
      currentlyVisual(l.poster, iconMusic) +
      '<div class="signal-copy"><p class="signal-kind">Listening</p><h3>' +
      escapeHtml(l.title) +
      "</h3>" +
      (l.subtitle
        ? '<p class="subtitle">' + escapeHtml(l.subtitle) + "</p>"
        : "") +
      "</div></a></article>" +
      '<article class="signal-card">' +
      '<a href="' +
      escapeHtml(r.link) +
      '" target="_blank" rel="noopener noreferrer">' +
      currentlyVisual(r.poster, iconBook) +
      '<div class="signal-copy"><p class="signal-kind">Reading</p><h3>' +
      escapeHtml(r.title) +
      "</h3>" +
      (r.subtitle
        ? '<p class="subtitle">' + escapeHtml(r.subtitle) + "</p>"
        : "") +
      "</div></a></article></div>";
  }

function renderContact(contact) {
    var el = document.getElementById("contact");
    if (!el) return;
    var mail = contact.email;

    function contactIcon(href, label, svg, extraAttrs) {
      extraAttrs = extraAttrs || "";
      return (
        '<a class="platform-link" href="' +
        href +
        '" aria-label="' +
        escapeHtml(label) +
        '"' +
        extraAttrs +
        ">" +
        svg +
        "</a>"
      );
    }

    var primaryIcons =
      contactIcon("mailto:" + escapeHtml(mail), "Email " + mail, contactSvgs.email, "") +
      contactIcon(
        escapeHtml(contact.github),
        "GitHub",
        contactSvgs.github,
        ' target="_blank" rel="noopener noreferrer"'
      ) +
      contactIcon(
        escapeHtml(contact.linkedin),
        "LinkedIn",
        contactSvgs.linkedin,
        ' target="_blank" rel="noopener noreferrer"'
      );

    el.innerHTML =
      '<p class="block-label contact-label" id="contact-heading">Contact</p>' +
      '<div class="contact-grid">' +
      primaryIcons +
      '<div class="platform-row platform-row--center">' +
      "</div></div>" +
      '<p class="footer-meta">Good day to you stranger!</p>';
  }

  function run(data) {
    renderAbout(data.about);
    initAboutSecret();
    renderExperience(data.experiencePresent || [], data.experiencePast || []);
    renderSkills(data.skills);
    renderCurrently(data.extras);
    renderContact(data.contact, data.platforms || []);

    initRevealCards();

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var id = this.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });
  }

  initNav();

  fetch("data/resume.json")
    .then(function (res) {
      if (!res.ok) throw new Error("resume load failed");
      return res.json();
    })
    .then(run)
    .catch(function () {
      document.getElementById("me").innerHTML =
        "<p>Could not load profile data. Serve the site over HTTP(s) or open via a local server.</p>";
    });
})();
