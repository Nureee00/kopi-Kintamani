// === Menu mobile ===
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('nav.links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('buka');
    });
  }

  // === Filter katalog produk (halaman produk.html) ===
  var filterBtns = document.querySelectorAll('.filter-btn');
  var kartuProduk = document.querySelectorAll('.produk-card');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('aktif'); });
        btn.classList.add('aktif');
        var kategori = btn.dataset.kategori;
        kartuProduk.forEach(function (card) {
          var cocok = kategori === 'semua' || card.dataset.kategori === kategori;
          card.style.display = cocok ? '' : 'none';
        });
      });
    });
  }

  // === Form kontak (simulasi kirim, tanpa backend) ===
  var form = document.querySelector('.form-kontak');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var nama = form.querySelector('#nama').value.trim();
      if (!nama) return;
      status.textContent = 'Terima kasih, ' + nama + '! Pesan Anda sudah kami terima, tim kami akan segera menghubungi Anda.';
      form.reset();
    });
  }

  // === Tahun berjalan di footer ===
  var tahunEl = document.querySelector('#tahun-footer');
  if (tahunEl) {
    tahunEl.textContent = new Date().getFullYear();
  }
});
