<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portofolio personal Nadhief Musyaffa Musyaffa — Mahasiswa & Web Developer" />
  <meta name="keywords" content="portofolio, web developer, mahasiswa, HTML, CSS, JavaScript" />
  <meta name="author" content="Nadhief Musyaffa Musyaffa" />

  <title>Nadhief Musyaffa — Portfolio</title>

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

  <!-- Main Stylesheet -->
  <link rel="stylesheet" href="style.css" />
</head>

<body>

  <!-- ============================================================
       LOADER — Tampilan loading saat halaman pertama kali dibuka
       ============================================================ -->
  <div id="loader" class="loader">
    <div class="loader__spinner"></div>
    <p class="loader__text">Memuat...</p>
  </div>

  <!-- ============================================================
       NAVBAR — Navigasi utama (sticky, berubah saat scroll)
       Konten dirender secara dinamis dari data.js
       ============================================================ -->
  <nav id="navbar" class="navbar">
    <div class="container navbar__inner">
      <!-- Logo / Nama -->
      <a href="#beranda" class="navbar__logo" id="navLogo">
        <span class="navbar__logo-icon">&lt;/&gt;</span>
        <span class="navbar__logo-text" id="navLogoText">Nadhief Musyaffa Musyaffa</span>
      </a>

      <!-- Menu Links — diisi oleh main.js -->
      <ul class="navbar__menu" id="navMenu"></ul>

      <!-- Hamburger tombol untuk mobile -->
      <button class="navbar__toggle" id="navToggle" aria-label="Toggle menu">
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
      </button>
    </div>
  </nav>

  <!-- ============================================================
       HERO / BERANDA — Section pertama, full viewport
       ============================================================ -->
  <section id="beranda" class="hero">
    <div class="hero__particles" id="heroParticles"></div>
    <div class="container hero__content">
      <p class="hero__greeting reveal-up" id="heroGreeting">Halo, Saya</p>
      <h1 class="hero__name reveal-up" id="heroName">Nadhief Musyaffa Musyaffa</h1>
      <div class="hero__typing-wrapper reveal-up">
        <span class="hero__typing-prefix">Seorang </span>
        <span class="hero__typing-text" id="heroTyping"></span>
        <span class="hero__typing-cursor">|</span>
      </div>
      <p class="hero__subtitle reveal-up" id="heroSubtitle"></p>
      <div class="hero__cta reveal-up" id="heroCta"></div>
    </div>
    <a href="#profil" class="hero__scroll-indicator" aria-label="Scroll ke bawah">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
      <span>Scroll ke bawah</span>
    </a>
  </section>

  <!-- ============================================================
       PROFIL DIRI — Bento Grid Layout
       Informasi personal ditampilkan dalam grid card modern
       ============================================================ -->
  <section id="profil" class="section profil">
    <div class="container">
      <h2 class="section__title reveal-up">
        <span class="section__title-icon"><i class="fas fa-user"></i></span>
        Profil Diri
      </h2>
      <p class="section__subtitle reveal-up">Mengenal lebih dekat tentang saya</p>

      <!-- Bento Grid -->
      <div class="profil__bento">

        <!-- Card 1: Avatar + Nama (tall card, spans 2 rows) -->
        <div class="profil__bento-card profil__bento-card--avatar reveal-up">
          <div class="profil__bento-avatar" id="profilAvatar">
            <!-- Diisi oleh JS: gambar atau inisial -->
          </div>
          <h3 class="profil__bento-name" id="profilName"></h3>
          <p class="profil__bento-title" id="profilTitle"></p>
          <div class="profil__bento-social" id="profilSocial">
            <!-- Diisi oleh JS -->
          </div>
        </div>

        <!-- Card 2: Bio (wide card) -->
        <div class="profil__bento-card profil__bento-card--bio reveal-up">
          <div class="profil__bento-card-header">
            <i class="fas fa-quote-left"></i>
            <span>Tentang Saya</span>
          </div>
          <p class="profil__bento-bio" id="profilBio"></p>
        </div>

        <!-- Card 3: Detail cards — dirender oleh main.js -->
        <div class="profil__bento-card profil__bento-card--details reveal-up" id="profilDetails">
          <!-- Detail items dirender oleh main.js -->
        </div>

        <!-- Card 4: Statistik ringkas -->
        <div class="profil__bento-card profil__bento-card--stats reveal-up">
          <div class="profil__bento-stat">
            <span class="profil__bento-stat-number" data-count="3">0</span>
            <span class="profil__bento-stat-label">Proyek</span>
          </div>
          <div class="profil__bento-stat">
            <span class="profil__bento-stat-number" data-count="4">0</span>
            <span class="profil__bento-stat-label">Skill</span>
          </div>
          <div class="profil__bento-stat">
            <span class="profil__bento-stat-number" data-count="2">0</span>
            <span class="profil__bento-stat-label">Organisasi</span>
          </div>
        </div>



      </div>
    </div>
  </section>

  <!-- ============================================================
       SKILL / MINAT — Kemampuan dan bidang minat
       ============================================================ -->
  <section id="skill" class="section skill">
    <div class="container">
      <h2 class="section__title reveal-up">
        <span class="section__title-icon"><i class="fas fa-code"></i></span>
        Skill & Minat
      </h2>
      <p class="section__subtitle reveal-up">Kemampuan teknis dan bidang ketertarikan saya</p>

      <!-- Skill bars -->
      <div class="skill__grid" id="skillGrid">
        <!-- Dirender oleh main.js -->
      </div>

      <!-- Minat -->
      <h3 class="skill__interest-title reveal-up">Bidang Minat</h3>
      <div class="skill__interests" id="interestGrid">
        <!-- Dirender oleh main.js -->
      </div>
    </div>
  </section>

  <!-- ============================================================
       PENUGASAN — Tugas 2, 3, dan 4
       ============================================================ -->
  <section id="penugasan" class="section penugasan">
    <div class="container">
      <h2 class="section__title reveal-up">
        <span class="section__title-icon"><i class="fas fa-tasks"></i></span>
        Penugasan
      </h2>
      <p class="section__subtitle reveal-up">Kumpulan tugas yang telah saya kerjakan</p>

      <div class="penugasan__grid" id="penugasanGrid">
        <!-- Dirender oleh main.js -->
      </div>
    </div>
  </section>

  <!-- ============================================================
       PORTOFOLIO / PROYEK — Galeri proyek
       ============================================================ -->
  <section id="portofolio" class="section portofolio">
    <div class="container">
      <h2 class="section__title reveal-up">
        <span class="section__title-icon"><i class="fas fa-briefcase"></i></span>
        Portofolio
      </h2>
      <p class="section__subtitle reveal-up">Proyek dan karya yang pernah saya buat</p>

      <!-- Filter buttons -->
      <div class="portofolio__filters reveal-up" id="portofolioFilters">
        <button class="portofolio__filter-btn active" data-filter="all">Semua</button>
        <button class="portofolio__filter-btn" data-filter="web">Web</button>
      </div>

      <div class="portofolio__grid" id="portofolioGrid">
        <!-- Dirender oleh main.js -->
      </div>

      <!-- Organisasi -->
      <h3 class="portofolio__org-title reveal-up">Riwayat Organisasi</h3>
      <div class="portofolio__org-grid" id="orgGrid">
        <!-- Dirender oleh main.js -->
      </div>
    </div>
  </section>

  <!-- ============================================================
       KONTAK — Form kontak dan sosial media
       ============================================================ -->
  <section id="kontak" class="section kontak">
    <div class="container">
      <h2 class="section__title reveal-up">
        <span class="section__title-icon"><i class="fas fa-envelope"></i></span>
        Kontak
      </h2>
      <p class="section__subtitle reveal-up">Jangan ragu untuk menghubungi saya</p>

      <div class="kontak__grid">
        <!-- Info kontak -->
        <div class="kontak__info reveal-left">
          <div class="kontak__info-card" id="kontakInfoCards">
            <!-- Dirender oleh main.js -->
          </div>

          <!-- Social media links -->
          <div class="kontak__social" id="kontakSocial">
            <!-- Dirender oleh main.js -->
          </div>
        </div>

        <!-- Form kontak -->
        <form class="kontak__form reveal-right" id="kontakForm">
          <div class="kontak__form-group">
            <label for="contactName">Nama Lengkap</label>
            <input type="text" id="contactName" name="name" placeholder="Masukkan nama Anda" required />
          </div>
          <div class="kontak__form-group">
            <label for="contactEmail">Email</label>
            <input type="email" id="contactEmail" name="email" placeholder="Masukkan email Anda" required />
          </div>
          <div class="kontak__form-group">
            <label for="contactSubject">Subjek</label>
            <input type="text" id="contactSubject" name="subject" placeholder="Subjek pesan" required />
          </div>
          <div class="kontak__form-group">
            <label for="contactMessage">Pesan</label>
            <textarea id="contactMessage" name="message" rows="5" placeholder="Tulis pesan Anda..." required></textarea>
          </div>
          <button type="submit" class="btn btn--primary kontak__submit-btn">
            <i class="fas fa-paper-plane"></i> Kirim Pesan
          </button>
          <p class="kontak__form-feedback" id="formFeedback"></p>
        </form>
      </div>
    </div>
  </section>

  <!-- ============================================================
       FOOTER
       ============================================================ -->
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copyright" id="footerCopyright"></p>
      <p class="footer__tagline" id="footerTagline"></p>
      <button class="footer__back-to-top" id="backToTop" aria-label="Kembali ke atas">
        <i class="fas fa-chevron-up"></i>
      </button>
    </div>
  </footer>

  <!-- Scripts — data.js harus dimuat sebelum main.js -->
  <script src="data.js"></script>
  <script src="main.js"></script>
</body>

</html>
