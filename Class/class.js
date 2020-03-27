// class 
class Person{
    constructor(_fullName, _age, _position, _sallary){
        this.fullName = _fullName
        this.age = _age,
        this.address = 'Indonesia',
        this.jobDetail = {position: _position, sallary : _sallary}
        // constructor dg data dibawahnya harus berurutan
    }
    // Function 
    greet(){
        console.log(`Hello, I'am ${this.fullName}`)
    }
}
// Data Input
var Andi = new Person('Andi Maulana', 27, 'Manager', 1000000)
var Budi = new Person('Budi Ramdahan', 22, 'CTO', 12000000) 
var Charlie = new Person('Charlie Van Houten', 28, 'Singer', 98700000) 
// mengubah var person --> var andi,budi,charlie --> data dikirim ke atas
// var terbaru menyimpan sebuah data  
// jika ingin merubah var, class wajib menambahkan (new) didpn variable

Budi.greet()
// memanggil fungsi greet
console.log(Budi);
// menampilkan data budi