var s = 1234
var message = 'input bkn string'

try{
  // mentest sebuah kode dan menjalankannya jika input sesuai dg kodenya
  console.log(s.split("").reverse().join("")) 
  // Split : hanya menerima string, membagi huruf kata/kata dan menghasilkan array
  // reverse : membalikan kalimat yg ada di array
  // join : menerima array dan merubah ke string biasa
}
catch(e){
  // jika kode tdk sesuai akan menjalankan....
  console.log(message); 
  console.log(s);
}