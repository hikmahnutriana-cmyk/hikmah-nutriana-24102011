// fungsi show/hide form
function toggleForm() {
    const formBox = document.getElementById("formBox");
    formBox.style.display = formBox.style.display === "none" ? "block" : "none";
}

// ambil form
const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // biar tidak reload

    // ambil nilai input
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const hp = document.getElementById("hp").value;
    const pesan = document.getElementById("pesan").value;

    // validasi sederhana
    if (nama === "" || email === "" || hp === "" || pesan === "") {
        alert("Semua field harus diisi!");
        return;
    }

    // tampilkan alert seperti di gambar
    alert("Pesan berhasil dikirim!");

    // tampilkan ke daftar
    const daftar = document.getElementById("daftar");
    const li = document.createElement("li");
    li.textContent = `${nama} - ${email} - ${hp} - ${pesan}`;
    daftar.appendChild(li);

    // reset form
    form.reset();
});
