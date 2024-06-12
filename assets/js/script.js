  // Ambil modal
  var modal = document.getElementById("editModal");

  // Ambil tombol-tombol edit
  var editButtons = document.querySelectorAll(".edit-button");

  // Ambil tombol-tombol untuk menutup modal
  var closeButtons = document.getElementsByClassName("close");

  // Ketika pengguna klik tombol edit, buka modal
  editButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      modal.style.display = "block";
      
      var row = button.closest('tr');

      itemname.value = row.cells[0].textContent;
      date.value = row.cells[1].textContent;
      harga.value = row.cells[2].textContent;
      stock.value = row.cells[3].textContent;
      supplier.value = row.cells[4].textContent;
    });
  });

  // Ketika pengguna klik tombol close (x), tutup modal
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      modal.style.display = "none"; // Set modal menjadi disembunyikan
    }
  }

  // Ketika pengguna klik di luar modal, tutup modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"; // Set modal menjadi disembunyikan
    }
  }

  // Tambahkan event listener pada form untuk menyimpan data yang telah diubah
  document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Hindari form untuk melakukan submit ke halaman baru

    // Ambil data yang diinputkan oleh pengguna
    var itemname = document.getElementById("itenname").value;
    var date = document.getElementById("date").value;
    var harga = document.getElementById("harga").value;
    var stock = document.getElementById("stock").value;
    var supplier = document.getElementById("supplier").value;

    // Lakukan sesuatu dengan data yang telah diubah, misalnya, kirim ke server

    // Setelah berhasil menyimpan perubahan, tutup modal
    modal.style.display = "none";
  });