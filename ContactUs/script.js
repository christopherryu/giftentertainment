function validateForm(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const statusMessage = document.getElementById("statusMessage");

  if (!nama || !email || !pesan) {
    statusMessage.textContent = "Mohon lengkapi semua field yang wajib diisi.";
    return false;
  }

  statusMessage.textContent = "Pesan Anda berhasil dikirim. Terima kasih!";
  document.getElementById("contactForm").reset();
  return false;
}
