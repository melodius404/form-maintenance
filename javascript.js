// form
 // Ganti dengan URL Web App dari Google Apps Script
    const scriptURL = "https://script.google.com/macros/s/AKfycbyNf4GMx8EPUSIA5h2SbDz3lGigwf1N1DgMtx5Uoa3yqBCCMOqOIyjJ8xaBPcyCvb0dWQ/exec";

    document.getElementById("myForm").addEventListener("submit", e => {
      e.preventDefault();

      let data = {
        tanggal: document.getElementById("tanggal").value,
        nama: document.getElementById("nama").value,
        divisi: document.getElementById("divisi").value,
        area: document.getElementById("area").value,
        pesan: document.getElementById("pesan").value,
      };

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
      })
      .then(res => {
        alert("✅ Data berhasil ");
        document.getElementById("myForm").reset();
      })
      .catch(err => {
        alert("❌ Terjadi error: " + err);
      });
    });