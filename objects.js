// cara - cara membuat object pada javascript
// 1. Object Literal
// kelemahan tidak cocok untuk banyak object
let mahasiswa = {
    nama: 'Saifudin',
    energi: 10,
    makan: function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama} selamat makan`)
    }
}
// 2. Function Declaration
// kelemahan managemant memory besar saat bnyak inisialisasi
// cara mengakalinya dengan memisahkan method dalah satu object yang berbeda, agar tidak di create berulang ulang di memory

const methodPelajar = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama} selamat makan`);
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`selamat main ${this.nama}`);
    },
    tidur: function(jam){
        this.energi += jam * 2;
        console.log(`Hallo ${this.nama} selamat tidur`)
    }
}
function Pelajar(nama, energi){
    let pelajar = {};
    pelajar.nama = nama;
    pelajar.energi = energi;
    pelajar.makan = methodPelajar.makan; //pemanggilan biasa object yang berbeda
    pelajar.main = methodPelajar.main; //pemanggilan biasa object yang berbeda
    pelajar.tidur = methodPelajar.tidur; //pemanggilan biasa object yang berbeda

    // /--kode awal--/
        // pelajar.makan = function(porsi){
        //     this.energi += porsi;
        //     console.log(`Halo ${this.nama} selamat makan`);
        // }

        // pelajar.main= function(jam){
        //     this.energi -= jam;
        //     console.log(`selamat main ${this.nama}`);
        // }
    // /--end kode awal--/

    return pelajar
}
let mahara = Pelajar('saifudin mahara', 10);//pemanggilan function declaration
// 3. Constructor Function
function Pemain(nama, energi){

    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama} selamat makan`);
    }

    this.main= function(jam){
        this.energi -= jam;
        console.log(`selamat main ${this.nama}`);
    }
}

let Gunawan = new Pemain('gunawan dwi',18);// cara pemanggilan Constructor Function

// 4. Object.create

const methodBergaya = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama} selamat makan`);
    },
    main: function(jam){
        this.energi -= jam;
        console.log(`selamat main ${this.nama}`);
    },
    tidur: function(jam){
        this.energi += jam * 2;
        console.log(`Hallo ${this.nama} selamat tidur`)
    }
}
function Bergaya(nama, energi){
    let gaya = Object.create(methodBergaya);
    gaya.nama = nama;
    gaya.energi = energi;
   
    return gaya;
}
let Cendra = Bergaya('saifudin mahara', 10);//pemanggilan function declaration