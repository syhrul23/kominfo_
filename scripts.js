const days = document.querySelectorAll('.weekdays li');

  days.forEach(day => {
    day.addEventListener('click', function () {
      // Hapus active-date di semua hari
      days.forEach(d => d.classList.remove('active-date'));

      // Tambahkan active-date di yang diklik
      this.classList.add('active-date');

      // Kamu juga bisa load data agenda sesuai tanggal di sini
      console.log("Kamu klik hari: ", this.dataset.day);
    });
  });


// Kode ini akan memastikan seluruh DOM sudah dimuat sebelum dijalankan
document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan referensi ke tombol kustom Anda di floating-icon-bar
    const customAccessibilityButton = document.getElementById('openAccessibilityMenuButton');

    if (customAccessibilityButton) {
        // Tambahkan event listener untuk merespons klik pada tombol kustom
        customAccessibilityButton.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default tautan (melompat ke atas halaman)

            // Cari tombol menu default widget Sienna yang disembunyikan
            // Widget Sienna membuat tombol ini secara internal, bahkan jika "hidden"
            const siennaMenuButton = document.querySelector('.asw-menu-btn');

            if (siennaMenuButton) {
                // Simulasikan klik pada tombol default Sienna untuk membuka menunya
                siennaMenuButton.click();
            } else {
                // Pesan peringatan jika tombol Sienna tidak ditemukan (jarang terjadi jika widget dimuat dengan benar)
                console.warn("Sienna Accessibility Widget button (asw-menu-btn) not found. This might happen if the Sienna widget itself hasn't fully loaded or is configured incorrectly.");
                // Opsi: Anda bisa menambahkan alert lain ke pengguna di sini jika diinginkan
                // alert("Maaf, fitur aksesibilitas belum dapat dimuat sepenuhnya. Silakan coba lagi nanti.");
            }
        });
    } else {
        console.error("Custom accessibility button with ID 'openAccessibilityMenuButton' not found in the HTML. Please ensure the ID is correct.");
    }

});

// Tunggu hingga seluruh halaman dimuat
document.addEventListener('DOMContentLoaded', function() {

    // --- KODE MODAL PENILAIAN ---

    // Ambil elemen-elemen yang dibutuhkan
    const modalPenilaian = document.getElementById('modalPenilaian');
    const tombolBuka = document.getElementById('tombolBeriPenilaian');
    const tombolTutupSpan = document.querySelector('.close-button');
    const tombolTutupBtn = document.getElementById('tombolTutupModal');

    // Fungsi untuk menampilkan modal
    function bukaModal() {
        modalPenilaian.style.display = 'block';
    }

    // Fungsi untuk menyembunyikan modal
    function tutupModal() {
        modalPenilaian.style.display = 'none';
    }

    // Ketika ikon "Beri Penilaian" diklik, panggil fungsi bukaModal
    tombolBuka.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link # melompat ke atas
        bukaModal();
    });

    // Ketika tombol (X) diklik, panggil fungsi tutupModal
    tombolTutupSpan.addEventListener('click', tutupModal);

    // Ketika tombol "Tutup" diklik, panggil fungsi tutupModal
    tombolTutupBtn.addEventListener('click', tutupModal);

    // Ketika pengguna mengklik di luar area modal (di latar belakang gelap), tutup juga modalnya
    window.addEventListener('click', function(event) {
        if (event.target == modalPenilaian) {
            tutupModal();
        }
    });

    // --- AKHIR KODE MODAL PENILAIAN ---
    
    // (Kode JavaScript Anda yang lain bisa tetap di sini)
});

