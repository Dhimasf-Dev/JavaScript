var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var arrayOfStrings = monthString.split(",");
var dashVersion = arrayOfStrings.join("-");

console.log(dashVersion)
//Jan-Feb-Mar-Apr-May-Jun-Jul-Aug-Sep-Oct-Nov-Dec
// join : hanya menerima array dan mereplace separator 

console.log(arrayOfStrings)
// [
//  'Jan', 'Feb', 'Mar',
//  'Apr', 'May', 'Jun',
//  'Jul', 'Aug', 'Sep',
//  'Oct', 'Nov', 'Dec'
// ]
// split: dipisah setiap ketemu koma di dlm sbuah string, jika string kosong menjadi 1 kata yg dipisah
// output berupa array

