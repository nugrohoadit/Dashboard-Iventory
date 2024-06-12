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

      suppliername.value = row.cells[0].textContent;
      address.value = row.cells[1].textContent;
      contactname.value = row.cells[2].textContent;
      phonenumber.value = row.cells[3].textContent;
      notes.value = row.cells[4].textContent;
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
    var suppliername = document.getElementById("suppliername").value;
    var address = document.getElementById("address").value;
    var contactname = document.getElementById("contactname").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var notes = document.getElementById("notes").value;

    // Lakukan sesuatu dengan data yang telah diubah, misalnya, kirim ke server

    // Setelah berhasil menyimpan perubahan, tutup modal
    modal.style.display = "none";
  });