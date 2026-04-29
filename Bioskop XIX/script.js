// ===== HITUNG TAGIHAN =====
function hitungTagihan() {
  // Harga
  const HARGA_TIKET = 35000;
  const HARGA_POPCORN = 10000;
  const HARGA_BREAD = 10000;
  const HARGA_SOFTDRINK = 5000;
  const HARGA_COLDTEA = 5000;

  // Ambil jumlah tiket
  var jumlahTiket = document.getElementById('jumlah-tiket').value;

  // Validasi jumlah tiket
  if (!jumlahTiket || jumlahTiket < 1 || jumlahTiket > 9) {
    alert('Jumlah tiket harus diisi (1-9 tiket)!');
    return;
  }

  jumlahTiket = parseInt(jumlahTiket);

  // Hitung total tiket
  var totalTiket = HARGA_TIKET * jumlahTiket;

  // Hitung makanan
  var totalMakanan = 0;
  var detailMakanan = [];

  var checkboxes = document.querySelectorAll('input[name="makanan"]:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    var value = checkboxes[i].value;
    if (value === 'popcorn') {
      totalMakanan += HARGA_POPCORN;
      detailMakanan.push('Pop Corn');
    } else if (value === 'bread') {
      totalMakanan += HARGA_BREAD;
      detailMakanan.push('XIX Bread');
    } else if (value === 'softdrink') {
      totalMakanan += HARGA_SOFTDRINK;
      detailMakanan.push('XIX Softdrink');
    } else if (value === 'coldtea') {
      totalMakanan += HARGA_COLDTEA;
      detailMakanan.push('XIX Cold Tea');
    }
  }

  // Total keseluruhan
  var totalBayar = totalTiket + totalMakanan;

  // Format rupiah
  var formatted = 'Rp ' + totalBayar.toLocaleString('id-ID') + ',00';

  // Tampilkan hasil
  var resultBox = document.getElementById('result-box');
  var resultText = document.getElementById('result-text');

  var detail = jumlahTiket + ' tiket (Rp ' + totalTiket.toLocaleString('id-ID') + ')';
  if (detailMakanan.length > 0) {
    detail += ' + ' + detailMakanan.join(', ') + ' (Rp ' + totalMakanan.toLocaleString('id-ID') + ')';
  }

  resultText.innerHTML = 'Uang yang harus anda bayarkan: <strong>' + formatted + '</strong><br><small style="color:#ccc;">Detail: ' + detail + '</small>';
  resultBox.style.display = 'block';
}

// ===== VALIDASI FORM & SUBMIT =====
function handleSubmit(event) {
  event.preventDefault();

  var nama = document.getElementById('nama').value.trim();
  var hp = document.getElementById('handphone').value.trim();
  var tiket = document.getElementById('jumlah-tiket').value;

  // Validasi nama
  if (nama === '') {
    alert('Nama wajib diisi!');
    return false;
  }

  // Validasi nomor HP - harus 12 digit angka
  if (hp === '') {
    alert('Nomor Handphone wajib diisi!');
    return false;
  }

  var hpRegex = /^[0-9]{12}$/;
  if (!hpRegex.test(hp)) {
    alert('Nomor telepon wajib diisi angka dengan panjang 12 digit!');
    return false;
  }

  // Validasi jumlah tiket
  if (!tiket || tiket < 1 || tiket > 9) {
    alert('Jumlah tiket wajib diisi (1-9 tiket)!');
    return false;
  }

  // Hitung tagihan otomatis
  hitungTagihan();

  alert('Registrasi berhasil dikirim!\n\nNama: ' + nama + '\nFilm: ' + document.getElementById('film').value + '\nJadwal: ' + document.getElementById('jadwal').value);
  return false;
}
