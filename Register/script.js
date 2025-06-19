document.getElementById("dob").addEventListener("change", function () {
  const dob = new Date(this.value);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  // Kurangi umur 1 tahun jika belum ulang tahun tahun ini
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  // Pastikan valid dan tampilkan
  if (!isNaN(age) && age >= 0) {
    document.getElementById("age").value = age;
  } else {
    document.getElementById("age").value = "";
  }
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let msg = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validasi 1: Nama wajib diisi
  if (name === "") {
    msg = "Name is required.";
  }

  // Validasi 2: Email tidak boleh kosong
  else if (email === "") {
    msg = "Email is required.";
  }

  // Validasi 3: Password minimal 6 karakter
  else if (password.length < 6) {
    msg = "Password must be at least 6 characters.";
  }

  // Validasi 4: Umur minimal 13
  else if (isNaN(age) || age < 13) {
    msg = "You must be at least 13 years old.";
  }

  // Validasi 5: Gender wajib dipilih
  else if (!gender) {
    msg = "Please select a gender.";
  }

  if (msg) {
    document.getElementById("formMsg").textContent = msg;
  } else {
    document.getElementById("formMsg").style.color = "green";
    document.getElementById("formMsg").textContent = "Registration successful!";
    this.reset();
  }
});