function goToContact() {
  window.location.href = "../contact/index.html";
}

function openWhatsApp(event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const wa = document.getElementById("wa").value.trim();

  if (nama && wa) {
    const pesan = `Halo, saya ${nama}. Saya ingin bertanya tentang layanan sound system.`;
    const waLink = `https://wa.me/${wa.replace(/^0/, '62')}?text=${encodeURIComponent(pesan)}`;
    window.open(waLink, "_blank");
  }
}
