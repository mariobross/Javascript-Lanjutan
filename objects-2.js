// ini cara  dan konsep inhireten/pewarisan pada javascript
function Pemain(nama, energi){
    this.nama = nama;
    this.energi = energi;
}

Pemain.prototype.makan = function(porsi){
    this.energi += porsi;
    console.log(`Hallo ${this.nama} selamat makan`);
}

Pemain.prototype.bermain = function(jam){
    this.energi -= jam;
    console.log(`Hallo ${this.nama} selamat bermain`);
}

Pemain.prototype.tidur = function(jam){
    this.energi += jam * 2;
    console.log(`Hallo ${this.nama} selamat tidur`)
}

let gunawan = new Pemain('gunawan dwi',18);// cara pemanggilan Constructor Function


// versi class
class Mahasiswa {
    constructor(nama, energi){
        this.name= nama;
        this.energi = energi;
    }
    makan(porsi){
        this.energi += porsi;
        console.log(`Hallo ${this.nama} selamat makan`);
    }
    bermain(jam){
        this.energi -= jam;
        console.log(`Hallo ${this.nama} selamat bermain`);
    }
    tidur(jam){
        this.energi += jam * 2;
        console.log(`Hallo ${this.nama} selamat tidur`)
    }
}

let dody = new Mahasiswa("Dody anugrah", 11);