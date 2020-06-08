// konsep this pada arrow function

// Constructor function
const Mahasiswa = function(){
    this.nama = "saifudin";
    this.umur = 29;
    this.sayHelo = function(){
        console.log(`helo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun`);
    }
}

const saifudin = new Mahasiswa();

// Arrow function tidak memiliki konsep this
//contoh penggunaan arrow function
const Mahasiswa1 = function(){
    this.nama = "saifudin";
    this.umur = 29;
    this.sayHelo = ()=>{
        console.log(`helo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun`);
    }
    setInterval(() => {
        console.log(this.umur++);
    },5000)
}

const mahara = new Mahasiswa1();