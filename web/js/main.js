/**
 * ============================================================
 *  MAIN.JS — Logika Interaktivitas Website Portofolio
 * ============================================================
 *  File ini menangani:
 *  1. Loader
 *  2. Rendering konten dari data.js
 *  3. Navbar (scroll, mobile toggle, active link)
 *  4. Typing effect (hero section)
 *  5. Scroll reveal animations (IntersectionObserver)
 *  6. Skill bar animation
 *  7. Particles (hero background)
 *  8. Portfolio filter
 *  9. Contact form validation
 * 10. Back to top
 *
 *  TIDAK PERLU mengedit file ini untuk update konten.
 *  Semua konten diambil dari data.js (PORTFOLIO_DATA).
 * ============================================================
 */

/* ─────────── Tunggu DOM siap ─────────── */
document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    renderNavigation();
    renderHero();
    renderProfile();
    renderSkills();
    renderInterests();
    renderAssignments();
    renderProjects();
    renderOrganizations();
    renderContact();
    renderFooter();
    initNavbar();
    initTypingEffect();
    initScrollReveal();
    initParticles();
    initPortfolioFilter();
    initContactForm();
    initBackToTop();
});


/* ══════════════════════════════════════════
 *  1. LOADER
 * ══════════════════════════════════════════ */
function initLoader() {
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 600);
    });
}


/* ══════════════════════════════════════════
 *  2. RENDER FUNCTIONS — Konten dari data.js
 * ══════════════════════════════════════════ */

/** Navigasi */
function renderNavigation() {
    const menu = document.getElementById("navMenu");
    const logoText = document.getElementById("navLogoText");
    if (logoText) logoText.textContent = PORTFOLIO_DATA.personal.name;

    PORTFOLIO_DATA.navigation.forEach(item => {
        const li = document.createElement("li");
        li.className = "navbar__menu-item";
        li.innerHTML = `<a href="${item.href}">${item.label}</a>`;
        menu.appendChild(li);
    });
}

/** Hero / Beranda */
function renderHero() {
    const d = PORTFOLIO_DATA;
    setText("heroGreeting", d.hero.greeting);
    setText("heroName", d.personal.name);
    setText("heroSubtitle", d.hero.subtitle);

    const ctaEl = document.getElementById("heroCta");
    if (ctaEl) {
        ctaEl.innerHTML = `
      <a href="${d.hero.ctaPrimary.href}" class="btn btn--primary">${d.hero.ctaPrimary.text}</a>
      <a href="${d.hero.ctaSecondary.href}" class="btn btn--outline">${d.hero.ctaSecondary.text}</a>
    `;
    }
}

/** Profil Diri — Bento Grid */
function renderProfile() {
    const d = PORTFOLIO_DATA.personal;
    const c = PORTFOLIO_DATA.contact;

    // Avatar: gunakan gambar jika ada, jika tidak tampilkan inisial
    const avatarEl = document.getElementById("profilAvatar");
    if (avatarEl) {
        if (d.avatarUrl) {
            avatarEl.innerHTML = `<img src="${d.avatarUrl}" alt="${d.name}" />`;
        } else {
            avatarEl.textContent = d.name.charAt(0).toUpperCase();
        }
    }

    // Nama dan title di avatar card
    setText("profilName", d.name);
    setText("profilTitle", d.title);

    // Social links di avatar card
    const socialEl = document.getElementById("profilSocial");
    if (socialEl && c.socialMedia) {
        c.socialMedia.forEach(s => {
            socialEl.innerHTML += `
        <a href="${s.url}" target="_blank" rel="noopener" title="${s.platform}">
          <i class="${s.icon}"></i>
        </a>
      `;
        });
    }

    // Bio
    setText("profilBio", d.bio);

    // Detail items (new class name for bento)
    const detailsEl = document.getElementById("profilDetails");
    if (detailsEl) {
        d.details.forEach(item => {
            detailsEl.innerHTML += `
        <div class="profil__detail-item">
          <div class="profil__detail-icon"><i class="${item.icon}"></i></div>
          <div>
            <div class="profil__detail-label">${item.label}</div>
            <div class="profil__detail-value">${item.value}</div>
          </div>
        </div>
      `;
        });
    }

    // Resume button
    const resumeBtn = document.getElementById("profilResumeBtn");
    if (resumeBtn) resumeBtn.href = d.resumeUrl;

    // Animasi counter pada statistik
    initStatCounters();
}

/** Animasi counter angka pada profil stats */
function initStatCounters() {
    const counters = document.querySelectorAll(".profil__bento-stat-number");
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10);
                let current = 0;
                const duration = 1500;
                const step = Math.max(1, Math.floor(target / (duration / 50)));

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current;
                }, 50);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

/** Skill */
function renderSkills() {
    const grid = document.getElementById("skillGrid");
    if (!grid) return;

    grid.classList.add("stagger-children");

    PORTFOLIO_DATA.skills.forEach(skill => {
        const div = document.createElement("div");
        div.className = "skill__item reveal-up";
        div.innerHTML = `
      <div class="skill__header">
        <div class="skill__name-wrapper">
          <span class="skill__icon" style="color: ${skill.color}"><i class="${skill.icon}"></i></span>
          <span class="skill__name">${skill.name}</span>
        </div>
      </div>
      <div class="skill__bar">
        <div class="skill__bar-fill" data-level="${skill.level}" style="background: linear-gradient(90deg, ${skill.color}, ${adjustColor(skill.color, 30)})"></div>
      </div>
    `;
        grid.appendChild(div);
    });
}

/** Minat / Interest */
function renderInterests() {
    const grid = document.getElementById("interestGrid");
    if (!grid) return;

    grid.classList.add("stagger-children");

    PORTFOLIO_DATA.interests.forEach(interest => {
        const div = document.createElement("div");
        div.className = "skill__interest-card reveal-scale";
        div.innerHTML = `
      <div class="skill__interest-icon"><i class="${interest.icon}"></i></div>
      <div class="skill__interest-name">${interest.name}</div>
    `;
        grid.appendChild(div);
    });
}

/** Penugasan */
function renderAssignments() {
    const grid = document.getElementById("penugasanGrid");
    if (!grid) return;

    grid.classList.add("stagger-children");

    PORTFOLIO_DATA.assignments.forEach(a => {
        const div = document.createElement("div");
        div.className = "penugasan__card reveal-up";

        let actionBtn = "";
        if (a.actionType === "download") {
            actionBtn = `<a href="${a.link}" download class="penugasan__card-link penugasan__card-link--download">
                <i class="fas fa-download"></i> Download PDF
            </a>`;
        } else if (a.actionType === "view") {
            actionBtn = `<a href="${a.link}" class="penugasan__card-link penugasan__card-link--view">
                <i class="fas fa-eye"></i> View Full File
            </a>`;
        } else if (a.actionType === "youtube") {
            actionBtn = `<a href="${a.link}" target="_blank" rel="noopener noreferrer" class="penugasan__card-link penugasan__card-link--youtube">
                <i class="fab fa-youtube"></i> Tonton Video
            </a>`;
        }

        div.innerHTML = `
      <div class="penugasan__card-icon"><i class="${a.icon}"></i></div>
      <div class="penugasan__card-number">Tugas ${a.id}</div>
      <h3 class="penugasan__card-title">${a.title}</h3>
      ${actionBtn}
    `;
        grid.appendChild(div);
    });
}

/** Portofolio / Proyek */
function renderProjects() {
    const grid = document.getElementById("portofolioGrid");
    if (!grid) return;

    grid.classList.add("stagger-children");

    PORTFOLIO_DATA.projects.forEach(p => {
        const div = document.createElement("div");
        div.className = "portofolio__card reveal-scale";
        div.dataset.category = p.category;

        const imageContent = p.image
            ? `<img src="${p.image}" alt="${p.title}" />`
            : `<i class="fas fa-code"></i>`;

        div.innerHTML = `
      <div class="portofolio__card-image">
        ${imageContent}
      </div>
      <div class="portofolio__card-body">
        <h3 class="portofolio__card-title">${p.title}</h3>
        <p class="portofolio__card-desc">${p.description}</p>
        <div class="portofolio__card-tags">
          ${p.tags.map(t => `<span class="portofolio__card-tag">${t}</span>`).join("")}
        </div>
      </div>
    `;
        grid.appendChild(div);
    });
}

/** Organisasi */
function renderOrganizations() {
    const grid = document.getElementById("orgGrid");
    if (!grid) return;

    grid.classList.add("stagger-children");

    PORTFOLIO_DATA.organizations.forEach(o => {
        const div = document.createElement("div");
        div.className = "portofolio__org-card reveal-up";
        div.innerHTML = `
      <div class="portofolio__org-icon"><i class="${o.icon}"></i></div>
      <div>
        <div class="portofolio__org-name">${o.name}</div>
        <div class="portofolio__org-role">${o.role}</div>
        <div class="portofolio__org-period">${o.period}</div>
        <p class="portofolio__org-desc">${o.description}</p>
      </div>
    `;
        grid.appendChild(div);
    });
}

/** Kontak */
function renderContact() {
    const d = PORTFOLIO_DATA.contact;

    // Info cards
    const infoEl = document.getElementById("kontakInfoCards");
    if (infoEl) {
        const infoItems = [
            { icon: "fas fa-envelope", label: "Email", value: d.email },
            { icon: "fas fa-phone", label: "Telepon", value: d.phone },
            { icon: "fas fa-map-marker-alt", label: "Lokasi", value: d.location },
        ];

        infoItems.forEach(item => {
            infoEl.innerHTML += `
        <div class="kontak__info-item">
          <div class="kontak__info-icon"><i class="${item.icon}"></i></div>
          <div>
            <div class="kontak__info-label">${item.label}</div>
            <div class="kontak__info-value">${item.value}</div>
          </div>
        </div>
      `;
        });
    }

    // Social media
    const socialEl = document.getElementById("kontakSocial");
    if (socialEl) {
        d.socialMedia.forEach(s => {
            socialEl.innerHTML += `
        <a href="${s.url}" class="kontak__social-link" target="_blank" rel="noopener" title="${s.platform}">
          <i class="${s.icon}"></i>
        </a>
      `;
        });
    }
}

/** Footer */
function renderFooter() {
    const d = PORTFOLIO_DATA.footer;
    setText("footerCopyright", d.copyright);
    setText("footerTagline", d.tagline);
}


/* ══════════════════════════════════════════
 *  3. NAVBAR — Scroll effect + Mobile toggle
 * ══════════════════════════════════════════ */
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");

    // Scroll — tambahkan background saat discroll
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
        updateActiveNavLink();
    });

    // Mobile hamburger toggle
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        menu.classList.toggle("open");
    });

    // Tutup menu mobile saat klik link
    menu.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            toggle.classList.remove("open");
            menu.classList.remove("open");
        }
    });
}

/** Highlight link navigasi aktif berdasarkan posisi scroll */
function updateActiveNavLink() {
    const sections = document.querySelectorAll(".section, .hero");
    const links = document.querySelectorAll(".navbar__menu-item a");
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}


/* ══════════════════════════════════════════
 *  4. TYPING EFFECT
 * ══════════════════════════════════════════ */
function initTypingEffect() {
    const el = document.getElementById("heroTyping");
    if (!el) return;

    const words = PORTFOLIO_DATA.hero.typingWords;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 120;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            el.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            delay = 60;
        } else {
            el.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            delay = 120;
        }

        // Selesai mengetik kata
        if (!isDeleting && charIndex === currentWord.length) {
            delay = 2000; // Jeda sebelum menghapus
            isDeleting = true;
        }

        // Selesai menghapus kata
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 300;
        }

        setTimeout(type, delay);
    }

    type();
}


/* ══════════════════════════════════════════
 *  5. SCROLL REVEAL — IntersectionObserver
 * ══════════════════════════════════════════ */
function initScrollReveal() {
    const reveals = document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    // Animasi skill bar saat masuk viewport
                    const bars = entry.target.querySelectorAll(".skill__bar-fill");
                    bars.forEach(bar => {
                        bar.style.width = bar.dataset.level + "%";
                    });
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach(el => observer.observe(el));

    // Juga observe skill items langsung (bukan hanya child bars)
    document.querySelectorAll(".skill__item").forEach(item => {
        observer.observe(item);
    });
}


/* ══════════════════════════════════════════
 *  6. PARTICLES — Background hero
 * ══════════════════════════════════════════ */
function initParticles() {
    const container = document.getElementById("heroParticles");
    if (!container) return;

    const count = 30;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "hero__particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = (4 + Math.random() * 4) + "s";
        particle.style.width = (2 + Math.random() * 4) + "px";
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}


/* ══════════════════════════════════════════
 *  7. PORTFOLIO FILTER
 * ══════════════════════════════════════════ */
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll(".portofolio__filter-btn");
    const cards = document.querySelectorAll(".portofolio__card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                if (filter === "all" || card.dataset.category === filter) {
                    card.style.display = "";
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.8)";
                    setTimeout(() => { card.style.display = "none"; }, 300);
                }
            });
        });
    });
}


/* ══════════════════════════════════════════
 *  8. CONTACT FORM VALIDATION
 * ══════════════════════════════════════════ */
function initContactForm() {
    const form = document.getElementById("kontakForm");
    const feedback = document.getElementById("formFeedback");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("#contactName").value.trim();
        const email = form.querySelector("#contactEmail").value.trim();
        const subject = form.querySelector("#contactSubject").value.trim();
        const message = form.querySelector("#contactMessage").value.trim();

        // Validasi
        if (!name || !email || !subject || !message) {
            showFeedback(feedback, "Mohon isi semua field.", "error");
            return;
        }

        if (!isValidEmail(email)) {
            showFeedback(feedback, "Format email tidak valid.", "error");
            return;
        }

        // Simulasi pengiriman (untuk demo)
        showFeedback(feedback, "✅ Pesan berhasil dikirim! Terima kasih.", "success");
        form.reset();

        // Hapus feedback setelah 5 detik
        setTimeout(() => {
            feedback.textContent = "";
            feedback.className = "kontak__form-feedback";
        }, 5000);
    });
}


/* ══════════════════════════════════════════
 *  9. BACK TO TOP
 * ══════════════════════════════════════════ */
function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/* ══════════════════════════════════════════
 *  UTILITY FUNCTIONS
 * ══════════════════════════════════════════ */

/** Set text content safely */
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

/** Validasi format email */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Show feedback message */
function showFeedback(el, message, type) {
    el.textContent = message;
    el.className = "kontak__form-feedback " + type;
}

/** Mencerahkan warna hex */
function adjustColor(hex, amount) {
    hex = hex.replace("#", "");
    const num = parseInt(hex, 16);
    let r = Math.min(255, ((num >> 16) & 0xff) + amount);
    let g = Math.min(255, ((num >> 8) & 0xff) + amount);
    let b = Math.min(255, (num & 0xff) + amount);
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
