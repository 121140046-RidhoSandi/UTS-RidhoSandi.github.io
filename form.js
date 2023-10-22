let data_penduduk=JSON.parse(localStorage.getItem("data")) || [];

renderData();

function checkObject(data) {
    for (const key in data) {
      if (data[key] === null || data[key] === '') {
        return false;
      }
    }
    return true;
  }

function addData(){
    const inputNIK=document.querySelector(".nik");
    const NIK=inputNIK.value;
    const inputNama=document.querySelector(".nama");
    const nama=inputNama.value;
    const inputPekerjaan=document.querySelector(".pekerjaan");
    const pekerjaan=inputPekerjaan.value;
    const inputNoTelp=document.querySelector(".notelp");
    const notelp=inputNoTelp.value;
    const inputDarah=document.querySelector(".darah");
    const darah=inputDarah.value;
    const inputKel=document.querySelector(".kelamin");
    const jenis_kelamin=inputKel.value;
    const inputLahir=document.querySelector(".lahir");
    const lahir=inputLahir.value;
    const inputAlamat=document.querySelector(".alamat");
    const alamat=inputAlamat.value;

    data={
        NIK:NIK,
        nama:nama,
        pekerjaan:pekerjaan,
        notelp:notelp,
        darah:darah,
        jenis_kelamin:jenis_kelamin,
        lahir:lahir,
        alamat:alamat,
    }
    const validasi=checkObject(data);

    if(validasi){
        data_penduduk.push(data);
        localStorage.setItem("data", JSON.stringify(data_penduduk));
        alert("Data Berhasil Di Input");
    }
}

function renderData(){
    let dataHTML = "";
  
    for (let i = 0; i < data_penduduk.length; i++) {
      const NIK = data_penduduk[i].nik;
      const nama = data_penduduk[i].nama;
      const pekerjaan = data_penduduk[i].pekerjaan;
      const notelp = data_penduduk[i].notelp;
      const darah = data_penduduk[i].darah;
      const jenis_kelamin = data_penduduk[i].jenis_kelamin;
      const lahir = data_penduduk[i].lahir;
      const alamat = data_penduduk[i].alamat;
      
      const html = `<tr><td>${NIK}</td><td>${nama}}</td><td>${pekerjaan}</td><td>${notelp}</td><td>${darah}</td><td>${jenis_kelamin}</td><td>${lahir}</td><td>${alamat}</td></tr>`;
      dataHTML += html;
    }
    document.querySelector(".data_penduduk").innerHTML += dataHTML;
}

function clearData(){
    localStorage.clear();
    location.reload();
}