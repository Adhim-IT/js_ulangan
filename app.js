//soal1

let kendaraan = ['mobil', 'motor', 'sepeda', 'pesawat', 'kapal', 'bus', 'kereta', 'skuter', 'helikopter', 'kapal selam'];

function tampilkanKendaraan() {
  let kendaraanList = document.getElementById('kendaraanList');
  kendaraanList.innerHTML = '';

  kendaraan.forEach(function (kendaraan) {
    let listItem = document.createElement('li');
    listItem.textContent = kendaraan;
    kendaraanList.appendChild(listItem);
  });
}

function hapusKendaraanPertama() {
  let kendaraanYangDihapus = kendaraan.shift();
  tampilkanKendaraan();
}
tampilkanKendaraan();
document.getElementById('hapus').addEventListener('click', hapusKendaraanPertama);

//soal2
 function tampilkanKalimat() {
   var jumlahPerulangan = parseInt(document.getElementById('jumlahPerulangan').value);
   var kalimat = 'Saya orang yang sabar, ramah, dan tidak membenci orang';
   var outputDiv = document.getElementById('output');

   if (!isNaN(jumlahPerulangan)) {
     outputDiv.innerHTML = '';

     for (var i = 0; i < jumlahPerulangan; i++) {
       outputDiv.innerHTML += kalimat + '<br>';
     }
   } else {
     outputDiv.innerHTML = 'Masukkan angka yang valid';
   }
 }

 //soal3
 function tampilkanMenu() {
   var pilihan = document.getElementById('pilihanMenu').value.toLowerCase();
   var daftarMenu = document.getElementById('daftarMenu');

   if (pilihan === 'makanan') {
     daftarMenu.innerHTML = '<h3>Daftar Makanan:</h3><ul><li>Bakso</li><li>Mie Ayam</li><li>Soto</li><li>Kambing Guling</li><li>Ayam Bakar</li><li>Sate</li><li>Mie Goreng</li><li>Mendoan</li></ul>';
   } else if (pilihan === 'minuman') {
     daftarMenu.innerHTML = '<h3>Daftar Minuman:</h3><ul><li>Es Milo</li><li>Es Teh Manis</li><li>Es Jeruk</li><li>Es Campur</li><li>Es Kopi Susu</li><li>Es Teh Tawar</li><li>Es Dawet</li></ul>';
   } else {
     daftarMenu.innerHTML = 'Pilihan tidak valid. Silahkan pilih menu yang benar.';
   }
 }

 //soal4
        
  function hitung() {
    var angka1 = parseFloat(document.getElementById('angka1').value);
    var angka2 = parseFloat(document.getElementById('angka2').value);

    if (!isNaN(angka1) && !isNaN(angka2)) {
      var tambah = angka1 + angka2;
      var kurang = angka1 - angka2;
      var kali = angka1 * angka2;
      var bagi = angka1 / angka2;
      var terbesar = Math.max(angka1, angka2);

      var hasil = 'Penjumlahan: ' + tambah + '<br>';
      hasil += 'Pengurangan: ' + kurang + '<br>';
      hasil += 'Perkalian: ' + kali + '<br>';
      hasil += 'Pembagian: ' + bagi + '<br>';
      hasil += 'Bilangan terbesar: ' + terbesar;

      document.getElementById('hasil').innerHTML = hasil;
    } else {
      document.getElementById('hasil').innerHTML = 'Masukkan angka yang valid.';
    }
  }
