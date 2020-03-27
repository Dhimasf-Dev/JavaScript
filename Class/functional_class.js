// Functional Class

function Rectangle(a,b) {
    this.penjumlahan = a+b;
    this.perkalian = a*b;
    this.text = script=()=>{
    // membuat function dalam class menggunakan (arrow function) 
      return `Hasil penjumlahan : ${this.penjumlahan} 
              Hasil perkalian : ${this.perkalian}`
    }
  }
// input data
var hasil = new Rectangle(2,3)
// merubah var Rectangle --> var hitung
// membawa sebuah data --> dikirimkan ke atas  
// jika ingin merubah var, class wajib menambahkan (new) didpn variable

console.log(hasil.text());
// memanggil function dalam class
// wajib menggunakan simbol () krn sdg memanggil sebuah function
  