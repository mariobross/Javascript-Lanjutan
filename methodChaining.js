const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log(angka);

// method Chaining adalah method berantai
// method Chaining example
// cari angka > 5
// lalu kalikan 3
// dan jumlahkan

const hasil = angka.filter( a=> a>5 )
            .map( a => a*3 )
            .reduce( (acc, cur) => acc + cur );
console.log(hasil);

// latihan kasus 
// ---------------------------#################--------------------------------------
//  ambil semua element video menggunakan method Array untuk mengubah nodelist menjadi array
    const videos = Array.from(document.querySelectorAll('[data-duration]'));
    console.log(videos);

//  pilih yang javascript lanjutan dan ambil durasi masing-masing video dengan method chaning
    const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map(Item => Item.dataset.duration);
    console.log(jsLanjut);

//  ubah durasi video yang string menjadi float, dan ubah menit menjadi detik
    const waktuVideo = jsLanjut.map(waktu =>{
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0]*60)+parts[1];
    });
    console.log(waktuVideo);

//  jumlahkan semua detiknya
    const TotalDetik = waktuVideo.reduce((total, detik) =>total + detik);
    console.log(TotalDetik);

//  ubah formatnya jadi jam menit detik
    const jam = Math.floor(TotalDetik/ 3600);
    const sisaJam = TotalDetik - jam * 3600;
    const menit = Math.floor(sisaJam/60);
    const detik = sisaJam - menit * 60 ;

    console.log(jam , menit, detik);

// jumlah video dan simpan di DOM
    const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
    const elemenJmlVideo = document.querySelector('.jumlah-video');
    elemenJmlVideo.textContent = `${jmlVideo} video`;

// simpan di DOM 
    const elemenDurasi = document.querySelector('.total-durasi');
    elemenDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} detik`;