/**
 * ============================================================
 *  DATA.JS — Pusat Data Konten Website Portofolio
 * ============================================================
 *  File ini berisi SEMUA konten yang ditampilkan di website.
 *  Untuk mengubah informasi pribadi, skill, proyek, dll,
 *  cukup edit data di file ini saja — tidak perlu ubah HTML.
 *
 *  CARA UPDATE:
 *  1. Cari bagian yang ingin diubah (gunakan komentar sebagai panduan)
 *  2. Ubah value string/array sesuai kebutuhan
 *  3. Simpan file, lalu refresh browser
 * ============================================================
 */

const PORTFOLIO_DATA = {

    /* ──────────────────────────────────────────────
     *  INFORMASI PRIBADI
     *  Update nama, judul, bio, dan foto di sini
     * ────────────────────────────────────────────── */
    personal: {
        name: "Nadhief Musyaffa",                          // Nama lengkap
        title: "Mahasiswa & Web Developer",       // Judul / tagline
        university: "Politeknik Negeri Bandung",      // Universitas
        major: "D4 - Teknik Informatika",              // Jurusan
        avatarUrl: "profile.jpg",                            // URL foto profil (kosongkan untuk inisial)
        resumeUrl: "#",                           // Link download CV

        // Bio singkat untuk section Profil Diri
        bio: `Saya adalah mahasiswa yang memiliki ketertarikan mendalam di bidang 
          teknologi dan pengembangan web. Saya senang mempelajari hal-hal baru 
          dan mengaplikasikan pengetahuan saya melalui proyek-proyek nyata. 
          Dengan semangat belajar yang tinggi, saya terus mengembangkan 
          kemampuan saya di bidang pemrograman dan desain.`,

        // Detail profil yang ditampilkan di kartu profil
        details: [
            { icon: "fas fa-map-marker-alt", label: "Lokasi", value: "Bandung, Jawa Barat" },
            { icon: "fas fa-university", label: "Universitas", value: "Politeknik Negeri Bandung" },
            { icon: "fas fa-book", label: "Jurusan", value: "D4 - Teknik Informatika" },
            { icon: "fas fa-calendar", label: "Angkatan", value: "2025" },
        ],
    },

    /* ──────────────────────────────────────────────
     *  NAVIGASI
     *  Ubah label menu navigasi di sini
     * ────────────────────────────────────────────── */
    navigation: [
        { label: "Beranda", href: "#beranda" },
        { label: "Profil", href: "#profil" },
        { label: "Skill", href: "#skill" },
        { label: "Penugasan", href: "#penugasan" },
        { label: "Portofolio", href: "#portofolio" },
        { label: "Kontak", href: "#kontak" },
    ],

    /* ──────────────────────────────────────────────
     *  HERO SECTION — Beranda
     *  Daftar kata yang akan ditampilkan dengan efek typing
     * ────────────────────────────────────────────── */
    hero: {
        greeting: "Halo, Saya",
        typingWords: [
            "Web Developer",
            "Mahasiswa IT",
            "UI/UX Enthusiast",
            "Problem Solver",
        ],
        subtitle: "Membangun pengalaman digital yang bermakna melalui kode dan kreativitas.",
        ctaPrimary: { text: "Lihat Portfolio", href: "#portofolio" },
        ctaSecondary: { text: "Hubungi Saya", href: "#kontak" },
    },

    /* ──────────────────────────────────────────────
     *  SKILL / MINAT
     *  Tambah atau hapus skill sesuai kebutuhan
     *  - name  : Nama skill
     *  - level : Persentase penguasaan (0-100)
     *  - icon  : Kelas ikon FontAwesome
     * ────────────────────────────────────────────── */
    skills: [
        { name: "HTML & CSS", level: 100, icon: "fab fa-html5", color: "#E44D26" },
        { name: "Creative Writing", level: 100, icon: "fas fa-pencil-alt", color: "#F7DF1E" },
        { name: "UI/UX Design", level: 100, icon: "fas fa-palette", color: "#FF6BCB" },
        { name: "Ideation", level: 100, icon: "fas fa-lightbulb", color: "#61DAFB" },
    ],

    /* ──────────────────────────────────────────────
     *  MINAT / INTEREST
     * ────────────────────────────────────────────── */
    interests: [
        { name: "Web Development", icon: "fas fa-code" },
        { name: "UI/UX Designer", icon: "fas fa-pencil-ruler" },
        { name: "Mobile Development", icon: "fas fa-mobile-alt" },
        { name: "Front-End Developer", icon: "fas fa-laptop-code" },
    ],

    /* ──────────────────────────────────────────────
     *  PENUGASAN (Assignments)
     *  Update judul, deskripsi, dan link untuk setiap tugas
     * ────────────────────────────────────────────── */
    assignments: [
        {
            id: 2,
            title: "TOR LKMM TH",
            icon: "fas fa-file-pdf",
            actionType: "download",
            link: "TOR_Kegiatan_LKMM_TH.pdf",
        },
        {
            id: 3,
            title: "Infografis",
            icon: "fas fa-image",
            actionType: "view",
            link: "penugasan3.html",
        },
        {
            id: 4,
            title: "Video Penugasan",
            icon: "fas fa-video",
            actionType: "youtube",
            link: "https://youtu.be/WeF5EBN6EYg?si=Kjc9eFxTC_ABsPrc",
        },
    ],

    /* ──────────────────────────────────────────────
     *  PORTOFOLIO / PROYEK
     *  Tambah proyek baru dengan format objek di bawah
     * ────────────────────────────────────────────── */
    projects: [
        {
            title: "Website Portofolio",
            description: "Website portofolio personal dengan desain modern menggunakan glassmorphism dan animasi.",
            image: "",                              // Path gambar (opsional)
            tags: [],
            category: "web",
            liveUrl: "#",
            repoUrl: "#",
        },
        {
            title: "Alat Pendeteksi Kejernihan Air",
            description: "Alat yang mendeteksi tingkat kejernihan air menggunakan arduino uno.",
            image: "",
            tags: [],
            category: "web",
            liveUrl: "#",
            repoUrl: "#",
        },
        {
            title: "Prototype Aplikasi Pembantu Tugas Sekolah",
            description: "Prototype aplikasi yang memuat AI, translate, kalkulator untuk memudahkan pengerjaan tugas sekolah menggunakan MIT App Inventor.",
            image: "",
            tags: [],
            category: "web",
            liveUrl: "#",
            repoUrl: "#",
        },
    ],

    /* ──────────────────────────────────────────────
     *  ORGANISASI / PENGALAMAN
     * ────────────────────────────────────────────── */
    organizations: [
        {
            name: "Staff Kepengurusan Asrama SMA Negeri 1 Padang Panjang",
            role: "Anggota departemen pemberdayaan lingkungan hidup",
            period: "2023 - 2024",
            description: "Berkontribusi dalam pengawasan kebersihan lingkungan asrama SMA Negeri 1 Padang Panjang.",
            icon: "fas fa-users",
        },
        {
            name: "Rohis SMA Negeri 1 Padang Panjang",
            role: "Member",
            period: "2023 - 2024",
            description: "",
            icon: "fas fa-mosque",
        },
    ],

    /* ──────────────────────────────────────────────
     *  KONTAK & SOSIAL MEDIA
     *  Update link sosial media dan info kontak
     * ────────────────────────────────────────────── */
    contact: {
        email: "babandu1230@gmail.com",
        phone: "+62 812-2968-6454",
        location: "Bandung, Jawa Barat",
        socialMedia: [
            { platform: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/nadhiefm_" },
            { platform: "WhatsApp", icon: "fab fa-whatsapp", url: "https://wa.me/6281229686454" },
            { platform: "Email", icon: "fas fa-envelope", url: "mailto:babandu1230@gmail.com" },
            { platform: "Web", icon: "fas fa-globe", url: "#" },
        ],
    },

    /* ──────────────────────────────────────────────
     *  FOOTER
     * ────────────────────────────────────────────── */
    footer: {
        copyright: "© 2026 Nadhief Musyaffa. All rights reserved.",
        tagline: "Dibuat dengan 😵‍💫 dan ☕",
    },
};
