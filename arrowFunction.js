// function expression
let tampilanPesan = function(nama){
    console.log(`Halo ${nama}`);
}

tampilanPesan('Saifudin Mahara');

// arrow function
let tampilanPesanArrow = (nama) => {
    console.log(`Halo ${nama}`);
}
// arrow function tanpa parameter
let tampilanPesanNoParam = () => {
    console.log(`Halo Word`);
}

tampilanPesanArrow('Saifudin Mahara Arrow');
tampilanPesanNoParam();

// implisit return, hanya mempunyai parameter satu dan isinya return saja
let tampilanPesanImplisit = nama => console.log(`Halo ${nama}`);

tampilanPesanImplisit('Saifudin Mahara Implisit');


let mahasiswa=['saifudin mahara', 'alfan ardiansyah','adjie'];

// menggunakan method map pada function expresion
let jumlahHuruf = mahasiswa.map(function(nama){
    return nama.length;
});

console.log(jumlahHuruf);

let jumlahHurufArrow = mahasiswa.map(nama=>nama.length);

console.log(jumlahHurufArrow);

let jumlahHurufResultObj = mahasiswa.map(nama => ({
    nama,
    jmlHuruf: nama.length
}));

console.log(jumlahHurufResultObj);
