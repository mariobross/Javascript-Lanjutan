// higher order function adalah function yang mempunyai parameternya function/callback adalah argument
// example 1
function kerjakanTugas(matakuliah, selesai){
    console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
    selesai();
}

function selesai(){
    alert('Selesai mengerjakan tugas');
}

kerjakanTugas('Pemograman Web', selesai);

// example 2
function repeat(n, action){
    for(let i =0; i<=n; i++){
        action(i)
    }
}

repeat(10,console.log);

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log(angka);
// mencari angka >= 3
// menggunakan method for 
const angkaBaru = [];
for(let i=0; i< angka.length; i++){
    if(angka[i] >= 3){
        angkaBaru.push(angka[i]);
    }
}
console.log(angkaBaru);

// menggunakan method filter 
const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);

// menggunakan method map
// kalikan 2 semua element array 
const mapAngka = angka.map(a=>a*2);
console.log(mapAngka);

// munggunakan method reduce 
// menjumlahkan semua yang ada di dalam array 
// reduce mempunya dua parameter 
// dan ada parameter default yang ketiga adalah nilai awal, dah defaultnya 0
const reduceAngka = angka.reduce((accumulator, currentValue) => 
    accumulator + currentValue
);
console.log(reduceAngka);