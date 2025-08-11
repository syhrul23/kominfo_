// Tunggu hingga seluruh elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {

    // Ambil elemen yang kita butuhkan dari HTML
    const searchInput = document.getElementById('searchInput');
    const searchResultsContainer = document.getElementById('searchResults');
    
    // Daftar ID dari section-section yang ingin kita cari kontennya
    const searchableSectionIDs = ['layanan', 'berita', 'pejabat'];
    const searchableSections = searchableSectionIDs.map(id => document.getElementById(id));

    // Tambahkan 'event listener' yang akan berjalan setiap kali pengguna mengetik
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase().trim();

        // Kosongkan hasil pencarian sebelumnya
        searchResultsContainer.innerHTML = '';

        // Hanya lakukan pencarian jika kata kunci lebih dari 2 huruf
        if (query.length > 2) {
            searchResultsContainer.style.display = 'block'; // Tampilkan kotak hasil
            let itemsFound = false;

            // Loop melalui setiap section yang bisa dicari
            searchableSections.forEach(section => {
                // Pastikan section-nya ada di halaman
                if (!section) return;

                const sectionText = section.innerText.toLowerCase();
                const sectionTitle = section.querySelector('h2').innerText;

                // Cek apakah section tersebut mengandung kata kunci
                if (sectionText.includes(query)) {
                    itemsFound = true; // Tandai bahwa kita menemukan hasil

                    // --- Membuat Cuplikan Teks (Snippet) ---
                    let snippet = '';
                    const index = sectionText.indexOf(query);
                    const start = Math.max(0, index - 30); // Ambil 30 karakter sebelum kata kunci
                    const end = Math.min(sectionText.length, index + query.length + 70); // Ambil 70 karakter setelah kata kunci
                    snippet = '...' + sectionText.substring(start, end) + '...';
                    // Beri highlight pada kata kunci di cuplikan
                    snippet = snippet.replace(new RegExp(query, 'gi'), (match) => `<strong style="background-color: #dd8c43; color: white;">${match}</strong>`);

                    // Buat elemen baru untuk setiap hasil yang ditemukan
                    const resultElement = document.createElement('div');
                    resultElement.classList.add('result-item');
                    
                    // Link akan mengarah ke ID section
                    const link = document.createElement('a');
                    link.href = `#${section.id}`;
                    link.textContent = `Ditemukan di Bagian: ${sectionTitle}`;

                    const context = document.createElement('p');
                    context.innerHTML = snippet; // Gunakan innerHTML karena ada tag <strong>
                    
                    resultElement.appendChild(link);
                    resultElement.appendChild(context);
                    
                    // Tambahkan hasil ke dalam kontainer
                    searchResultsContainer.appendChild(resultElement);

                    // Menutup hasil pencarian saat link diklik
                    link.addEventListener('click', function() {
                        searchResultsContainer.style.display = 'none';
                    });
                }
            });

            // Jika setelah selesai mencari tidak ada hasil yang ditemukan
            if (!itemsFound) {
                searchResultsContainer.innerHTML = '<p style="text-align:center; color:#888;">Tidak ada hasil ditemukan.</p>';
            }

        } else {
            // Sembunyikan kotak hasil jika input kosong atau terlalu pendek
            searchResultsContainer.style.display = 'none';
        }
    });

    // Sembunyikan hasil pencarian saat pengguna mengklik di luar area
    document.addEventListener('click', function(event) {
        if (!searchResultsContainer.contains(event.target) && event.target !== searchInput) {
            searchResultsContainer.style.display = 'none';
        }
    });
});